import { PublicContainer } from '../../../market/marketdata'
import Bottleneck from "bottleneck"
const rateLimiter = new Bottleneck({
  maxConcurrent: 1, // jobs can be running at the same time
  minTime: 1000 // wait timem before launching another one
});

export class BinancePublic extends PublicContainer{
  constructor(options: any={}) {
    super(options, rateLimiter);
    // this.addAdditionalHeaders({ 
    //     'User-Agent': 'userAgent',
    //     'Content-type': 'contentType', //  'application/x-www-form-urlencoded'
    //     'X-MBX-APIKEY': options.key || ''
    // });
  }
	
	fetchCurrencies() {
      return this.fetchMarketData(['api', 'v1', 'exchangeInfo']);
  }
	fetchProducts() {
    	return this.fetchMarketData(['api', 'v1','exchangeInfo']);
  }
  fetchOrderBook(productID='BTCUSDT', level=10) {
    const path = ['api', 'v1', 'depth'];
    let params = {
      'symbol': productID,
      'limit':level // Default 100; max 1000. Valid limits:[5, 10, 20, 50, 100, 500, 1000], setting limit=0 can return a lot of data
    }
    let OrderBook = this.fetchMarketData(path, { qs: params });
    return OrderBook;
  }
  fetchBestBidBestAsk(productID='BTCUSDT'){
    const path = ['api', 'v3', 'ticker', 'bookTicker'];
    let params = {
      'symbol': productID, // If the symbol is not sent, bookTickers for all symbols will be returned in an array.
    }
    let bestprice = this.fetchMarketData(path, { qs: params });
    return bestprice;
  }
  fetchAllBestBidBestAsk(){
    const path = ['api', 'v3', 'ticker', 'bookTicker'];
    let bestprice = this.fetchMarketData(path);
    return bestprice;
  }
  fetchTicker(productID='BTCUSDT') {
    const path = ['api', 'v3','ticker', 'bookTicker'];
    let params = {
      'symbol': productID, // If the symbol is not sent, prices for all symbols will be returned in an array.
    }
    let ticker = this.fetchMarketData(path, { qs: params });
    return ticker;
  }
  fetchAllTIcker() {
    const path = ['api', 'v3','ticker', 'bookTicker'];
    let ticker = this.fetchMarketData(path);
    return ticker;
  }
  fetchAllTrades(productID='BTCUSDT', lim=10) {
    const path = ['api', 'v1','trades'];
    let params = {
    	'symbol':productID,
      'limit':lim, //Default 500; max 1000.
    }
    let trades = this.fetchMarketData(path, { qs: params });
    return trades;
  }
  fetchOldTrades(productID='BTCUSDT', lim=10){
  	const path = ['api', 'v1','historicalTrades'];
  	let params = {
    	'symbol':productID,
      'limit':lim,
    }
    let trades = this.fetchMarketData(path, { qs: params });
    return trades;
  }
  /**
  If startTime and endTime are not sent, the most recent klines are returned.
  */
  fetchHistoricRates(productID='BTCUSDT', startTime, endTime, timeScale='', lim=500) {
    let params = {
    	'symbol': productID,
      'interval': timeScale, // 1m 3m 5m 15m 30m 1h 2h 4h 6h 8h 12h 1d 3d 1w 1M
      'startTime':startTime, // long timestamp in ms 
      'endTime':endTime,  // long timestamp in ms 
      'limit': lim // default = 500, max = 1000 
    }
    const path = ['api', 'v1','klines'] 
    let rates = this.fetchMarketData(path, { qs: params })
    return rates
  }
  fetchProduct24HrStats(productID='BTCUSDT') {
    let params = {
    	'symbol': productID //If the symbol is not sent, tickers for all symbols will be returned in an array.
    }
  	const path = ['api', 'v1','ticker', '24hr']; 
    let stats = this.fetchMarketData(path, { qs: params });
    return stats
  }
  fetchServerTime() {
    const path = ['api', 'v1','time'];
    let time_ = this.fetchMarketData(path)
    return time_
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
    return this.fetchBestBidBestAsk(options.productID)
  }
  getAllTrades(options:any){
    return this.fetchAllTrades(options.productID, options.level)
  }
  getHistoricRates(options:any){
    return this.fetchHistoricRates(options.productID, options.startTime, options.endTime, options.timeScale, options.level)
  }
  getChange(options:any){

  }
  

}
