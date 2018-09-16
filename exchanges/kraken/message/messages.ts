export namespace KrakenMessage{
  
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
    base_currency:string;
    quote_currency:string;

     decode(msg:any){
      return msg;
      
    }
  }
  // price order book - an array of sorted quote messages 
  export class QuoteMessage {
    price: number; 
    volume: number; 
    side:string;
    symbol:string;
    time:string;
    decode(msg:any, product?:string){
      // console.log(msg)
      let priceBook:Array<QuoteMessage>=[];
      Object.keys(msg['result']).forEach(function(key) {
        // console.log(key, msg['result'][key]['asks'])
        
        for(let bid of msg['result'][key]['bids']){
          // console.log(bid)
          let msgbid = new QuoteMessage();
          msgbid.price=bid[0];
          msgbid.volume=bid[1];
          msgbid.time=bid[2];
          msgbid.side='B';
          msgbid.symbol=product;
          if (msgbid.price) {
            priceBook.push(msgbid);
          }
          
        }
        for(let ask of msg['result'][key]['asks']){
          // console.log(ask)
          let msgask =new QuoteMessage();
          msgask.price=ask[0];
          msgask.volume=ask[1];
          msgask.time=ask[2];
          // msgask.side='S';
          msgask.symbol=product;
          if (msgask.price) {
            priceBook.push(msgask);
          }
          
        }
        
      })
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
      let bb =new BBMessage();
      Object.keys(msg['result']).forEach(function(key) {
        bb.symbol=product
        bb.bid_price=msg['result'][key]['b'][0]
        bb.ask_price=msg['result'][key]['a'][0]
        if(bb.ask_price){
          return bb;
        }
        
      })
      
      
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
    vwap:number;

    decode(msg:any, product?:string){
      // console.log(msg)

      let ticker =new TickerMessage();
      Object.keys(msg['result']).forEach(function(key) {
        ticker.symbol=product
        
        ticker.last_trade_price=msg['result'][key]['c'][0]
        ticker.bid_price=msg['result'][key]['b'][0]
        ticker.ask_price=msg['result'][key]['a'][0]
        ticker.volume=msg['result'][key]['v'][0]
        ticker.low=msg['result'][key]['l'][0]
        ticker.high=msg['result'][key]['h'][0]
        ticker.vwap=msg['result'][key]['p'][0]
        if (ticker.last_trade_price) {
          return ticker;
        }
        else{
          return null;
        }
        
      })
      
      
    }
  }

  export class TradeMessage {
    symbol:string;
    price: number;
    volume: number;
    side:string;
    trade_id:number;
    time: string;

    decode(msg:any, product?:string){
      // console.log(JSON.stringify(msg))
      let trades:Array<TradeMessage>=[];
      Object.keys(msg['result']).forEach(function(key) {

       
        if(key!='last'){
          for(let m of msg['result'][key]){
            // console.log(m)
            let trade =new TradeMessage();
            trade.symbol=product
            trade.price=m[0]
            trade.volume=m[1]
            trade.time=m[2]
            trade.side=m[3]
            if (trade.price) {
              trades.push(trade)
            }
            
          }
        }
        else{
          
        }
        
      })
      if (trades.length >0) {
        return trades;
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
    vwap:number;
    time: string;

    decode(msg:any, product?:string){
      // console.log(JSON.stringify(msg))
      let rates:Array<Rates>=[];
      Object.keys(msg['result']).forEach(function(key) {
       
        if(key!='last'){
          for(let m of msg['result'][key]){
            // console.log(m)
            let rate =new Rates();
            rate.symbol=product
            rate.time=m[0]
            rate.open=m[1]
            rate.high=m[2]
            rate.low=m[3]
            rate.close=m[4]
            rate.vwap=m[5]
            rate.volume=m[6]
            rates.push(rate)
          }
        }
        else{
          
        }
        
      })
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
