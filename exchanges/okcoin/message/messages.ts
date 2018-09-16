export namespace OkcoinMessage{
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
      for(let bid of msg["bids"]){
        let msgbid = new QuoteMessage();
        msgbid.price=bid[0];
        msgbid.size=bid[1];
        msgbid.side='B';
        msgbid.symbol=product;
        if (msgbid.price) {
          priceBook.push(msgbid);
        }
        
      }
      for(let ask of msg["asks"]){
        let msgask =new QuoteMessage();
        msgask.price=ask[0];
        msgask.size=ask[1];
        msgask.side='S';
        msgask.symbol=product;
        if (msgask.price) {
          priceBook.push(msgask);
        }
        
      }
      if (priceBook.length > 0) {
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
      bb.bid_price=msg['ticker']['buy']
      bb.ask_price=msg['ticker']['sell']
      if (bb.bid_price) {
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
    volume:number;
    time:string;
    decode(msg:any, product?:string){
      // console.log(msg)
      let ticker =new TickerMessage();
    
      ticker.symbol=product
      ticker.bid_price=msg['ticker']['buy']
      ticker.ask_price=msg['ticker']['sell']
      ticker.last_trade_price=msg['ticker']['last']
      ticker.high=msg['ticker']['high']
      ticker.low=msg['ticker']['low']
      ticker.volume=msg['ticker']['vol']
      if (ticker.bid_price) {
        return ticker;
      }
      else{
        return null;
      }

    }
  }

  export class TradeMessage {
    trade_id:number; // trade id
    symbol:string;
    price: number;
    side:string;
    size: number; // amount
    time: string;
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
        trade.time= m['date_ms']
        if (trade.price) {
          trades.push(trade)
        }
        
      }
      if (trades.length > 0) {
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
           if (rate.open) {
            rates.push(rate)
           } 
           
      }
      if (rates.length > 0) {
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

