export namespace HitbtcMessage{
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
    payout_fee: number;
    decode(msg:any){
      let infos:Array<TokenInfo>=[];
      for(let m of msg){
        let info:TokenInfo=new TokenInfo();
        let tk:Token=new Token();
        tk.code = m['id']
        tk.name = m['fullName']

        info.token = tk
        info.payout_fee = m['payoutFee']
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
    quantity_increment:string;
    tick_size:number;
    take_liquidity_rate:number;
    fee_currency:string;

     decode(msg:any){
      // console.log(msg)
      let products:Array<ProductPairInfo>=[];
      for(let m of msg){
        let product:ProductPairInfo= new ProductPairInfo()
        product.symbol=m['id']
        product.base_currency=m['baseCurrency']
        product.quote_currency=m['quoteCurrency']
        product.tick_size=m['tickSize']
        product.take_liquidity_rate=m['takeLiquidityRate']
        product.fee_currency=m['feeCurrency']

        products.push(product)
        
      }
     
      return products;
    }
  }
  // price order book - an array of sorted quote messages 
  export class QuoteMessage {
    price: number;
    size: number; // Total volume of orders with the specified price
    side:string;
    symbol:string;

    decode(msg:any, product?:string){
      // console.log(msg)
      let priceBook:Array<QuoteMessage>=[];
      for(let bid of msg["bid"]){
        let msgbid = new QuoteMessage();
        msgbid.price=bid['price'];
        msgbid.size=bid['size'];
        msgbid.side='B';
        msgbid.symbol=product;

        priceBook.push(msgbid);
      }
      for(let ask of msg["ask"]){
         // console.log(ask)
        let msgask =new QuoteMessage();
        msgask.price=ask['price'];
        msgask.size=ask['size'];
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
      bb.bid_price=msg['bid']
      bb.ask_price=msg['ask']
      
      return bb;
    }
  }
  /**
  Last trade, best bid and best ask, 24hr volume 
  */
  export class TickerMessage {
    symbol:string; 
    open:number;//Last trade price 24 hours ago
    low : number; //Lowest trade price within 24 hours
    high:number; // Highest trade price within 24 hours
    size: number;
    bid_price:number; // Best bid price
    ask_price:number;// Best ask price
    last_trade_price:number; // Last trade price
    volume:number; //Total trading amount within 24 hours in base currency
    volume_quote:number; // Total trading amount within 24 hours in quote currency
    time:string;
    decode(msg:any, product?:string){
      // console.log(msg)
      let ticker =new TickerMessage();
    
      ticker.symbol=product
      ticker.bid_price=msg['bid']
      ticker.ask_price=msg['ask']
      ticker.last_trade_price=msg['last']
      ticker.open=msg['open']
      ticker.low=msg['low']
      ticker.high=msg['high']
      ticker.time=msg['timestamp']
      ticker.volume=msg['volume']
      ticker.volume_quote=msg['volumeQuote']
      
      return ticker;
    }
  }
  export class TradeMessage {
    symbol:string;
    trade_id:number;
    price: number;
    size: number; // Trade quantity
    side:string;
    time: string;

    decode(msg:any, product?:string){
      // console.log(msg)
      let trades:Array<TradeMessage>=[];
      for(let m of msg){
           let trade =new TradeMessage();
           trade.symbol= product
           trade.trade_id= m['id']
           trade.price= m['price']
           trade.size= m['quantity']
           trade.side= (m['side'] == 'buy' ? 'B' : 'S');
           trade.time= m['timestamp']
           trades.push(trade)

      }
      return trades;
    }
  }
  export class Rates {
    symbol:string;
    low:number;
    high: number;
    open: number;
    close:string;
    volume:number; // Volume in base currency
    volume_quote:number; // Volume in quote currency
    time: string;
     decode(msg:any, product?:string){
      // console.log(msg)
      let rates:Array<Rates>=[];
      for(let m of msg){
           let rate =new Rates();
           rate.symbol= product
           rate.time= m['timestamp']
           rate.low= m['min']
           rate.high= m['max']
           rate.open= m['open']
           rate.close= m['close']
           rate.volume= m['volume']
           rate.volume_quote= m['volumeQuote']

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

