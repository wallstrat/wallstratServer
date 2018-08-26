const request = require('request');
import Bottleneck from "bottleneck"
const DEFAULT_TIMEOUT = 5*1000; // 5 secs

export abstract class PublicContainer{
  protected baseurl: string;
  protected timeout: string;
  protected GETOptions:any;
  protected rateLimiter:Bottleneck;
  protected header: any;
  
  constructor(options: any={}, limiter:Bottleneck, header:any={}) {
    this.baseurl = options.uri;
    this.timeout = options.timeout > 0 ? options.timeout: DEFAULT_TIMEOUT;
    this.rateLimiter = limiter;
    this.GETOptions = {
        method:'GET',
        timeout: this.timeout,
        forever:true
    }
    this.header = header;
  } 
  setRequestHeaders(opt, _header){
    opt.headers = opt.headers || {};
    Object.assign(
      opt.headers, _header
    );
  }
  setOptionParameter(opt, value){
    Object.assign(
      opt, value
    );
  }
  addAdditionalHeaders(opt, additional){
    Object.assign(opt.headers, additional);
  }
  addAdditionalOptionParameter(opt, params){
    Object.assign(opt, params);
  }
  getAbsoluteURI(relativeURI){
    return this.baseurl + relativeURI;
  }
  getRelativeURI(uriParts){
   return uriParts.join('/');
  }

  request_(options) {

    return new Promise(function(resolve, reject){
      request(options, function(error, response, body){
        if(error){
          // setTimeout(reject, 1000, error);
          reject(error);
       }
       else{
          // setTimeout(resolve, 50, body);
          resolve(body);
       }
      });
    }.bind(this));
  }

  fetchMarketData(uriParts, params:any={}){
    let opt = {};
    this.setRequestHeaders(opt, this.header);
    this.setOptionParameter(opt, this.GETOptions);
    Object.assign(opt,{
      uri:this.getAbsoluteURI(this.getRelativeURI(uriParts))
    });
    this.addAdditionalOptionParameter(opt, params);
    return this.rateLimiter.schedule(() => this.request_(opt)); // add a job to queue
  }
  /**
    Coins listed on this market
  */
  abstract getCurrencies(options?:any);
  /**
    Tradable symbols pairs listed on the market 
  */
  abstract getProducts(options?:any);
  /**
    Get a list of order book
  */
  abstract getOrderBook(options:any);
  /**
    Get best bid, best ask from order book of the market 
  */
  abstract getBestBidBestAsk(options:any);
  /**
    It gives last trade, current best bid and best ask etc
    1. Last trade
    2. Best Bid 
    3. Best Ask
    etc..
  */
  abstract getTicker(options:any);
  /**
    List the latest trades
  */
  abstract getAllTrades(options:any);
  /**
    Historical data like high, low, volume etc... 
  */
  abstract getHistoricRates(options:any);

  abstract getChange(options:any);
  
}

