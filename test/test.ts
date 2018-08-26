import { ExchangeCodes } from '../config/marketType'
import { MarketPublicFeed } from '../market/publicfeed'

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

let feed = new MarketPublicFeed()

/**GDAX*/
// feed.getTokens(ExchangeCodes.GDAX);
// feed.getProductsPairs(ExchangeCodes.GDAX)
// feed.getTokenInfo(ExchangeCodes.GDAX)
// feed.getProductPairInfo(ExchangeCodes.GDAX)
// feed.getOrderBook(ExchangeCodes.GDAX, {productID:'ETH-USD', level:2})
// feed.getBestBidBestAsk(ExchangeCodes.GDAX, {productID:'ETH-USD'})
// feed.getTicker(ExchangeCodes.GDAX, {productID:'BTC-GBP'})
// feed.getAllTrades(ExchangeCodes.GDAX, {productID:'ETH-USD'})

// for(let pr of (feed.getProductsPairs(ExchangeCodes.GDAX)) ){
//     for(let symbol of pr.symbols){
//       feed.getOrderBook(ExchangeCodes.GDAX, {productID:symbol, level:2}).then((book)=>{
//         console.log(book)
//       })
//     }
// }

// let startTime:Date = new Date(), endTime:Date = new Date();
// startTime.setMonth(startTime.getMonth() - 6); 
// feed.getHistoricRates(ExchangeCodes.GDAX, {productID:'ETH-USD', startTime: startTime.toISOString(), endTime: endTime.toISOString(),timeScale:86400})
let startTime:Date = new Date(), endTime:Date = new Date();
endTime.setHours(endTime.getHours() - 1); 
startTime.setDate(startTime.getDate() - 1)
// feed.getChange(ExchangeCodes.GDAX, {productID:'BTC-USD', startTime: startTime.toISOString(), endTime: endTime.toISOString(),timeScale:21600})

/**BINANCE*/

// for(let pr of (feed.getProductsPairs(ExchangeCodes.BINANCE)) ){
//     for(let symbol of pr.symbols){
//       feed.getOrderBook(ExchangeCodes.BINANCE, {productID:symbol, level:10}).then((book)=>{
//         console.log(book)
//       })
//     }
// }

// feed.getTokens(ExchangeCodes.BINANCE)
// feed.getProductsPairs(ExchangeCodes.BINANCE)
// feed.getTokenInfo(ExchangeCodes.BINANCE)
// feed.getProductPairInfo(ExchangeCodes.BINANCE)
// feed.getOrderBook(ExchangeCodes.BINANCE, {productID:'BTCUSDT', level:10})
// feed.getBestBidBestAsk(ExchangeCodes.BINANCE, {productID:'BTCUSDT'})
// feed.getTicker(ExchangeCodes.BINANCE, {productID:'BTCUSDT'})
// feed.getAllTrades(ExchangeCodes.BINANCE, {productID:'BTCUSDT', level:10})
/*
let binanceFeed = <BinancePublic> feed.getMarketFeed(ExchangeCodes.BINANCE);
binanceFeed.fetchAllBestBidBestAsk()
          .then( function(response){ 
            console.log(" all tickers : " + response)
          })
          .catch(function(error){
            console.log("Error all tickers")
            return error;
          });

*/


/*enum Scale {
  day='1d',
  hour='1h'
}
feed.getHistoricRates(ExchangeCodes.BINANCE, {productID:'BTCUSDT',startTime:startTime.getTime(), endTime:endTime.getTime(), timeScale:Scale.day ,level:500})
*/


/** BITFINEX */

// for(let pr of (feed.getProductsPairs(ExchangeCodes.BITFINEX)) ){
//     for(let symbol of pr.symbols){
//       feed.getOrderBook(ExchangeCodes.BITFINEX, {productID:symbol.toUpperCase(), level:2}).then((book)=>{
//         console.log("book : ", book)
//       })
//     }
// }

