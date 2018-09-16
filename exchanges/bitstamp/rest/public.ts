import { PublicContainer } from '../../../market/marketdata'
import Bottleneck from "bottleneck"
const rateLimiter = new Bottleneck({
  maxConcurrent: 1, // jobs can be running at the same time
  minTime: 1000 // wait timem before launching another one
});

export class BitstampPublic extends PublicContainer{
	constructor(options: any={}) {
      super(options, rateLimiter);
  	}
	fetchCurrencies() {
    	// const path = ['Assets'];
    	// return this.makefetchRequest(path);
    	return this.fetchMarketData(['v2','trading-pairs-info']);
  	}
	fetchProducts() {
    	return this.fetchMarketData(['v2','trading-pairs-info']);
  	}
  	fetchOrderBook(productID='btcusd') {
    	const path = ['v2','order_book', productID];
    	let OrderBook = this.fetchMarketData(path);
    	return OrderBook;
  	}
  	fetchBestBidBestAsk(productID='btcusd'){
  		// fetch from the ticker
  	}
  	fetchTicker(productID='btcusd') {
    	//https://www.bitstamp.net/api/v2/ticker/{currency_pair}/
    	const path = ['v2', 'ticker', productID];
    	let ticker = this.fetchMarketData(path);
    	return ticker;
  	}
  	fetchHourlyTicker(productID='btcusd') {
    	//https://www.bitstamp.net/api/v2/ticker/{currency_pair}/
    	const path = ['v2', 'ticker_hour', productID];
    	let hourticker = this.fetchMarketData(path);
    	return hourticker;
  	}
  	fetchAllTrades(productID='btcusd', interval='hour') { // interva; = minute, hour, day
    	const path = ['v2', 'transactions', productID];
    	let params = {
      		'time': interval // optional, hour by default
    	}
    	let trades = this.fetchMarketData(path, { qs: params });
    	return trades;
  	}
  	fetchHistoricRates(productID='btcusd'){
  		
  	}
  	fetchConversionRate(productID='eur_usd'){
  		const path = [productID];
    	let conversionRate = this.fetchMarketData(path);
    	return conversionRate;
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
    	return this.fetchAllTrades(options.productID, options.interval)
  	}
  	getHistoricRates(options:any){
    	return this.fetchHistoricRates(options.productID)
  	}
    getChange(options:any){

    }
    

}
