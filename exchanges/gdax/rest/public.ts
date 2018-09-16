import { PublicContainer } from '../../../market/marketdata'
import Bottleneck from "bottleneck"
const rateLimiter = new Bottleneck({
  maxConcurrent: 1, // jobs can be running at the same time
  minTime: 3000 // wait time before launching another one
});

const header = {
    'User-Agent': 'gdax-node-client',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export class GdaxPublic extends PublicContainer{
  constructor(options: any={}) {
      super(options, rateLimiter, header);
  }
  
  fetchCurrencies() {
    const path = ['currencies'];
    return this.fetchMarketData(path);
  }
  fetchProducts() {
    return this.fetchMarketData(['products']);
  }
  fetchOrderBook(productID='BTC-USD', level=2) {
    const path = ['products', productID, 'book'];
    let params = {
      'level': level // tob by default
    }
    let OrderBook = this.fetchMarketData(path, { qs: params });
    return OrderBook;
  }
  fetchBestBidBestAsk(productID='BTC-USD'){
    const path = ['products', productID, 'book'];
    let params = {
      'level': 1 // best-bid best-ask
    }
    let bestprice = this.fetchMarketData(path, { qs: params });
    return bestprice;
  }
  fetchTicker(productID='BTC-USD') {
    const path = ['products', productID, 'ticker'];
    let tickers = this.fetchMarketData(path);
    return tickers;
  }
  fetchAllTrades(productID='BTC-USD') {
    const path = ['products', productID, 'trades'];
    let trades = this.fetchMarketData(path);
    return trades;
  }
  fetchHistoricRates(productID='BTC-USD', startTime, endTime, timeScale) {
    let params = {
      'start': startTime,
      'end': endTime,
      'granularity': timeScale
    }
    const path = ['products', productID, 'candles'];
    let historicalRates = this.fetchMarketData(path, { qs: params });
    return historicalRates;
  }

  fetchProduct24HrStats(productID='USD-BTC') {
    const path = ['products', productID, 'stats'];
    let stats = this.fetchMarketData(path);
    return stats;
  }
  fetchServerTime() {
    const path = ['time'];
    let time_ = this.fetchMarketData(path);
    return time_;
  }

  //
  getCurrencies(options:any){
    return this.fetchCurrencies();
  }
  getProducts(options:any){
    return this.fetchProducts();
  }
  getOrderBook(options:any){
    return this.fetchOrderBook(options.productID, options.level);
  }
  getBestBidBestAsk(options:any){
    return this.fetchBestBidBestAsk(options.productID);
  }
  getTicker(options:any){
    return this.fetchTicker(options.productID);
  }
  getAllTrades(options:any){
    return this.fetchAllTrades(options.productID);
  }
  getHistoricRates(options:any){
    return this.fetchHistoricRates(options.productID, options.startTime, options.endTime, options.timeScale);
  }
  getChange(options:any){
    return this.fetchHistoricRates(options.productID, options.startTime, options.endTime, options.timeScale);
  }
  

}

