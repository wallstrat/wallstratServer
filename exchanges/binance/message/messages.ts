export namespace BinanceMessage{
  
   export class Token {
    code: string;
    name: string;
    decode(msg:any){
      // console.log(msg)
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
    // console.log(msg)
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
    min_order_size: number;
    decode(msg:any){
      // console.log(msg)
      return 'Later'; 
    }

  }
  export class ProductPairInfo {
  symbol: string;
  status:string;
  base_currency: string;
  quote_currency: string;
  tick_size:number;
  decode(msg:any){
    // console.log(msg)
    let products:Array<ProductPairInfo>=[];
    for(let m of msg['symbols']){
      let product:ProductPairInfo= new ProductPairInfo()
      product.symbol = m['symbol']
      product.status = m['status']
      product.base_currency = m['baseAsset']
      product.quote_currency = m['quoteAsset']
      product.tick_size = m['quotePrecision']
      products.push(product)
    }
    return products; 
  }

}
  // price order book - an array of sorted quote messages 
  export class QuoteMessage {
    price: number;
    size: number; // size field is the sum of the size of the orders at that price
    side:string;
    symbol:string;

    decode(msg:any, product?:string){
      // console.log(msg)
      let priceBook:Array<QuoteMessage>=[];
      for(let bid of msg["bids"]){
        // console.log(bid)
        let msgbid = new QuoteMessage();
        msgbid.price=bid[0];
        msgbid.size=bid[1];
        msgbid.side='B';
        msgbid.symbol=product;
        if(msgbid.price){
          priceBook.push(msgbid);
        }
        
      }
      for(let ask of msg["asks"]){
         // console.log(ask)
        let msgask =new QuoteMessage();
        msgask.price=ask[0];
        msgask.size=ask[1];
        msgask.side='S';
        msgask.symbol=product;
        if(msgask.price){
          priceBook.push(msgask);
        }
      }
      if(priceBook.length > 0){
        return priceBook
      }
      else{
        return null;
      }
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
      // console.log(msg)
      let bb=new BBMessage();
    
      bb.symbol=product
      bb.bid_price=msg['bidPrice']
      bb.ask_price=msg['askPrice']
      if(bb.bid_price){
        return bb;
      }
      else{
        return null;
      }
    }
  }
  /**
  Last trade, best bid and best ask, 24hr volume 
  */
  export class TickerMessage {
    symbol:string;
    bid_price:number;
    ask_price:number;
    bid_size:number;
    ask_size:number;
    decode(msg:any, product?:string){
      // console.log(msg)
      let ticker =new TickerMessage();
    
      ticker.symbol=product
      ticker.bid_price=msg['bidPrice']
      ticker.ask_price=msg['askPrice']
      ticker.bid_size=msg['bidQty']
      ticker.ask_size=msg['askQty']
      if(ticker.bid_price){
        return ticker;
      }
      else{
        return null;
      }
      
    }
  }

  export class TradeMessage {
    symbol:string;
    trade_id:number;
    price: number;
    size: number;
    side:string;
    time: string;
    isBuyerMaker:boolean;
    isBestMatch:boolean;
    decode(msg:any, product?:string){
      // console.log(msg)
      let trades:Array<TradeMessage>=[];
      for(let m of msg){
        let trade =new TradeMessage();
        trade.symbol= product
        trade.trade_id= m['id']
        trade.price= m['price']
        trade.size= m['qty']
        trade.side=  m['isBuyerMaker']? 'B' : 'S';
        trade.time= m['time']
        trade.isBuyerMaker= m['isBuyerMaker']
        trade.isBestMatch= m['isBestMatch']
        if(trade.price){
          trades.push(trade)
        }
        
      }
      if(trades.length > 0){
        return trades;
      }
      else{
        return null;
      }
      
    }
  }

  export class Rates {
    time: string;
    open: number;
    high: number;
    low:number;
    close:string;
    volume:number;
    quote_asset_volume:number;
    trades_count:number;
    taker_buy_base_asset_volume:number;
    taker_buy_quote_asset_volume:number;
    symbol:string;

    decode(msg:any, product?:string){
      // console.log(msg)
      let rates:Array<Rates>=[];
      for(let m of msg){
           let rate =new Rates();
           rate.symbol= product
           rate.time= m[0]
           rate.open= m[1]
           rate.high= m[2]
           rate.low= m[3]
           rate.close= m[4]
           rate.volume= m[5]
           rate.quote_asset_volume= m[7]
           rate.trades_count= m[8]
           rate.taker_buy_base_asset_volume= m[9]
           rate.taker_buy_quote_asset_volume= m[10]
           if(rate.open){
            rates.push(rate)
           }    

      }
      if(rates.length > 0){
        return rates;
      }
      else{
        return null;
      }
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

