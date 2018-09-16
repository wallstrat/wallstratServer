export namespace GdaxMessage{
  
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
    symbols: Array<string>;
    base_currency: string;
    decode(msg:any){
      // console.log(msg)
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
    status:string;
    decode(msg:any){
      // console.log(msg)
      let infos:Array<TokenInfo>=[];
      for(let m of msg){
        let info:TokenInfo=new TokenInfo();
        let tk:Token=new Token();
        tk.code = m['id']
        tk.name = m['name']

        info.token = tk
        info.min_order_size = m['min_size']
        info.status = m['status']
        infos.push(info)
      }
      // console.log(infos)
      return infos; 
    }

  }
  export class ProductPairInfo {
    symbol: string;
    base_currency: string;
    quote_currency: string;
    base_min_size:number;
    base_max_size:number;
    quote_increment:number;
    
    decode(msg:any){
      // console.log(msg)
      let products:Array<ProductPairInfo>=[];
      for(let m of msg){
        let product:ProductPairInfo= new ProductPairInfo()
        product.symbol=m['id']
        product.base_currency=m['base_currency']
        product.base_min_size=m['quote_currency']
        product.base_max_size=m['base_min_size']
        product.quote_increment=m['base_max_size']
        product.quote_increment=m['quote_increment']
        products.push(product)
        // console.log(m['id'], m['base_currency'], m['quote_currency'], m['base_min_size'], m['base_max_size'], m['quote_increment'])
        
      }
      // console.log(msg)
      return products;
    }

  }
  // price order book - an array of sorted quote messages 
  export class QuoteMessage {
    price: number;
    size: number; // size field is the sum of the size of the orders at that price
    num_orders: number; // num-orders is the count of orders at that price
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
        msgbid.num_orders=bid[2];
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
        msgask.num_orders=ask[2];
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
    trade_id:number;
    last_trade_price: number;
    size: number;
    bid_price:number;
    ask_price:number;
    volume:number;
    time:string;
    decode(msg:any, product?:string){
      // console.log(msg)
      let ticker =new TickerMessage();
      
      ticker.symbol=product
      ticker.trade_id=msg['trade_id']
      ticker.last_trade_price=msg['price']
      ticker.size=msg['size']
      ticker.bid_price=msg['bid']
      ticker.ask_price=msg['ask']
      ticker.volume=msg['volume']
      ticker.time=msg['time']
      if(ticker.last_trade_price){
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
    side:string; // order that was open on the order book
    time: string;
    decode(msg:any, product?:string){
      // console.log(msg)
      let trades:Array<TradeMessage>=[];
      for(let m of msg){
           let trade =new TradeMessage();
           trade.symbol= product
           trade.trade_id= m['trade_id']
           trade.price= m['price']
           trade.size= m['size']
           trade.side= (m['side'] == 'buy' ? 'B' : 'S');
           trade.time= m['time']
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
           rate.low= m[1]
           rate.high= m[2]
           rate.open= m[3]
           rate.close= m[4]
           rate.volume= m[5]
           if(rate.low){
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
      // console.log(Object.values(msg))
      msg = Object.values(msg);
      // console.log(typeof msg)
      // for(let row of msg){
      //   for(let col of row){
      //     console.log(" ", col)
      //   }
      // }

      let change = new Change();
      change.symbol = product;
      change.change_absolute = msg[0][4] - msg[msg.length-1][4]
      change.change_percentage = 100*(change.change_absolute/msg[msg.length-1][4])

      // console.log(msg[0][4], msg[msg.length-1][4])
      if(change.change_absolute){
        return change;
      }
      else{
        return null;
      }
    }
  }


}

