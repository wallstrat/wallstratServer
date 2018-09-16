import { PublicContainer } from '../../../market/marketdata'
import Bottleneck from "bottleneck"
const rateLimiter = new Bottleneck({
  maxConcurrent: 1, // jobs can be running at the same time
  minTime: 1000 // wait timem before launching another one
});

export class KrakenPublic extends PublicContainer{
	constructor(options: any={}) {
    super(options, rateLimiter);
  }
	
	fetchCurrencies() {
    	const path = ['Assets'];
    	return this.fetchMarketData(path);
  }
	fetchProducts() {
    	return this.fetchMarketData(['AssetPairs']);
  }
  fetchOrderBook(productID='BCHUSD', level) {
    const path = ['Depth'];
    let params = {
      	'pair': productID,
      	'count':level
    }
    let OrderBook = this.fetchMarketData(path, { qs: params });
    return OrderBook;
  }
  fetchBestBidBestAsk(productID='BCHUSD'){

  }
  fetchTicker(productID='BCHUSD') {
    const path = ['Ticker'];
    let params = {
      'pair': productID, // comma delimited list of asset pairs to fetch info on
    }
    let ticker = this.fetchMarketData(path, { qs: params });
    return ticker;
  }
  fetchAllTrades(productID='BCHUSD') {
    const path = ['Trades'];
    let params = {
    	'pair':productID

    }
    let trades = this.fetchMarketData(path, { qs: params });
    return trades;
  }	
  fetchHistoricRates(productID='BCHUSD', timeScale) {
    let params = {
    	'pair': productID,
      'interval': timeScale // time frame interval in minutes (optional):1 (default), 5, 15, 30, 60, 240, 1440, 10080, 21600
    }
    const path = ['OHLC']; 
    let historicalRates = this.fetchMarketData(path, { qs: params });
    return historicalRates;
  }
  fetchSpreadData(productID='BCHUSD'){
  	let params = {
    	'pair': productID
    }
    const path = ['Spread']; 
    let spreads = this.fetchMarketData(path, { qs: params });
    return spreads;
  }
  fetchServerTime(){
    const path = ['Time'];
    let exchanfetchime = this.fetchMarketData(path);
    return exchanfetchime;
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
    return this.fetchHistoricRates(options.productID, options.timeScale)
  }
  getChange(options:any){

  }
  

}
