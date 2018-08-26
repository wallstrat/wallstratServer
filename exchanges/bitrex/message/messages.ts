export namespace BitrexMessage{
  
  export class Token {
    code: string;
    name: string;
    decode(msg:any){
      let tokens:Array<Token>=[];
      Object.keys(msg).forEach(function(key) {
        let token:Token=new Token();
        token.code = msg[key]['id'];
        token.name = key;
        tokens.push(token);        
      }.bind(this))
    
      return tokens;
    }
  }
  export class ProductPairs {
    symbols: Array<string>;
    base_currency: string;
    decode(msg:any){
      let pairs:Array<ProductPairs>=[];
      Object.keys(msg).forEach(function(key) {
        let pair:ProductPairs=new ProductPairs();
        pair.base_currency = msg[key]['id'];
        pair.symbols = msg[key]['currencyPairs'];
        pairs.push(pair);        
      }.bind(this))
      return pairs;

    }

  }
  export class TokenInfo {
    token: Token;
    min_confirmation: number;
    is_active: boolean;
    tx_fee:number;
    decode(msg:any){
      // console.log(msg)
      let infos:Array<TokenInfo>=[];
      for(let m of msg['result']){
        let info:TokenInfo=new TokenInfo();
        let tk:Token=new Token();
        tk.code = m['Currency']
        tk.name = m['CurrencyLong']

        info.token = tk
        info.min_confirmation = m['MinConfirmation']
        info.is_active = m['IsActive']
        info.tx_fee = m['TxFee']
        infos.push(info)
      }
      // console.log(infos)
      return infos; 
    }

  }
  export class ProductPairInfo {
    symbol: string;
    base_currency:string;
    quote_currency:string;
    min_trade_size:number;
    is_active:boolean;
    decode(msg:any){
      // console.log(msg)
      let products:Array<ProductPairInfo>=[];
      for(let m of msg['result']){
        let product:ProductPairInfo= new ProductPairInfo()
        product.symbol = m['MarketName']
        product.base_currency = m['BaseCurrency']
        product.quote_currency = m['MarketCurrency']
        product.min_trade_size = m['MinTradeSize']
        product.is_active = m['IsActive']
        products.push(product)
      }
      return products; 
    }

  }
  // price order book - an array of sorted quote messages 
  export class QuoteMessage {
    price: number; // rate here 
    size: number; //quantity here 
    side:string;
    symbol:string;
    decode(msg:any, product?:string){
      // console.log(msg)
      let priceBook:Array<QuoteMessage>=[];
      for(let bid of msg['result']["buy"]){
        let msgbid = new QuoteMessage();
        msgbid.price=bid['Rate'];
        msgbid.size=bid['Quantity'];
        msgbid.side='B';
        msgbid.symbol=product;

        priceBook.push(msgbid);
      }
      for(let ask of msg['result']["sell"]){
        let msgask =new QuoteMessage();
        msgask.price=ask['Rate'];
        msgask.size=ask['Quantity'];
        msgask.side='S';
        msgask.symbol=product;

        priceBook.push(msgask);
      }
      return priceBook
    }
  }
   /**
  Best bid and Best ask 
  */
  export class BBMessage {
    symbol:string;
    bid_price:number;
    ask_price:number;
    decode(msg:any, product?:string){
      let bb =new BBMessage();
      
      bb.symbol=product
      bb.bid_price=msg['result']['Bid']
      bb.ask_price=msg['result']['Ask']
      
      return bb;
    }
  }
  /**
  Last trade, best bid and best ask, 24hr volume 
  */
  export class TickerMessage {
    symbol:string;
    last_trade_price: number; // price of last trade
    bid_price:number;
    ask_price:number;
    decode(msg:any, product?:string){
      // console.log(msg)
      let ticker =new TickerMessage();
    
      ticker.symbol=product
      ticker.bid_price=msg['result']['Bid']
      ticker.ask_price=msg['result']['Ask']
      ticker.last_trade_price=msg['result']['Last']

      return ticker;
    }
  }

  export class TradeMessage {
    symbol:string;
    trade_id:number;
    price: number;
    side:string;
    size: number; // quantity
    time: string;
    fill_type:string;
    decode(msg:any, product?:string){
      // console.log(msg)
      let trades:Array<TradeMessage>=[];
      for(let m of msg['result']){
        let trade =new TradeMessage();
        trade.symbol= product
        trade.trade_id= m['Id']
        trade.time= m['TimeStamp']
        trade.size= m['Quantity']
        trade.side= m['OrderType'] == 'BUY' ? 'B' : 'S';
        trade.price= m['Price']
        trade.fill_type= m['FillType']
        trades.push(trade)
      }
      return trades
      
    }
  }

  export class Rates { // 24 hour 
    symbol:string;
    high_24hr:number;
    low_24hr: number;
    volume_24hr: number;
    last_24hr:string;
    base_volume_24hr:number;
    time:number;
    bid_price_24hr:number;
    ask_price_24hr:number;
    open_buy_order_24hr:number;
    open_sell_order_24hr:number;
    prev_day_24hr:number;

     decode(msg:any, product?:string){
      // console.log(msg)
      let rates:Array<Rates>=[];
      for(let m of msg['result']){
           let rate =new Rates();
           rate.symbol= product
           rate.high_24hr= m['High']
           rate.low_24hr= m['Low']
           rate.volume_24hr= m['Volume']
           rate.last_24hr= m['Last']
           rate.base_volume_24hr= m['BaseVolume']
           rate.time= m['TimeStamp']
           rate.bid_price_24hr= m['Bid']
           rate.ask_price_24hr= m['Ask']
           rate.open_buy_order_24hr= m['OpenBuyOrders']
           rate.open_sell_order_24hr= m['OpenSellOrders']
           rate.prev_day_24hr= m['PrevDay']

           rates.push(rate)
           
      }
      return rates;
    }

  }
  export class Change {
    change_absolute: number;
    change_percentage: number;
    symbol:string;

    decode(msg:any, product?:string){
      // console.log(msg)
      
      for(let m of msg){
           
           
      }
     
    }
  }

}

