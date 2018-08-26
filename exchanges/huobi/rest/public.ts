import { PublicContainer } from '../../../market/marketdata'
import Bottleneck from "bottleneck"
const rateLimiter = new Bottleneck({
  maxConcurrent: 1, // jobs can be running at the same time
  minTime: 500 // wait timem before launching another one
});

export class HuobiPublic extends PublicContainer{
	constructor(options: any={}) {
    super(options, rateLimiter);
  }
	fetchCurrencies() {
    const path = ['v1', 'common', 'currencys'];
    return this.fetchMarketData(path);
  }
  fetchProducts(){
    const path = ['v1', 'common', 'symbols'];
    return this.fetchMarketData(path);
  }
  fetchOrderBook(productID='btcusdt', type) { // type - step0, step1, step2, step3, step4, step5
    const path = ['market','depth'];
    let params = {
        'symbol':productID,
        'type': type
    }
    let OrderBook = this.fetchMarketData(path, { qs: params });
    return OrderBook;
  }
  fetchBestBidBestAsk(productID='btcusdt'){

  }
  fetchPriceBook(productID='btcusdt', type_='step0', precision){
  	const path = ['book', productID, precision];
    let params = {
      'symbol': productID,
      'type' : type_
    }
    let PriceBook = this.fetchMarketData(path, { qs: params });
    return PriceBook;
  }
  fetchTicker(productID='btcusdt') {
    const path = ['market','detail', 'merged'];
    let params = {
      	'symbol': productID,
    }
    let ticker = this.fetchMarketData(path, { qs: params });
    return ticker;
  }
  fetchAllTrades(productID='btcusdt',  numRecords=50) {
    const path = ['market', 'history', 'trade']
    let params = {
      	'symbol':productID,
      	'size':numRecords
  	}
    let trades = this.fetchMarketData(path, { qs: params });
    return trades;
  }
  fetchLatestTrade(productID='btcusdt') {
    const path = ['market', 'trade']
    let params = {
        'symbol':productID
    }
    let trades = this.fetchMarketData(path, { qs: params });
    return trades;
  }
  fetchHistoricRates(productID='btcusdt', period_ = '1day', size_=300) {
    let params = {
    	'symbol': productID,
    	'period': period_,// 1min, 5min, 15min, 30min, 60min, 1day, 1mon, 1week, 1year
    	'size':size_ // value range - [1,2000]
    }
    const path = ['market','history', 'kline']
    let historicalRates = this.fetchMarketData(path, { qs: params });
    return historicalRates;
  }
  fetchServerTime(){
    const path = ['v1', 'timestamp']
    let exchanfetchime = this.fetchMarketData(path)
    return exchanfetchime
  }

  //
  getCurrencies(options:any){
    return this.fetchCurrencies()
  }
  getProducts(options:any){
    return this.fetchProducts()
  }
  getOrderBook(options:any){
    return this.fetchOrderBook(options.productID, options.type_)
  }
  getBestBidBestAsk(options:any){
    return this.fetchBestBidBestAsk(options.productID)
  }
  getTicker(options:any){
    return this.fetchTicker(options.productID)
  }
  getAllTrades(options:any){
    return this.fetchAllTrades(options.productID, options.limit)
  }
  getHistoricRates(options:any){
    return this.fetchHistoricRates(options.productID, options.period, options.limit)
  }
  getChange(options:any){

  }
  

}
