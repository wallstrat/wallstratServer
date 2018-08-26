import { ExchangeCodes } from '../../config/marketType'

import * as gdaxMessage from '../../exchanges/gdax/message/messages'
import * as binanceMessage from '../../exchanges/binance/message/messages'
import * as bitfinexMessage from '../../exchanges/bitfinex/message/messages'
import * as bitrexMessage from '../../exchanges/bitrex/message/messages'
import * as bitstampMessage from '../../exchanges/bitstamp/message/messages'
import * as coinoneMessage from '../../exchanges/coinone/message/messages'
import * as okcoinMessage from '../../exchanges/okcoin/message/messages'
import * as geminiMessage from '../../exchanges/gemini/message/messages'
import * as hitbtcMessage from '../../exchanges/hitbtc/message/messages'
import * as huobiMessage from '../../exchanges/huobi/message/messages'
import * as krakenMessage from '../../exchanges/kraken/message/messages'
import * as kucoinMessage from '../../exchanges/kucoin/message/messages'
import * as lunoMessage from '../../exchanges/luno/message/messages'

export class marketFeedFactory {
   
   createToken(market:ExchangeCodes){
    switch(market){
      case ExchangeCodes.GDAX:
        return new gdaxMessage.GdaxMessage.Token();
      case ExchangeCodes.BINANCE:
        return new binanceMessage.BinanceMessage.Token();
      case ExchangeCodes.BITFINEX:
         return new bitfinexMessage.BitfinexMessage.Token();
      case ExchangeCodes.BITREX:
        return new bitrexMessage.BitrexMessage.Token();
      case ExchangeCodes.BITSTAMP:
        return new bitstampMessage.BitstampMessage.Token();
      case ExchangeCodes.COINONE:
       return new coinoneMessage.CoinoneMessage.Token();
      case ExchangeCodes.OKCOIN:
        return new okcoinMessage.OkcoinMessage.Token();
      case ExchangeCodes.GEMINI:
        return new geminiMessage.GeminiMessage.Token();
      case ExchangeCodes.HITBTC:
         return new hitbtcMessage.HitbtcMessage.Token();
      case ExchangeCodes.HUOBI:
        return new huobiMessage.HuobiMessage.Token();
      case ExchangeCodes.KRAKEN:
        return new krakenMessage.KrakenMessage.Token();
      case ExchangeCodes.KUCOIN:
        return new kucoinMessage.KucoinMessage.Token();
      case ExchangeCodes.LUNO:
         return new lunoMessage.LunoMessage.Token();
    }
   }
   createProductPair(market:ExchangeCodes){
     switch(market){
      case ExchangeCodes.GDAX:
        return new gdaxMessage.GdaxMessage.ProductPairs();
      case ExchangeCodes.BINANCE:
        return new binanceMessage.BinanceMessage.ProductPairs();
      case ExchangeCodes.BITFINEX:
         return new bitfinexMessage.BitfinexMessage.ProductPairs();
      case ExchangeCodes.BITREX:
        return new bitrexMessage.BitrexMessage.ProductPairs();
      case ExchangeCodes.BITSTAMP:
        return new bitstampMessage.BitstampMessage.ProductPairs();
      case ExchangeCodes.COINONE:
       return new coinoneMessage.CoinoneMessage.ProductPairs();
      case ExchangeCodes.OKCOIN:
        return new okcoinMessage.OkcoinMessage.ProductPairs();
      case ExchangeCodes.GEMINI:
        return new geminiMessage.GeminiMessage.ProductPairs();
      case ExchangeCodes.HITBTC:
         return new hitbtcMessage.HitbtcMessage.ProductPairs();
      case ExchangeCodes.HUOBI:
        return new huobiMessage.HuobiMessage.ProductPairs();
      case ExchangeCodes.KRAKEN:
        return new krakenMessage.KrakenMessage.ProductPairs();
      case ExchangeCodes.KUCOIN:
        return new kucoinMessage.KucoinMessage.ProductPairs();
      case ExchangeCodes.LUNO:
         return new lunoMessage.LunoMessage.ProductPairs();
    }
   }
   createTokenInfo(market:ExchangeCodes){
    switch(market){
      case ExchangeCodes.GDAX:
        return new gdaxMessage.GdaxMessage.TokenInfo();
      case ExchangeCodes.BINANCE:
        return new binanceMessage.BinanceMessage.TokenInfo();
      case ExchangeCodes.BITFINEX:
         return new bitfinexMessage.BitfinexMessage.TokenInfo();
      case ExchangeCodes.BITREX:
        return new bitrexMessage.BitrexMessage.TokenInfo();
      case ExchangeCodes.BITSTAMP:
        return new bitstampMessage.BitstampMessage.TokenInfo();
      case ExchangeCodes.COINONE:
       return new coinoneMessage.CoinoneMessage.TokenInfo();
      case ExchangeCodes.OKCOIN:
        return new okcoinMessage.OkcoinMessage.TokenInfo();
      case ExchangeCodes.GEMINI:
        return new geminiMessage.GeminiMessage.TokenInfo();
      case ExchangeCodes.HITBTC:
         return new hitbtcMessage.HitbtcMessage.TokenInfo();
      case ExchangeCodes.HUOBI:
        return new huobiMessage.HuobiMessage.TokenInfo();
      case ExchangeCodes.KRAKEN:
        return new krakenMessage.KrakenMessage.TokenInfo();
      case ExchangeCodes.KUCOIN:
        return new kucoinMessage.KucoinMessage.TokenInfo();
      case ExchangeCodes.LUNO:
         return new lunoMessage.LunoMessage.TokenInfo();
    }
   }
   
