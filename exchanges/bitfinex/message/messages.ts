export namespace BitfinexMessage{
  
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
      return msg; 
    }

  }
  export class ProductPairInfo {
    symbol: string;
    price_precision:number;
    initial_margin:number;
    minimum_margin:number;
    max_order_size:number;
    min_order_size:number;
    margin:boolean;
    decode(msg:any){
      let products:Array<ProductPairInfo>=[];
      for(let m of msg){
        let product:ProductPairInfo= new ProductPairInfo()
        product.symbol = m['pair']
        product.price_precision = m['price_precision']
        product.initial_margin = m['initial_margin']
        product.minimum_margin = m['minimum_margin']
        product.max_order_size = m['maximum_order_size']
        product.min_order_size = m['minimum_order_size']
        product.margin = m['margin']
        products.push(product)
      }
      return products; 
    }
  }
  // price order book - an array of sorted quote messages 
  export class QuoteMessage {
    price: number;
    size: number; //size field is the sum of the size of the orders at that price.(Total amount available at that price level)
    side:string;
    symbol:string;
    decode(msg:any, product?:string){
      // console.log(msg)
      let priceBook:Array<QuoteMessage>=[];
      for(let bid of msg["bids"]){
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
      bb.bid_price=msg[0]
      bb.ask_price=msg[2]
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
    bid_size: number;
    ask_price:number;
    ask_size: number;
    daily_change:number;
    daily_change_percentage:number;
    last_trade_price: number;
    volume:number;
    high:number;
    low:number;
    decode(msg:any, product?:string){
      // console.log(msg)
      let ticker =new TickerMessage();
    
      ticker.symbol=product

      ticker.bid_price=msg[0]
      ticker.bid_size=msg[1]
      ticker.ask_price=msg[2]
      ticker.ask_size=msg[3]
      ticker.daily_change=msg[4]
      ticker.daily_change_percentage=msg[5]
      ticker.last_trade_price=msg[6]
      ticker.volume=msg[7]
      ticker.high=msg[8]
      ticker.low=msg[9]
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
    size: number; // How much was bought (positive) or sold (negative).
    time: string;

    decode(msg:any, product?:string){
      // console.log(msg)
      let trades:Array<TradeMessage>=[];
      for(let m of msg){
        let trade =new TradeMessage();
        trade.symbol= product
        trade.trade_id= m[0]
        trade.time= m[1]
        trade.size= m[2]
        trade.price= m[3]
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

    decode(msg:any, product?:string){
      // console.log(msg)
      let rates:Array<Rates>=[];
      for(let m of msg){
           let rate =new Rates();
           rate.symbol= product
           rate.time= m[0]
           rate.open= m[1]
           rate.close= m[2]
           rate.high= m[3]
           rate.low= m[4]
           rate.volume= m[5]
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
