import { PublicContainer } from '../../../market/marketdata'
import Bottleneck from "bottleneck"
const rateLimiter = new Bottleneck({
  maxConcurrent: 1, // jobs can be running at the same time
  minTime: 3000 // wait time before launching another one
});

export class BitfinexPublic extends PublicContainer{
	constructor(options: any={}) {
      super(options, rateLimiter);
  	}
	
	fetchCurrencies() {
    	const path = ['v1', 'symbols'];
    	return this.fetchMarketData(path);
  	}
	fetchProducts() {
    	return this.fetchMarketData(['v1', 'symbols_details']);
  }
  	
  fetchOrderBook(productID='BTCUSD', level) {
    const path = ['v1','book', productID];
    let params = {
      	'limit_bids': level,
      	'limit_asks': level,
      	'group':1
    }
    let OrderBook = this.fetchMarketData(path, { qs: params });
    return OrderBook;
  }
  	/**
  	precision - Level of price aggregation (P0, P1, P2, P3, R0)
  	*/
  	fetchOrderBookAggregated(productID='tBTCUSD', level, precision='P0') {
    	const path = ['v2','book', productID, precision];
    	let params = {
      		'len': level // Number of price points ("25", "100")
    	}
    	let OrderBook = this.fetchMarketData(path, { qs: params });
    	return OrderBook;
  	}
  	fetchBestBidBestAsk(productID='tBTCUSD'){
      const path = ['v2', 'ticker', productID];
      let bb = this.fetchMarketData(path);
      return bb;
  	}
  	/**
  	last trade, current best bid and best ask etc
  	*/
  	fetchTicker(productID='tBTCUSD') {
    	const path = ['v2', 'ticker', productID];
    	let ticker = this.fetchMarketData(path);
    	return ticker;
  	}
  	fetchAllTrades(productID='tBTCUSD', startTime, endTime, level=50) {
    	const path = ['v2', 'trades', productID, 'hist'];
    	let params = {
      		'limit':level,
      		'start':startTime, // Millisecond start time
      		'end':endTime, // Millisecond end time
      		'sort':1 // if = 1 it sorts results returned with old > new, other value -1
    	}
    	let trades = this.fetchMarketData(path, { qs: params });
    	return trades;
  	}
  	/**
  	timesacle - Available values: '1m', '5m', '15m', '30m', '1h', '3h', '6h', '12h', '1D', '7D', '14D', '1M'
  	*/
  	fetchHistoricRates(productID='tBTCUSD', startTime, endTime, timeScale, section ='hist') {
    	let params = {
    		'limit': 300,
      		'start': startTime, // Filter start (ms)
      		'end': endTime, // Filter end (ms)
      		'sort': 1,

    	}
    	// Available values: "last", "hist"
    	const path = ['v2', 'candles', 'trade:'.concat(timeScale,':', productID), section]; // 'last' or 'hist'
    	let historicalRates = this.fetchMarketData(path, { qs: params });
    	return historicalRates;
  	}
  	fetchTIckers(productIDs='tBTCUSD,tLTCUSD') {
    	const path = ['v2', 'tickers'];
    	let params = {
      		'symbols': productIDs,
    	}
    	let tickers = this.fetchMarketData(path, { qs: params });
    	return tickers;
  	}
  	
  	fetchPairVolume(productID='tBTCUSD'){
  		const path = ['v2', 'stats', productID ];
  		let stats = this.fetchMarketData(path);
    	return stats;
  	}
  	
  	fetchPlatformStatus(){
  		const path = ['v2', 'platform', 'status'];
    	let status = this.fetchMarketData(path);
    	return status;
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
  getOrderBookAggregated(options:any){
    return this.fetchOrderBookAggregated(options.productID, options.level, options.precision)
  }
  getBestBidBestAsk(options:any){
    return this.fetchBestBidBestAsk(options.productID)
  }
  getTicker(options:any){
    return this.fetchTicker(options.productID)
  }
  getTIckers(options:any){
    return this.fetchTIckers(options.productIDs)
  }
  getAllTrades(options:any){
    return this.fetchAllTrades(options.productID, options.startTime, options.endTime, options.level)
  }
  getHistoricRates(options:any){
    return this.fetchHistoricRates(options.productID, options.startTime, options.endTime, options.timeScale, options.section)
  }
  getChange(options:any){

  }
  

}
