import React, { useEffect, useState } from 'react'
import './Quote.css';
function Quote() {
    const url= " https://api.quotable.io/random";
    const [quote, setQuote] = useState("");
    const getQuote=()=>{
        fetch(url)
        .then(response=> response.json())
        .then(data=>setQuote(data))
    }
    useEffect(() => {
     getQuote()   
    }, [])
    const {content , author}= quote;
    return (
        <div>
            <h1> Quote Generator</h1>
            <div className="data">
            <h4> {content}</h4>
            <br/>
            <h6>Author : {author} </h6>
            <br/>
            <button className="btn" type="submit" onClick = {() => getQuote() }>New Quote</button>
            </div>
            
        </div>
    )
}

export default Quote
