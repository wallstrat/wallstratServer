import { PublicContainer } from '../../../market/marketdata'
import Bottleneck from "bottleneck"
const rateLimiter = new Bottleneck({
  maxConcurrent: 1, // jobs can be running at the same time
  minTime: 1000 // wait timem before launching another one
});

export class LunoPublic extends PublicContainer{
	constructor(options: any={}) {
    	super(options, rateLimiter);
  	}
	fetchCurrencies(){

	}
  	fetchProducts(){

  	}
  	fetchOrderBook(productID='XBTZAR') {
    	const path = ['orderbook'];
    	let params = {
      		'pair': productID,
    	}
    	let OrderBook = this.fetchMarketData(path, { qs: params });
    	return OrderBook;
  	}
  	fetchBestBidBestAsk(productID='XBTZAR'){
  		
  	}
  	fetchOrderBookTOB(productID='XBTZAR') {
    	const path = ['orderbook_top'];
    	let params = {
      		'pair': productID,
    	}
    	let OrderBook = this.fetchMarketData(path, { qs: params });
    	return OrderBook;
  	}
  	fetchTicker(productID='XBTZAR') {
    	const path = ['ticker']
    	let params = {
      		'pair': productID
    	}
    	let ticker = this.fetchMarketData(path, { qs: params });
    	return ticker;
  	}
  	fetchTIckers() {
    	const path = ['tickers'];
    	let tickers = this.fetchMarketData(path);
    	return tickers;
  	}
  	fetchAllTrades(productID='tBTCUSD', startTime) {
    	const path = ['trades', productID, 'hist'];
    	let params = {
      		'pair':productID,
      		'since':startTime //Fetch trades executed after this time, specified as a Unix timestamp in milliseconds.
    	}
    	let trades = this.fetchMarketData(path, { qs: params });
    	return trades;
  	}

  	//
  getCurrencies(options:any){
    return this.fetchCurrencies()
  }
  getProducts(options:any){
    return this.fetchProducts()
  }
  getOrderBook(options:any){
    return this.fetchOrderBook(options.productID)
  }
  getBestBidBestAsk(options:any){
    return this.fetchBestBidBestAsk(options.productID)
  }
  getTicker(options:any){
    return this.fetchTicker(options.productID)
  }
  getAllTrades(options:any){
    return this.fetchAllTrades(options.productID, options.startTime)
  }
  getHistoricRates(options:any){
    
  }
  getChange(options:any){

  }
  

}