   createProductPairInfo(market:ExchangeCodes){
    switch(market){
      case ExchangeCodes.GDAX:
        return new gdaxMessage.GdaxMessage.ProductPairInfo();
      case ExchangeCodes.BINANCE:
        return new binanceMessage.BinanceMessage.ProductPairInfo();
      case ExchangeCodes.BITFINEX:
         return new bitfinexMessage.BitfinexMessage.ProductPairInfo();
      case ExchangeCodes.BITREX:
        return new bitrexMessage.BitrexMessage.ProductPairInfo();
      case ExchangeCodes.BITSTAMP:
        return new bitstampMessage.BitstampMessage.ProductPairInfo();
      case ExchangeCodes.COINONE:
       return new coinoneMessage.CoinoneMessage.ProductPairInfo();
      case ExchangeCodes.OKCOIN:
        return new okcoinMessage.OkcoinMessage.ProductPairInfo();
      case ExchangeCodes.GEMINI:
        return new geminiMessage.GeminiMessage.ProductPairInfo();
      case ExchangeCodes.HITBTC:
         return new hitbtcMessage.HitbtcMessage.ProductPairInfo();
      case ExchangeCodes.HUOBI:
        return new huobiMessage.HuobiMessage.ProductPairInfo();
      case ExchangeCodes.KRAKEN:
        return new krakenMessage.KrakenMessage.ProductPairInfo();
      case ExchangeCodes.KUCOIN:
        return new kucoinMessage.KucoinMessage.ProductPairInfo();
      case ExchangeCodes.LUNO:
         return new lunoMessage.LunoMessage.ProductPairInfo();
    }

   }
   createQuoteMessage(market:ExchangeCodes){

    switch(market){
      case ExchangeCodes.GDAX:
        return new gdaxMessage.GdaxMessage.QuoteMessage();
      case ExchangeCodes.BINANCE:
        return new binanceMessage.BinanceMessage.QuoteMessage();
      case ExchangeCodes.BITFINEX:
         return new bitfinexMessage.BitfinexMessage.QuoteMessage();
      case ExchangeCodes.BITREX:
        return new bitrexMessage.BitrexMessage.QuoteMessage();
      case ExchangeCodes.BITSTAMP:
        return new bitstampMessage.BitstampMessage.QuoteMessage();
      case ExchangeCodes.COINONE:
       return new coinoneMessage.CoinoneMessage.QuoteMessage();
      case ExchangeCodes.OKCOIN:
        return new okcoinMessage.OkcoinMessage.QuoteMessage();
      case ExchangeCodes.GEMINI:
        return new geminiMessage.GeminiMessage.QuoteMessage();
      case ExchangeCodes.HITBTC:
         return new hitbtcMessage.HitbtcMessage.QuoteMessage();
      case ExchangeCodes.HUOBI:
        return new huobiMessage.HuobiMessage.QuoteMessage();
      case ExchangeCodes.KRAKEN:
        return new krakenMessage.KrakenMessage.QuoteMessage();
      case ExchangeCodes.KUCOIN:
        return new kucoinMessage.KucoinMessage.QuoteMessage();
      case ExchangeCodes.LUNO:
         return new lunoMessage.LunoMessage.QuoteMessage();
    }

   }
   createBestBidBestAskMessage(market:ExchangeCodes){
    switch(market){
      case ExchangeCodes.GDAX:
        return new gdaxMessage.GdaxMessage.BBMessage();
      case ExchangeCodes.BINANCE:
        return new binanceMessage.BinanceMessage.BBMessage();
      case ExchangeCodes.BITFINEX:
         return new bitfinexMessage.BitfinexMessage.BBMessage();
      case ExchangeCodes.BITREX:
        return new bitrexMessage.BitrexMessage.BBMessage();
      case ExchangeCodes.BITSTAMP:
        return new bitstampMessage.BitstampMessage.BBMessage();
      case ExchangeCodes.COINONE:
       return new coinoneMessage.CoinoneMessage.BBMessage();
      case ExchangeCodes.OKCOIN:
        return new okcoinMessage.OkcoinMessage.BBMessage();
      case ExchangeCodes.GEMINI:
        return new geminiMessage.GeminiMessage.BBMessage();
      case ExchangeCodes.HITBTC:
         return new hitbtcMessage.HitbtcMessage.BBMessage();
      case ExchangeCodes.HUOBI:
        return new huobiMessage.HuobiMessage.BBMessage();
      case ExchangeCodes.KRAKEN:
        return new krakenMessage.KrakenMessage.BBMessage();
      case ExchangeCodes.KUCOIN:
        return new kucoinMessage.KucoinMessage.BBMessage();
      case ExchangeCodes.LUNO:
         return new lunoMessage.LunoMessage.BBMessage();
    }

   }
   createTickerMessage(market:ExchangeCodes){
    switch(market){
      case ExchangeCodes.GDAX:
        return new gdaxMessage.GdaxMessage.TickerMessage();
      case ExchangeCodes.BINANCE:
        return new binanceMessage.BinanceMessage.TickerMessage();
      case ExchangeCodes.BITFINEX:
         return new bitfinexMessage.BitfinexMessage.TickerMessage();
      case ExchangeCodes.BITREX:
        return new bitrexMessage.BitrexMessage.TickerMessage();
      case ExchangeCodes.BITSTAMP:
        return new bitstampMessage.BitstampMessage.TickerMessage();
      case ExchangeCodes.COINONE:
       return new coinoneMessage.CoinoneMessage.TickerMessage();
      case ExchangeCodes.OKCOIN:
        return new okcoinMessage.OkcoinMessage.TickerMessage();
      case ExchangeCodes.GEMINI:
        return new geminiMessage.GeminiMessage.TickerMessage();
      case ExchangeCodes.HITBTC:
         return new hitbtcMessage.HitbtcMessage.TickerMessage();
      case ExchangeCodes.HUOBI:
        return new huobiMessage.HuobiMessage.TickerMessage();
      case ExchangeCodes.KRAKEN:
        return new krakenMessage.KrakenMessage.TickerMessage();
      case ExchangeCodes.KUCOIN:
        return new kucoinMessage.KucoinMessage.TickerMessage();
      case ExchangeCodes.LUNO:
         return new lunoMessage.LunoMessage.TickerMessage();
    }

   }
   createTradeMessage(market:ExchangeCodes){
    switch(market){
      case ExchangeCodes.GDAX:
        return new gdaxMessage.GdaxMessage.TradeMessage();
      case ExchangeCodes.BINANCE:
        return new binanceMessage.BinanceMessage.TradeMessage();
      case ExchangeCodes.BITFINEX:
         return new bitfinexMessage.BitfinexMessage.TradeMessage();
      case ExchangeCodes.BITREX:
        return new bitrexMessage.BitrexMessage.TradeMessage();
      case ExchangeCodes.BITSTAMP:
        return new bitstampMessage.BitstampMessage.TradeMessage();
      case ExchangeCodes.COINONE:
       return new coinoneMessage.CoinoneMessage.TradeMessage();
      case ExchangeCodes.OKCOIN:
        return new okcoinMessage.OkcoinMessage.TradeMessage();
      case ExchangeCodes.GEMINI:
        return new geminiMessage.GeminiMessage.TradeMessage();
      case ExchangeCodes.HITBTC:
         return new hitbtcMessage.HitbtcMessage.TradeMessage();
      case ExchangeCodes.HUOBI:
        return new huobiMessage.HuobiMessage.TradeMessage();
      case ExchangeCodes.KRAKEN:
        return new krakenMessage.KrakenMessage.TradeMessage();
      case ExchangeCodes.KUCOIN:
        return new kucoinMessage.KucoinMessage.TradeMessage();
      case ExchangeCodes.LUNO:
         return new lunoMessage.LunoMessage.TradeMessage();
    }

   }
   createRates(market:ExchangeCodes){
    switch(market){
      case ExchangeCodes.GDAX:
        return new gdaxMessage.GdaxMessage.Rates();
      case ExchangeCodes.BINANCE:
        return new binanceMessage.BinanceMessage.Rates();
      case ExchangeCodes.BITFINEX:
         return new bitfinexMessage.BitfinexMessage.Rates();
      case ExchangeCodes.BITREX:
        return new bitrexMessage.BitrexMessage.Rates();
      case ExchangeCodes.BITSTAMP:
        return new bitstampMessage.BitstampMessage.Rates();
      case ExchangeCodes.COINONE:
       return new coinoneMessage.CoinoneMessage.Rates();
      case ExchangeCodes.OKCOIN:
        return new okcoinMessage.OkcoinMessage.Rates();
      case ExchangeCodes.GEMINI:
        return new geminiMessage.GeminiMessage.Rates();
      case ExchangeCodes.HITBTC:
         return new hitbtcMessage.HitbtcMessage.Rates();
      case ExchangeCodes.HUOBI:
        return new huobiMessage.HuobiMessage.Rates();
      case ExchangeCodes.KRAKEN:
        return new krakenMessage.KrakenMessage.Rates();
      case ExchangeCodes.KUCOIN:
        return new kucoinMessage.KucoinMessage.Rates();
      case ExchangeCodes.LUNO:
         return new lunoMessage.LunoMessage.Rates();
    }

   }
   createChangeMessage(market:ExchangeCodes){
    switch(market){
      case ExchangeCodes.GDAX:
        return new gdaxMessage.GdaxMessage.Change();
      case ExchangeCodes.BINANCE:
        return new binanceMessage.BinanceMessage.Change();
      case ExchangeCodes.BITFINEX:
         return new bitfinexMessage.BitfinexMessage.Change();
      case ExchangeCodes.BITREX:
        return new bitrexMessage.BitrexMessage.Change();
      case ExchangeCodes.BITSTAMP:
        return new bitstampMessage.BitstampMessage.Change();
      case ExchangeCodes.COINONE:
       return new coinoneMessage.CoinoneMessage.Change();
      case ExchangeCodes.OKCOIN:
        return new okcoinMessage.OkcoinMessage.Change();
      case ExchangeCodes.GEMINI:
        return new geminiMessage.GeminiMessage.Change();
      case ExchangeCodes.HITBTC:
         return new hitbtcMessage.HitbtcMessage.Change();
      case ExchangeCodes.HUOBI:
        return new huobiMessage.HuobiMessage.Change();
      case ExchangeCodes.KRAKEN:
        return new krakenMessage.KrakenMessage.Change();
      case ExchangeCodes.KUCOIN:
        return new kucoinMessage.KucoinMessage.Change();
      case ExchangeCodes.LUNO:
         return new lunoMessage.LunoMessage.Change();
    }

   }

}