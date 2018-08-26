import { PublicContainer } from '../../../market/marketdata'
import Bottleneck from "bottleneck"
const rateLimiter = new Bottleneck({
  maxConcurrent: 1, // jobs can be running at the same time
  minTime: 700 // wait timem before launching another one
});

export class GeminiPublic extends PublicContainer{
	constructor(options: any={}) {
      super(options, rateLimiter);
  	}
  	fetchCurrencies() {
  		const path = ['symbols'];
  		return this.fetchMarketData(path);
  	}
  	fetchProducts() {
    	const path = ['symbols']
  		return this.fetchMarketData(path);
  	}
  	fetchOrderBook(productID='btcusd', level=10) {
  		// default level is 50
    	const path = ['book', productID];
    	let params = {
      		'limit_bids': level, // May be 0 to return the full order book on this side
      		'limit_asks':level  
    	}
    	let OrderBook = this.fetchMarketData(path, { qs: params });
    	return OrderBook;
  	}
  	fetchBestBidBestAsk(productID='btcusd'){
  		
  	}
  	fetchTicker(productID='btcusd') {
    	const path = ['pubticker', productID];
    	let ticker = this.fetchMarketData(path);
    	return ticker;
  	}
  	fetchAllTrades(productID='btcusd') {
    	const path = ['trades', productID];
    	// let params = {
     //  		'limit_trades':limit,
     //  		'since':startTime // The number of milliseconds since 1970-01-01 UTC. Optional. Only return trades after this timestamp. If not present, will show the most recent trades      		
    	// }
    	// let trades = this.fetchMarketData(path, { qs: params });
    	let trades = this.fetchMarketData(path);
    	return trades;
  	}
  	fetcCurrentAuction(productID='btcusd'){
  		const path = ['auction', productID];
    	let auction = this.fetchMarketData(path);
    	return auction;
  	}
  	fetcHistoricalAuction(productID='btcusd', startTime){
  		const path = ['auction', productID, 'history'];
  		let params = {
      		'since': startTime  
    	}
    	let auction = this.fetchMarketData(path, { qs: params });
    	return auction;
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
  	getAllTrades(options:any){
    	return this.fetchAllTrades(options.productID)
  	}
  	getHistoricRates(options:any){
    
  	}
    getChange(options:any){

    }
    

}
