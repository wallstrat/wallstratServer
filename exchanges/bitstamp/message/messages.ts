export namespace BitstampMessage{
  
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
    min_order_size: number;
    decode(msg:any){
      // console.log(msg)
      return msg; 
    }

  }
  export class ProductPairInfo {
    symbol: string;  
    base_currency:string;
    quote_currency:string;
    min_order_size:number;
    is_active:string;
    decode(msg:any){
      // console.log(msg)
      let products:Array<ProductPairInfo>=[];
      for(let m of msg){
        let product:ProductPairInfo= new ProductPairInfo()
        product.symbol = m['url_symbol']
        product.base_currency = m['name'].split("/")[0]
        product.quote_currency = m['name'].split("/")[1]
        product.min_order_size = m['minimum_order']
        product.is_active = m['trading']
        products.push(product)
      }
      return products; 
    }
  }
  // price order book - an array of sorted quote messages 
  export class QuoteMessage {
    price: number; 
    size: number; 
    side:string;
    symbol:string;
    decode(msg:any, product?:string){
      // console.log(msg)
      let priceBook:Array<QuoteMessage>=[];
      for(let bid of msg["bids"]){
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
        return priceBook;
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
      let bb =new BBMessage();
      
      bb.symbol=product
      bb.bid_price=msg['bid']
      bb.ask_price=msg['ask']

      if(bb.ask_price){
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
  last_trade_price: number; // price of last trade
  bid_price:number;
  ask_price:number;
  high:number;
  low:number;
  open:number;
  volume:number;
  vwap:number;
  time:string;
  decode(msg:any, product?:string){
      // console.log(msg)
      let ticker =new TickerMessage();
    
      ticker.symbol=product
      ticker.last_trade_price=msg['last']
      ticker.bid_price=msg['bid']
      ticker.ask_price=msg['ask']
      ticker.high=msg['high']
      ticker.low=msg['low']
      ticker.open=msg['open']
      ticker.volume=msg['volume']
      ticker.vwap=msg['vwap']
      ticker.time=msg['timestamp']

      if(ticker.bid_price){
        return ticker;
      }
      else{
        return null;
      }

    }
}

export class TradeMessage {
  trade_id:number;
  symbol:string;
  price: number;
  side:string; // 0 (buy) or 1 (sell)
  size: number; // amount
  time: string;
  decode(msg:any, product?:string){
    // console.log(msg)
    let trades:Array<TradeMessage>=[];
    for(let m of msg){
      let trade =new TradeMessage();
      trade.symbol= product
      trade.trade_id= m['tid']
      trade.time= m['date']
      trade.size= m['amount']
      trade.price= m['price']
      trade.side = m['type'] == '0' ? 'B' :'S'
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
  symbol:string;
  low:number;
  high: number;
  open: number;
  close:string;
  last:number;
  bid:number;
  ask:number;
  volume:number;
  time: string;
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

