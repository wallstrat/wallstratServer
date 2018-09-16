export namespace GeminiMessage{
  
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
    decode(msg:any){
      // console.log(msg)
      return msg; 
    }

  }
  export class ProductPairInfo {
    symbol: string;
    decode(msg:any){
      // console.log(msg)
      return msg;
      
    }
  }
  // price order book - an array of sorted quote messages 
  export class QuoteMessage {
    price: number;
    size: number; // size field is the sum of the size of the orders at that price
    // time:string; // dont use this value - it's dummy 
    side:string;
    symbol:string;

    decode(msg:any, product?:string){
      // console.log(msg)
      let priceBook:Array<QuoteMessage>=[];
      for(let bid of msg["bids"]){
        // console.log(bid)
        let msgbid = new QuoteMessage();
        msgbid.price=bid['price'];
        msgbid.size=bid['amount'];
        msgbid.side='B';
        msgbid.symbol=product;
        if(msgbid.price){
          priceBook.push(msgbid);
        }
        
      }
      for(let ask of msg["asks"]){
         // console.log(ask)
        let msgask =new QuoteMessage();
        msgask.price=ask['price'];
        msgask.size=ask['amount'];
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
      let bb =new BBMessage();
      
      bb.symbol=product
      bb.bid_price=msg['bid']
      bb.ask_price=msg['ask']
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
    last_trade_price: number;
    bid_price:number;
    ask_price:number;
    /**
    The volume field will contain information about the 24 hour volume on the exchange. 
    The volume is updated every five minutes based on a trailing 24-hour window of volume. It will have three fields
    1. timestamp 2. The volume denominated in the quote currency 3. The volume denominated in the base currency
    */
    time:string;
    decode(msg:any, product?:string){
      // console.log(msg)
      let ticker =new TickerMessage();
    
      ticker.symbol=product
      ticker.bid_price=msg['bid']
      ticker.ask_price=msg['ask']
      ticker.last_trade_price=msg['last']
      ticker.time=msg['volume']['timestamp']
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
    time: string;
    side:string; // // order that was open on the order book ( opposite of what was coming in object )

    decode(msg:any, product?:string){
      // console.log(msg)
      let trades:Array<TradeMessage>=[];
      for(let m of msg){
        let trade =new TradeMessage();
        trade.symbol= product
        trade.trade_id= m['tid']
        trade.price= m['price']
        trade.size= m['amount']
        trade.side=  m['type']=='sell'? 'S' : 'B';
        trade.time= m['timestampms']
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

