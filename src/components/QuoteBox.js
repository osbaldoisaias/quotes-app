import React from 'react';
import quotes from '../quotes.json';
import {useState} from 'react';
import Button from './Button'

const colors = ["#845EC2","#2C73D2","#FF6F91","#0081CF","#C34A36","#926C00", "#4E8397", "#008B74","#F9F871","#4D8076"];

const QuoteBox = () => {

    const getRandom = () => Math.floor(Math.random() *quotes.length);
    const [quote, setQuote] = useState(quotes[getRandom()]);
    const changeQuote = () => {
        setQuote(quotes[getRandom()])
    }
    
    const color = colors[Math.floor(Math.random()*10)];
    document.body.style = `background: ${color}`


    return (
        <div className="QuoteBox" style={{color:color}}>
            <div><i className="fa-solid fa-quote-left"></i> {quote.quote}</div>
            <p>{quote.author}</p>
            <Button changeQuote={changeQuote} background={color}/>
        </div>
    );
};

export default QuoteBox;