// feed.getTokens(ExchangeCodes.BITFINEX)
// feed.getProductsPairs(ExchangeCodes.BITFINEX)
// feed.getTokenInfo(ExchangeCodes.BITFINEX)
// feed.getProductPairInfo(ExchangeCodes.BITFINEX)
// feed.getOrderBook(ExchangeCodes.BITFINEX, {productID:'RRTUSD', level:25})
// feed.getBestBidBestAsk(ExchangeCodes.BITFINEX, {productID:'tBTCUSD'})
// feed.getTicker(ExchangeCodes.BITFINEX, {productID:'tBTCUSD'})

/*
let bitfinexFeed = <BitfinexPublic> feed.getMarketFeed(ExchangeCodes.BITFINEX);
bitfinexFeed.getTIckers({productID:'tBTCUSD,tLTCUSD'})
          .then( function(response){ 
            console.log(" all tickers : " + response)
          })
          .catch(function(error){
            console.log("Error all tickers")
            return error;
          });

*/
// feed.getAllTrades(ExchangeCodes.BITFINEX, {productID:'tBTCUSD', startTime:startTime.getTime(), endTime:endTime.getTime(), level:10})
// feed.getHistoricRates(ExchangeCodes.BITFINEX, {productID:'tBTCUSD', startTime:startTime.getTime(), endTime:endTime.getTime(), timeScale:'1M',section:'hist'})

/** BITREX */

// for(let pr of (feed.getProductsPairs(ExchangeCodes.BITREX)) ){
//     for(let symbol of pr.symbols){
//       feed.getOrderBook(ExchangeCodes.BITREX, {productID:symbol, side:'both'}).then((book)=>{
//         console.log("book : ", book)
//       })
//     }
// }
// feed.getTokens(ExchangeCodes.BITREX)
// feed.getProductsPairs(ExchangeCodes.BITREX)
// feed.getTokenInfo(ExchangeCodes.BITREX)
// feed.getProductPairInfo(ExchangeCodes.BITREX)
// feed.getOrderBook(ExchangeCodes.BITREX, {productID:'BTC-LTC', side:'both'} )
// feed.getBestBidBestAsk(ExchangeCodes.BITREX, {productID:'BTC-LTC'} )
// feed.getTicker(ExchangeCodes.BITREX, {productID:'BTC-LTC'} )
// feed.getAllTrades(ExchangeCodes.BITREX, {productID:'BTC-LTC'} )
// feed.getHistoricRates(ExchangeCodes.BITREX, {productID:'BTC-LTC'} )

/** BITSTAMP */

// for(let pr of (feed.getProductsPairs(ExchangeCodes.BITSTAMP)) ){
//     for(let symbol of pr.symbols){
//       feed.getOrderBook(ExchangeCodes.BITSTAMP, {productID:symbol}).then((book)=>{
//         console.log("book : ", book)
//       })
//     }
// }
// feed.getTokens(ExchangeCodes.BITSTAMP)
// feed.getProductsPairs(ExchangeCodes.BITSTAMP)
// feed.getTokenInfo(ExchangeCodes.BITSTAMP)
// feed.getProductPairInfo(ExchangeCodes.BITSTAMP)
// feed.getOrderBook(ExchangeCodes.BITSTAMP, {productID:'btcusd'} )
// feed.getBestBidBestAsk(ExchangeCodes.BITSTAMP, {productID:'btcusd'} )
// feed.getTicker(ExchangeCodes.BITSTAMP, {productID:'btcusd'} )
// feed.getAllTrades(ExchangeCodes.BITSTAMP, {productID:'btcusd', interval:'hour'} )

