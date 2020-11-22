import React, { useState, useEffect } from 'react';

import twitterIcon from '../twitter.svg';
import tumblrIcon from '../tumblr.svg';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/Legedith/f781f80d06960fdf9d516c776bae8824/raw/350a7c76c01a3652d2b112b70a28fd33930d9723/kindness.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.kindness;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.kind);
        setAuthor(randomQuote.author);
      })
  }

  const handleClick = () => {
    getQuote();
  }

  return (
    <div id="quote-box">
      <div id="text"><p>{quote}</p></div>
      <div id="author"><p>{author}</p></div>

      <div id="buttons">
        <div className="social-media">
          <a href="#" id="twet-quote">
            <span><img src={twitterIcon} alt="" /></span>
          </a>
          <a href="#" id="tumlr-quote">
            <span><img src={tumblrIcon} alt="" /></span>
          </a>
        </div>
        <button onClick={handleClick} id="new-quote">New Act of Kindness</button>
      </div>
    </div>
  )
}

export default Quotes;