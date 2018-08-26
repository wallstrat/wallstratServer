const fs = require('fs')
import * as path from 'path';

import { GdaxPublic } from '../exchanges/gdax/rest/public'
import { BinancePublic } from '../exchanges/binance/rest/public'
import { BitrexPublic } from '../exchanges/bitrex/rest/public'
import { BitstampPublic } from '../exchanges/bitstamp/rest/public'
import { CoinonePublic } from '../exchanges/coinone/rest/public'
import { BitfinexPublic } from '../exchanges/bitfinex/rest/public'
import { OkcoinPublic } from '../exchanges/okcoin/rest/public'
import { GeminiPublic } from '../exchanges/gemini/rest/public'
import { HitbtcPublic } from '../exchanges/hitbtc/rest/public'
import { HuobiPublic } from '../exchanges/huobi/rest/public'
import { KrakenPublic } from '../exchanges/kraken/rest/public'
import { KucoinPublic } from '../exchanges/kucoin/rest/public'
import { LunoPublic } from '../exchanges/luno/rest/public'

import { ExchangeCodes } from '../config/marketType'
import { PublicContainer } from './marketdata';
import { marketFeedFactory } from '../models/factory/messageFactory';

export class MarketPublicFeed {
  private containers:Map<ExchangeCodes, PublicContainer> = new Map<ExchangeCodes, PublicContainer>();
  private marketConfig;
  private configMap:Map<ExchangeCodes,any> = new Map<ExchangeCodes,any>();
  private marketFeed:marketFeedFactory;
  constructor(clientConfig?: string){
    this.marketFeed = new marketFeedFactory(); 
    this.marketConfig = JSON.parse(fs.readFileSync(path.join(__dirname,'../../../config/marketConfig.json'), 'utf8'));
    this.initMarketConfig(this.marketConfig);

    this.containers.set(ExchangeCodes.GDAX, new GdaxPublic(this.configMap.get(ExchangeCodes.GDAX)))
    this.containers.set(ExchangeCodes.BINANCE, new BinancePublic(this.configMap.get(ExchangeCodes.BINANCE)))
    this.containers.set(ExchangeCodes.BITFINEX, new BitfinexPublic(this.configMap.get(ExchangeCodes.BITFINEX)))
    this.containers.set(ExchangeCodes.BITREX, new BitrexPublic(this.configMap.get(ExchangeCodes.BITREX)))
    this.containers.set(ExchangeCodes.BITSTAMP, new BitstampPublic(this.configMap.get(ExchangeCodes.BITSTAMP)))
    this.containers.set(ExchangeCodes.COINONE, new CoinonePublic(this.configMap.get(ExchangeCodes.COINONE)))
    this.containers.set(ExchangeCodes.OKCOIN, new OkcoinPublic(this.configMap.get(ExchangeCodes.OKCOIN)))
    this.containers.set(ExchangeCodes.GEMINI, new GeminiPublic(this.configMap.get(ExchangeCodes.GEMINI)))
    this.containers.set(ExchangeCodes.HITBTC, new HitbtcPublic(this.configMap.get(ExchangeCodes.HITBTC)))
    this.containers.set(ExchangeCodes.HUOBI, new HuobiPublic(this.configMap.get(ExchangeCodes.HUOBI)))
    this.containers.set(ExchangeCodes.KRAKEN, new KrakenPublic(this.configMap.get(ExchangeCodes.KRAKEN)))
    this.containers.set(ExchangeCodes.KUCOIN, new KucoinPublic(this.configMap.get(ExchangeCodes.KUCOIN)))
    this.containers.set(ExchangeCodes.LUNO, new LunoPublic(this.configMap.get(ExchangeCodes.LUNO)))

  }
  initMarketConfig(marketConfig:any){
    
    let optionsGdax ={
      uri:'https://api.pro.coinbase.com/',
      timeout:5000
    }
    let optionsBinance ={
      uri:'https://api.binance.com/',
      timeout:5000,
      key:'SrdfPwdIBukc1a5yycpFEIgW0NsEDQRBDt4lcoIBvN9jKUIFxXG1hOC80whxaF6W'
    }
    let optionsBitfinex ={
      uri:'https://api.bitfinex.com/',
      timeout:5000
    }
    let optionsBitrex ={
      uri:'https://bittrex.com/api/v1.1/public/',
      timeout:5000
    }
    let optionsBitstamp ={
      uri:'https://www.bitstamp.net/api/',
      timeout:5000
    }
    let optionsCoinone ={
      uri:'https://api.coinone.co.kr/',
      timeout:5000
    }
    let optionsOkcoin ={
      uri:'https://www.okcoin.com/api/v1/',
      timeout:5000
    }
    let optionsGemini ={
      uri:'https://api.gemini.com/v1/',
      timeout:5000
    }
    let optionsHitbtc ={
      uri:'https://api.hitbtc.com/api/2/public/',
      timeout:5000
    }
    let optionsHuobi ={
      uri:'https://api.huobi.pro/',
      timeout:5000
    }
    let optionsKraken ={
      uri:'https://api.kraken.com/0/public/',
      timeout:5000
    }
    let optionsKucoin ={
      uri:'https://api.kucoin.com/v1/',
      timeout:5000
    }
    let optionsLuno ={
      uri:'https://api.mybitx.com/api/1/',
      timeout:5000
    }
    this.configMap.set(ExchangeCodes.GDAX, optionsGdax)
    this.configMap.set(ExchangeCodes.BINANCE, optionsBinance)
    this.configMap.set(ExchangeCodes.BITFINEX, optionsBitfinex)
    this.configMap.set(ExchangeCodes.BITREX, optionsBitrex)
    this.configMap.set(ExchangeCodes.BITSTAMP, optionsBitstamp)
    this.configMap.set(ExchangeCodes.COINONE, optionsCoinone)
    this.configMap.set(ExchangeCodes.OKCOIN, optionsOkcoin)
    this.configMap.set(ExchangeCodes.GEMINI, optionsGemini)
    this.configMap.set(ExchangeCodes.HITBTC, optionsHitbtc)
    this.configMap.set(ExchangeCodes.HUOBI, optionsHuobi)
    this.configMap.set(ExchangeCodes.KRAKEN, optionsKraken)
    this.configMap.set(ExchangeCodes.KUCOIN, optionsKucoin)
    this.configMap.set(ExchangeCodes.LUNO, optionsLuno)

  }
  getTokens(market:ExchangeCodes){
    if(this.containers.has(market) || market in this.containers){
      let tokenList = this.marketConfig[ExchangeCodes[market].toLowerCase()]["currencies"];
      // console.log( JSON.stringify(this.marketFeed.createToken(market).decode(tokenList)))
      return (this.marketFeed.createToken(market).decode(tokenList));
    }
    else{
        
    }

  }
  getPrimeTokens(market:ExchangeCodes){
    if(this.containers.has(market) || market in this.containers){
      let tokenList = this.marketConfig[ExchangeCodes[market].toLowerCase()]["primecurrencies"];
      // console.log( JSON.stringify(this.marketFeed.createToken(market).decode(tokenList)))
      return (this.marketFeed.createToken(market).decode(tokenList));
    }
    else{
        
    }

  }
  getProductsPairs(market:ExchangeCodes){
    if(this.containers.has(market) || market in this.containers){
      let quoteList = this.marketConfig[ExchangeCodes[market].toLowerCase()]["currencies"];
      // console.log(JSON.stringify(this.marketFeed.createProductPair(market).decode(quoteList)))
      return (this.marketFeed.createProductPair(market).decode(quoteList));
    }
    else{
        
    }

  }
  getPrimeProductsPairs(market:ExchangeCodes){
    if(this.containers.has(market) || market in this.containers){
      let quoteList = this.marketConfig[ExchangeCodes[market].toLowerCase()]["primecurrencies"];
      // console.log(JSON.stringify(this.marketFeed.createProductPair(market).decode(quoteList)))
      return (this.marketFeed.createProductPair(market).decode(quoteList));
    }
    else{
        
    }

  }
  getTokenInfo(market:ExchangeCodes){
    if(this.containers.has(market) || market in this.containers){
      return this.containers.get(market).getCurrencies().then( function(response){ 
            response = JSON.parse(String(response));
            // console.log(JSON.stringify(this.marketFeed.createTokenInfo(market).decode(response)))
            return (this.marketFeed.createTokenInfo(market).decode(response));
          }.bind(this))
          .catch(function(error){
            console.log(error)
            return error;
      });
    }
    else{
        
    }

  }
  getProductPairInfo(market:ExchangeCodes){
    if(this.containers.has(market) || market in this.containers){
      return this.containers.get(market).getProducts().then( function(response){ 
            response = JSON.parse(String(response));
            // console.log(JSON.stringify(this.marketFeed.createProductPairInfo(market).decode(response)))
            return (this.marketFeed.createProductPairInfo(market).decode(response));
          }.bind(this))
          .catch(function(error){
            console.log(error)
            return error;
      });
    }
    else{
        
    }
  }
  getOrderBook(market:ExchangeCodes, parameters_:any){
    if(this.containers.has(market) || market in this.containers){
      return this.containers.get(market).getOrderBook(parameters_).then( function(response){ 
            response = JSON.parse(String(response));
            // console.log(JSON.stringify(this.marketFeed.createQuoteMessage(market).decode(response, parameters_.productID)))
            return (this.marketFeed.createQuoteMessage(market).decode(response, parameters_.productID));
          }.bind(this))
          .catch(function(error){
            console.log(error)
            return error;
      });
    }
    else{
        
    }
  }
  /**
  Get best bid & best ask from ticker  
  */
  getBestBidBestAsk(market:ExchangeCodes, parameters_:any){
    if(this.containers.has(market) || market in this.containers){
      return this.containers.get(market).getTicker(parameters_).then( function(response){ 
        response = JSON.parse(String(response));
        // console.log(JSON.stringify(this.marketFeed.createBestBidBestAskMessage(market).decode(response, parameters_.productID)))
        return (this.marketFeed.createBestBidBestAskMessage(market).decode(response, parameters_.productID));
        }.bind(this))
        .catch(function(error){
          console.log(error)
          return error;
      });
    }
    else{
        
    }
  }