/** COINONE */
// for(let pr of (feed.getProductsPairs(ExchangeCodes.COINONE)) ){
//     for(let symbol of pr.symbols){
//       feed.getOrderBook(ExchangeCodes.COINONE, {productID:symbol}).then((book)=>{
//         console.log("book : ", book)
//       })
//     }
// }
// feed.getTokens(ExchangeCodes.COINONE)
// feed.getProductsPairs(ExchangeCodes.COINONE)
// feed.getOrderBook(ExchangeCodes.COINONE, {productID:'btc'})
// feed.getBestBidBestAsk(ExchangeCodes.COINONE, {productID:'btc'})
// feed.getTicker(ExchangeCodes.COINONE, {productID:'btc'})
// feed.getAllTrades(ExchangeCodes.COINONE, {productID:'btc', period:'hour'}) // 'day'

/** OKCOIN */

// for(let pr of (feed.getProductsPairs(ExchangeCodes.OKCOIN)) ){
//     for(let symbol of pr.symbols){
//       feed.getOrderBook(ExchangeCodes.OKCOIN, {productID:symbol, level:10}).then((book)=>{
//         console.log("book : ", book)
//       })
//     }
// }
// feed.getTokens(ExchangeCodes.OKCOIN)
// feed.getProductsPairs(ExchangeCodes.OKCOIN)
// feed.getOrderBook(ExchangeCodes.OKCOIN, {productID:'btc_usd', level:10})
// feed.getBestBidBestAsk(ExchangeCodes.OKCOIN, {productID:'btc_usd'})
// feed.getTicker(ExchangeCodes.OKCOIN, {productID:'btc_usd'})
// feed.getAllTrades(ExchangeCodes.OKCOIN, {productID:'btc_usd'})
// feed.getHistoricRates(ExchangeCodes.OKCOIN, {productID:'btc_usd', startTime:startTime.getTime(), timeScale:'1day', limit:1000})

/** GEMINI */

// for(let pr of (feed.getProductsPairs(ExchangeCodes.GEMINI)) ){
//     for(let symbol of pr.symbols){
//       feed.getOrderBook(ExchangeCodes.GEMINI, {productID:symbol, level:10}).then((book)=>{
//         console.log("book : ", book)
//       })
//     }
// }

// feed.getTokens(ExchangeCodes.GEMINI)
// feed.getProductsPairs(ExchangeCodes.GEMINI)
// feed.getTokenInfo(ExchangeCodes.GEMINI)
// feed.getProductPairInfo(ExchangeCodes.GEMINI)
// feed.getOrderBook(ExchangeCodes.GEMINI, {productID:'btcusd',level:10})
// feed.getBestBidBestAsk(ExchangeCodes.OKCOIN, {productID:'btc_usd'})
// feed.getTicker(ExchangeCodes.GEMINI, {productID:'btcusd'})
// feed.getAllTrades(ExchangeCodes.GEMINI, {productID:'btcusd'})

/** HITBTC */

// for(let pr of (feed.getProductsPairs(ExchangeCodes.HITBTC)) ){
//     for(let symbol of pr.symbols){
//       feed.getOrderBook(ExchangeCodes.HITBTC, {productID:symbol, level:10}).then((book)=>{
//         console.log("book : ", book)
//       })
//     }
// }

// feed.getTokens(ExchangeCodes.HITBTC)
// feed.getProductsPairs(ExchangeCodes.HITBTC)
// feed.getTokenInfo(ExchangeCodes.HITBTC)
// feed.getProductPairInfo(ExchangeCodes.HITBTC)
// feed.getOrderBook(ExchangeCodes.HITBTC, {productID:'ETHBTC',level:10})
// feed.getBestBidBestAsk(ExchangeCodes.HITBTC, {productID:'ETHBTC'})
// feed.getTicker(ExchangeCodes.HITBTC, {productID:'ETHBTC'})
// feed.getAllTrades(ExchangeCodes.HITBTC, {productID:'ETHBTC'})

