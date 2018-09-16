import { PublicContainer } from '../../../market/marketdata'
import Bottleneck from "bottleneck"
const rateLimiter = new Bottleneck({
  maxConcurrent: 1, // jobs can be running at the same time
  minTime: 1000 // wait timem before launching another one
});

export class OkcoinPublic extends PublicContainer{
	constructor(options: any={}) {
      super(options, rateLimiter);
  }
	
	fetchCurrencies() {
    	// const path = ['Assets'];
    	// return this.makefetchRequest(path);
  }
	fetchProducts() {
    	// return this.makefetchRequest(['exchangeInfo']);
  }
  fetchOrderBook(productID='btc_usd', level=50) {
    const path = ['depth.do'];
    let params = {
      	'symbol': productID, // btc_usd  ltc_usd  eth_usd
      	'size':level, // value: must be between 1 - 200
        'merge':1 // value: 1, 0.1 (merge depth)
    }
    let OrderBook = this.fetchMarketData(path, { qs: params });
    return OrderBook;
  }
  fetchBestBidBestAsk(productID='btc_usd'){

  }
  /** last trade, best bid, best ask, volume */
  fetchTicker(productID='btc_usd') {
    const path = ['ticker.do'];
    let params = {
      	'symbol': productID // symbol - btc_usd    ltc_usd    eth_usd    etc_usd    bch_usd
    }
    let ticker = this.fetchMarketData(path, { qs: params });
    return ticker;
  }
  fetchAllTrades(productID='btc_usd') {
    const path = ['trades.do'];
    let params = {
    	'symbol':productID // btc_usd    ltc_usd    eth_usd    etc_usd    bch_usd
      //'since':startTime, // fetch recently 60 pieces of data starting from the given tid (optional)
    }
    let trades = this.fetchMarketData(path, { qs: params });
    return trades;
  }
  /**
    URL https://www.okcoin.com/api/v1/kline.do  approximately 2000 pieces of data are returned each cycle
    
    1min : 1 minute candlestick data
    3min : 3 minutes candlestick data
    5min : 5 minutes candlestick data
    15min : 15 minutes candlestick data
    30min : 30 minutes candlestick data
    1day : 1 day candlestick data
    3day : 3 days candlestick data
    1week : 1 week candlestick data
    1hour : 1 hour candlestick data
    2hour : 2 hours candlestick data
    4hour : 4 hours candlestick data
    6hour : 6 hours candlestick data
    12hour : 12 hours candlestick data

  */
  fetchHistoricRates(productID='btc_usd', startTime, timeScale='1day',lim=500) {
    let params = {
    	'symbol': productID, // btc_usd    ltc_usd    eth_usd    etc_usd    bch_usd
      'type': timeScale,
      'since':startTime, // timestamp(eg:1417536000000). data after the timestamp will be returned
      'size': lim // default approximately 2000 pieces
    }
    const path = ['kline.do']; 
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
  getAllTrades(options:any){
    return this.fetchAllTrades(options.productID)
  }
  getHistoricRates(options:any){
    return this.fetchHistoricRates(options.productID, options.startTime, options.timeScale, options.limit)
  }
  getChange(options:any){

  }
  

}
