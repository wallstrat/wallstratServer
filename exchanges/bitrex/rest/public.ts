import { PublicContainer } from '../../../market/marketdata'
import Bottleneck from "bottleneck"
const rateLimiter = new Bottleneck({
  maxConcurrent: 1, // jobs can be running at the same time
  minTime: 500 // wait timem before launching another one
});

const header={
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export class BitrexPublic extends PublicContainer{
  constructor(options: any={}) {
    super(options, rateLimiter, header);
  }
	fetchCurrencies() {
    const path = ['getcurrencies'];
    return this.fetchMarketData(path);
  }
  fetchProducts() {
    return this.fetchMarketData(['getmarkets']);
  }
  fetchOrderBook(productID='BTC-LTC', side='both') { // type = buy or sell 
    const path = ['getorderbook'];
    let params = {
      	'type': side,
      	'market':productID,
    }
    let OrderBook = this.fetchMarketData(path, { qs: params });
    return OrderBook;
  }
  fetchBestBidBestAsk(productID='BTC-LTC'){
    // fetch  from ticker best bid best ask

  }
  fetchTicker(productIDs='BTC-LTC') {
    const path = ['getticker'];
    let params = {
      	'market': productIDs,
    }
    let tickers = this.fetchMarketData(path, { qs: params });
    return tickers;
  }
  fetchAllTrades(productID='BTC-LTC') {
    const path = ['getmarkethistory'];
    let params = {
      	'market':productID
    }
    let trades = this.fetchMarketData(path, { qs: params });
    return trades;
  }
  fetchHistoricAllRate24Hr() {
    const path = ['getmarketsummaries'];
    let historicalRates = this.fetchMarketData(path);
    return historicalRates;
  }
  fetchHistoricRate24Hr(productID='BTC-LTC') {
    let params = {
    	'market': productID
    }
    const path = ['getmarketsummary'];
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
    return this.fetchOrderBook(options.productID, options.side)
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
    return this.fetchHistoricRate24Hr(options.productID)
  }
  getHistoricAllRates(){
    return this.fetchHistoricAllRate24Hr()
  }
  getChange(options:any){

  }
  

}