/*
let hitbtcFeed = <HitbtcPublic> feed.getMarketFeed(ExchangeCodes.HITBTC);
hitbtcFeed.getTickers()
          .then( function(response){ 
            console.log(" all tickers : " + response)
          })
          .catch(function(error){
            console.log("Error all tickers")
            return error;
          });
*/
// feed.getAllTrades(ExchangeCodes.HITBTC, {productID:'ETHBTC',level:10})
// feed.getHistoricRates(ExchangeCodes.HITBTC, {productID:'ETHBTC',limit:500, peroid:'D1'}) // max limit is 1000

/** HUOBI */

// for(let pr of (feed.getProductsPairs(ExchangeCodes.HUOBI)) ){
//     for(let symbol of pr.symbols){
//       feed.getOrderBook(ExchangeCodes.HUOBI, {productID:symbol, type_:'step0'}).then((book)=>{
//         console.log("book : ", book)
//       })
//     }
// }
// feed.getTokens(ExchangeCodes.HUOBI)
// feed.getProductsPairs(ExchangeCodes.HUOBI)
// feed.getTokenInfo(ExchangeCodes.HUOBI)
// feed.getProductPairInfo(ExchangeCodes.HUOBI)
// feed.getOrderBook(ExchangeCodes.HUOBI, {productID:'zecbtc',type_:'step0'})
// feed.getBestBidBestAsk(ExchangeCodes.HUOBI, {productID:'zecbtc'})
// feed.getTicker(ExchangeCodes.HUOBI, {productID:'zecbtc'})
// feed.getAllTrades(ExchangeCodes.HUOBI, {productID:'zecbtc', level:10})
// feed.getHistoricRates(ExchangeCodes.HUOBI, {productID:'zecbtc', peroid:'1day', limit:15})

/** KRAKEN */

// for(let pr of (feed.getProductsPairs(ExchangeCodes.KRAKEN)) ){
//     for(let symbol of pr.symbols){
//       feed.getOrderBook(ExchangeCodes.KRAKEN, {productID:symbol, level:10}).then((book)=>{
//         console.log("book : ", book)
//       })
//     }
// }
// feed.getTokens(ExchangeCodes.KRAKEN)
// feed.getProductsPairs(ExchangeCodes.KRAKEN)
// feed.getTokenInfo(ExchangeCodes.KRAKEN)
// feed.getProductPairInfo(ExchangeCodes.KRAKEN)
// feed.getTokens(ExchangeCodes.KRAKEN)
// feed.getProductsPairs(ExchangeCodes.KRAKEN)
// feed.getOrderBook(ExchangeCodes.KRAKEN, {productID:'BCHUSD',level:10})
// feed.getBestBidBestAsk(ExchangeCodes.KRAKEN, {productID:'BCHUSD'})
// feed.getTicker(ExchangeCodes.KRAKEN, {productID:'BCHUSD'})
// feed.getAllTrades(ExchangeCodes.KRAKEN, {productID:'BCHUSD'})
// feed.getHistoricRates(ExchangeCodes.KRAKEN, {productID:'BCHUSD', timeScale:1440}) // timescale = 1 day



/** Decoder done till Kraken*/

/** KUCOIN */ 
// decoder not implemented yet
// for(let pr of (feed.getProductsPairs(ExchangeCodes.KUCOIN)) ){
//     for(let symbol of pr.symbols){
//       feed.getOrderBook(ExchangeCodes.KUCOIN, {productID:symbol, level:10}).then((book)=>{
//         console.log("book : ", book)
//       })
//     }
// }

// feed.getTokens(ExchangeCodes.KUCOIN)
// feed.getProductsPairs(ExchangeCodes.KUCOIN)
// feed.getTokenInfo(ExchangeCodes.KUCOIN)
// feed.getProductPairInfo(ExchangeCodes.KUCOIN)
// feed.getTokens(ExchangeCodes.KUCOIN)
// feed.getProductsPairs(ExchangeCodes.KUCOIN)
// feed.getOrderBook(ExchangeCodes.KUCOIN, {productID:'ETH-BTC',level:10})