export namespace KucoinMessage{
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
      return this; 
    }

  }
  export class ProductPairInfo {
    id: string; // url_symbol here 
    name:string;
    base_currency:string;
    quote_currency:string;
    min_size:number;
    description:string;
    status:string;
  }
  // price order book - an array of sorted quote messages 
  export class QuoteMessage {
    price: number; 
    size: number; //qty here 
    side:string;
    symbol:string;
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
    price: number; // price of last trade
    bid_price:number;
    ask_price:number;
    high:number;
    low:number;
    volume:number;
    time:string;
  }

  export class TradeMessage {
    id:number; // trade id
    symbol:string;
    price: number;
    side:string;
    size: number; // amount
    time: string;
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


