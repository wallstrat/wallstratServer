import { PublicContainer } from '../../../market/marketdata'
import Bottleneck from "bottleneck"
const rateLimiter = new Bottleneck({
  maxConcurrent: 1, // jobs can be running at the same time
  minTime: 500 // wait timem before launching another one
});

export class KucoinPublic extends PublicContainer{
	constructor(options: any={}) {
    super(options, rateLimiter);
  }
	fetchCurrencies() {
    	const path = ['market','open', 'coins'];
    	return this.fetchMarketData(path);
  }
	fetchProducts() {
    	return this.fetchMarketData(['market','open','symbols']);
  }
  fetchOrderBook(productID='KCS-BTC', level=50) {
    const path = ['open', 'orders'];
    let params = {
      	'symbol': productID,
      	'limit':level
    }
    let OrderBook = this.fetchMarketData(path, { qs: params });
    return OrderBook;
  }
  fetchBestBidBestAsk(productID='KCS-BTC'){
    
  }
  fetchOrderBookBuy(productID='KCS-BTC', level=50) {
    const path = ['open','orders-buy'];
    let params = {
        'symbol': productID,
        'limit':level
    }
    let OrderBook = this.fetchMarketData(path, { qs: params });
    return OrderBook;
  }
  fetchOrderBookSell(productID='KCS-BTC', level=50) {
    const path = ['open','orders-sell'];
    let params = {
        'symbol': productID,
        'limit':level
    }
    let OrderBook = this.fetchMarketData(path, { qs: params });
    return OrderBook;
  }
  fetchTicker(productID='KCS-BTC') {
    const path = ['open','tick'];
    let params = {
      'symbol': productID, // If the symbol is not sent, prices for all symbols will be returned in an array.
    }
    	let ticker = this.fetchMarketData(path, { qs: params });
    	return ticker;
  }
  fetchAllTrades(productID='KCS-BTC', lim=50) {
    const path = ['trades'];
    let params = {
    	'symbol':productID,
      'limit':lim,
    }
    let trades = this.fetchMarketData(path, { qs: params });
    return trades;
  }
  	
  fetchHistoricRates(productID='KCS-BTC', startTime, endTime, timeScale='1day', lim=500) {
    let params = {
    	'symbol': productID,
      'type': timeScale, //0 1min 1 5min 2 15min 3 30min 4 1hour 5 8hour 6 1day 7 1week
      'from':startTime, // From timestamp e.g.: 1507479171
      'to':endTime, // To timestamp e.g.: 1507479171
      'limit': lim
    }
    const path = ['open','kline']; 
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
    return this.fetchAllTrades(options.productID, options.lim)
  }
  getHistoricRates(options:any){
    return this.fetchHistoricRates(options.productID, options.startTime, options.endTime, options.timeScale, options.lim)
  }
  getChange(options:any){

  }
  

}
