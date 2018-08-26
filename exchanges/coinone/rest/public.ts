import { PublicContainer } from '../../../market/marketdata'
import Bottleneck from "bottleneck"
const rateLimiter = new Bottleneck({
  maxConcurrent: 1, // jobs can be running at the same time
  minTime: 500 // wait timem before launching another one
});

export class CoinonePublic extends PublicContainer{
	constructor(options: any={}) {
      super(options, rateLimiter);
  	}
  	fetchCurrencies() {
  		
  	}
  	fetchProducts() {
  		
  	}
  	fetchOrderBook(productID='btc') { // Allowed values: btc, bch, eth, etc, xrp, qtum, iota, ltc, btg, omg, eos, data, zil, knc, zrx
    	const path = ['orderbook'];
    	let params = {
      		'currency': productID
    	}
    	let OrderBook = this.fetchMarketData(path, { qs: params });
    	return OrderBook;
  	}
  	fetchBestBidBestAsk(productID='btc'){

  	}
  	fetchTicker(productID='btc') {
    	const path = ['ticker_utc']; // ticker
    	let params = {
      		'currency': productID
    	}
    	let ticker = this.fetchMarketData(path, { qs: params });
    	return ticker;
  	}
  	fetchAllTrades(productID='btc', period_) {
    	const path = ['trades'];
    	let params = {
    		'currency':productID,
      	'period':period_  // Allowed values: hour, day. Default value: hour
    	}
    	let trades = this.fetchMarketData(path, { qs: params });
    	return trades;
  	}
  	fetchHistoricRates(productID='btc'){

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
    	return this.fetchAllTrades(options.productID, options.period)
  	}
  	getHistoricRates(options:any){
    	return this.fetchHistoricRates(options.productID)
  	}
    getChange(options:any){

    }
    

}
