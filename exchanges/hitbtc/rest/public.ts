import { PublicContainer } from '../../../market/marketdata'
import Bottleneck from "bottleneck"
const rateLimiter = new Bottleneck({
  maxConcurrent: 1, // jobs can be running at the same time
  minTime: 500 // wait timem before launching another one
});

export class HitbtcPublic extends PublicContainer{
	constructor(options: any={}) {
      super(options, rateLimiter);
  	}
	fetchCurrencies() {
    	const path = ['currency']
    	return this.fetchMarketData(path);
  	}
	fetchProducts() {
    	return this.fetchMarketData(['symbol']);
  	}
  	fetchOrderBook(productID='ETHBTC', level=10) {
    	const path = ['orderbook', productID]
    	let params = {
      		'limit': level
    	}
    	let OrderBook = this.fetchMarketData(path, { qs: params });
    	return OrderBook;
  	}
  	fetchBestBidBestAsk(productID='ETHBTC'){
  		
  	}
  	fetchTicker(productID='ETHBTC') {
    	const path = ['ticker', productID]
    	let ticker = this.fetchMarketData(path);
    	return ticker;
  	}
  	fetchTickers() {
    	const path = ['ticker']
    	let tickers = this.fetchMarketData(path);
    	return tickers;
  	}
  	fetchAllTrades(productID='ETHBTC', numRecords=50) {
    	const path = ['trades', productID];
    	let params = {
      		'limit':numRecords,
    	}
    	let trades = this.fetchMarketData(path, params);
    	return trades;
  	}
  	fetchHistoricRates(productID='ETHBTC', limit_ = 300, period_='D1') {
    	let params = {
    		'limit': limit_,
      	'period':period_  // One of: M1 (one minute), M3, M5, M15, M30, H1, H4, D1, D7, 1M (one month). Default is M30 (30 minutes).
    	}
    	const path = ['candles', productID]; 
    	let historicalRates = this.fetchMarketData(path, { qs: params });
    	return historicalRates;
  	}

  	//
  getCurrencies(options:any){
    return this.fetchCurrencies()
  }
  getProducts(options:any){
    return this.fetchProducts()
  }
  getOrderBook(options:any){
    return this.fetchOrderBook(options.productID, options.level)
  }
  getBestBidBestAsk(options:any){
    return this.fetchBestBidBestAsk(options.productID)
  }
  getTicker(options:any){
    return this.fetchTicker(options.productID)
  }
  getTickers(){
    return this.fetchTickers()
  }
  getAllTrades(options:any){
    return this.fetchAllTrades(options.productID, options.level)
  }
  getHistoricRates(options:any){
    return this.fetchHistoricRates(options.productID, options.limit, options.period)
  }
  getChange(options:any){

  }
  
}
