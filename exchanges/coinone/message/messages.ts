export namespace CoinoneMessage{
  
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
      return msg; 
    }

  }
  export class ProductPairInfo {
    symbol: string;  
    name:string;
    base_currency:string;
    quote_currency:string;
    decode(msg:any){
      return msg; 
    }

  }
  // price order book - an array of sorted quote messages 
  export class QuoteMessage {
    price: number; 
    size: number; //qty here 
    side:string;
    symbol:string;

    decode(msg:any, product?:string){
      // console.log(msg)
      let priceBook:Array<QuoteMessage>=[];
      for(let bid of msg["bid"]){
        let msgbid = new QuoteMessage();
        msgbid.price=bid['price'];
        msgbid.size=bid['qty'];
        msgbid.side='B';
        msgbid.symbol=product;

        priceBook.push(msgbid);
      }
      for(let ask of msg["ask"]){
        let msgask =new QuoteMessage();
        msgask.price=ask['price'];
        msgask.size=ask['qty'];
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
      
      return bb;
    }
  }
  /**
  Last trade, best bid and best ask, 24hr volume 
  */
  export class TickerMessage {
    symbol:string;
    volume:number;
    last:number;
    yesterday_last:number;
    time:string;
    yesterday_low:number;
    high:number;
    low:number;
    yesterday_volume:number;

    decode(msg:any, product?:string){
      console.log(msg)
      let ticker =new TickerMessage();
    
      ticker.symbol=product
      ticker.volume=msg['volume']
      ticker.last=msg['last']
      ticker.yesterday_last=msg['yesterday_last']
      ticker.time=msg['time']
      ticker.yesterday_low=msg['yesterday_low']
      ticker.high=msg['high']
      ticker.low=msg['low']
      ticker.yesterday_volume=msg['yesterday_volume']

      return ticker;
    }
  }
  export class TradeMessage {
    symbol:string;
    price: number;
    side:string;
    size: number; // amount
    time: string;
    decode(msg:any, product?:string){
      // console.log(msg)
      let trades:Array<TradeMessage>=[];
      for(let m of msg['completeOrders']){
        let trade =new TradeMessage();
        trade.symbol= product
        trade.time= m['timestamp']
        trade.size= m['qty']
        trade.price= m['price']
        trade.side= m['is_ask'] == '1' ? 'S' : 'B';

        trades.push(trade)
      }
      return trades
      
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

