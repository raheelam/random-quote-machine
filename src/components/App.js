import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () =>{
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const getQuote = () =>{
        const response = axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
        response.then((resp)=>{
             console.log(resp.data.quotes);
             let quotes = [...resp.data.quotes];
             let rando = Math.floor(Math.random() * quotes.length);
             setQuote(quotes[rando].quote);
             setAuthor(quotes[rando].author);
    });
}

    useEffect(()=>{
        getQuote();
       },[]);
    
    
    return(
        <div className="bg-gray-100 p-5 w-2/4 sm:w-2/4 m-auto my-9" id="quote-box">
            <blockquote>
                <p className="text-center text-2xl" id="text"><span className="text-7xl">&quot;</span>{quote}</p>
            </blockquote>
            <p className="text-right" id="author">- {author}</p>
            <button className="border-2 px-7 py-3 inline-block text-right hover: bg-gray-300 " onClick={getQuote} id="new-quote">New Quote</button>
            <a className="mx-4" href="#!">tweet quote</a>
        </div>
    );
}

export default App;