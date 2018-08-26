export namespace HuobiMessage{
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
      return msg['data'];
    }

  }
  export class ProductPairInfo {
    symbol: string;
    base_currency: string;
    quote_currency: string;
    min_order_size: number;
    min_price_increment:number;

    decode(msg:any){
      // console.log(msg)
      let products:Array<ProductPairInfo>=[];
      for(let m of msg['data']){
        let product:ProductPairInfo= new ProductPairInfo()
        product.symbol=m['base-currency'].concat(m['quote-currency'])
        product.base_currency=m['base-currency']
        product.quote_currency=m['quote-currency']
        product.min_price_increment=m['price-precision']
        product.min_order_size=m['amount-precision']

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
      for(let bid of msg['tick']["bids"]){
        // console.log(bid)
        let msgbid = new QuoteMessage();
        msgbid.price=bid[0];
        msgbid.size=bid[1];
        msgbid.side='B';
        msgbid.symbol=product;

        priceBook.push(msgbid);
      }
      for(let ask of msg['tick']["asks"]){
         // console.log(ask)
        let msgask =new QuoteMessage();
        msgask.price=ask[0];
        msgask.size=ask[1];
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
      bb.bid_price=msg['tick']['bid'][0]
      bb.ask_price=msg['tick']['ask'][0]
      
      return bb;
    }
  }
  /**
  Last trade, best bid and best ask, 24hr volume 
  */
  export class TickerMessage {
    symbol:string;
    trade_id:number;
    size: number;
    bid_price:number; //  [bid1 price, volume],
    ask_price:number; // [ask1 price, volume]
    volume:number;
    open:number;
    close:number;
    low:number;
    high:number;
    time:string;

     decode(msg:any, product?:string){
      // console.log(msg)
      let ticker =new TickerMessage();
      
      ticker.symbol=product
      ticker.trade_id=msg['tick']['id']
      ticker.size=msg['tick']['amount']
      ticker.bid_price=msg['tick']['bid'][0]
      ticker.ask_price=msg['tick']['ask'][0]
      ticker.volume=msg['tick']['vol']
      ticker.open=msg['tick']['open']
      ticker.close=msg['tick']['close']
      ticker.low=msg['tick']['low']
      ticker.high=msg['tick']['high']
      ticker.time=msg['ts']

      return ticker;
    }
  }

  export class TradeMessage {
    symbol:string;
    trade_id:number;
    price: number;
    size: number;
    side:string;
    time: string;
    decode(msg:any, product?:string){
      // console.log(msg)
      let trades:Array<TradeMessage>=[];
      for(let m of msg['data']){
        let trade =new TradeMessage();
        trade.symbol= product
        trade.trade_id= m['data']['id']
        trade.price= m['data'][0]['price']
        trade.size= m['data'][0]['amount']
        trade.side= (m['data']['direction'] == 'buy' ? 'B' : 'S');
        trade.time= m['data'][0]['ts']
        trades.push(trade)
        // console.log(m['data'][0]['price'], m['data'][0]['amount'], m['data'][0]['ts'])

      }
      return trades;
    }
  }

  export class Rates {
    symbol:string;
    size:number; // trading amount 
    low:number;
    high: number;
    open: number;
    close:string;
    volume:number;
    // time: string;

    decode(msg:any, product?:string){
      // console.log(msg)
      let rates:Array<Rates>=[];
      for(let m of msg['data']){
           let rate =new Rates();
           rate.symbol= product
           // rate.time= m[0]
           rate.low= m['low']
           rate.high= m['high']
           rate.open= m['open']
           rate.close= m['close']
           rate.volume= m['vol']
           
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