  getTicker(market:ExchangeCodes, parameters_:any){
    if(this.containers.has(market) || market in this.containers){
      return this.containers.get(market).getTicker(parameters_).then( function(response){ 
           response = JSON.parse(String(response));
           // console.log(JSON.stringify(this.marketFeed.createTickerMessage(market).decode(response, parameters_.productID)))
           return (this.marketFeed.createTickerMessage(market).decode(response, parameters_.productID));
          }.bind(this))
          .catch(function(error){
            console.log(error)
            return error;
      });
    }
    else{
        
    }
  }
  getAllTrades(market:ExchangeCodes, parameters_:any){
    if(this.containers.has(market) || market in this.containers){
      return this.containers.get(market).getAllTrades(parameters_).then( function(response){ 
           response = JSON.parse(String(response));
           // console.log(JSON.stringify(this.marketFeed.createTradeMessage(market).decode(response, parameters_.productID)))
           return (this.marketFeed.createTradeMessage(market).decode(response, parameters_.productID));
          }.bind(this))
          .catch(function(error){
            console.log(error)
            return error;
      });
    }
    else{
        
    }
  }
  getHistoricRates(market:ExchangeCodes, parameters_:any){
    if(this.containers.has(market) || market in this.containers){
      return this.containers.get(market).getHistoricRates(parameters_).then( function(response){ 
            response = JSON.parse(String(response));
            // console.log(this.marketFeed.createRates(market).decode(response, parameters_.productID))
            return (this.marketFeed.createRates(market).decode(response, parameters_.productID));
          }.bind(this))
          .catch(function(error){
            console.log(error)
            return error;
      });
    }
    else{
        
    }
  }
  getMarketFeed(market:ExchangeCodes){
    return this.containers.get(market);
  }
  getChange(market:ExchangeCodes, parameters_:any){
    if(this.containers.has(market) || market in this.containers){
      return this.containers.get(market).getChange(parameters_).then( function(response){ 
            response = JSON.parse(String(response));
            // console.log(this.marketFeed.createChangeMessage(market).decode(response, parameters_.productID))
            return (this.marketFeed.createChangeMessage(market).decode(response, parameters_.productID));
          }.bind(this))
          .catch(function(error){
            console.log(error)
            return error;
      });
    }
    else{
        
    }
  }

  
  /**
    Get best bid and best ask across all the markets 
  */
  getNBBO(){

  }
  /**
    Get best bid and best ask across 'user-defined markets'
  */
  getUBBO(){

  }

}
