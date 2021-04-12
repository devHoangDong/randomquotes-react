import React from 'react';
import './App.scss';
import Dich from './components/Dich';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  
  const [ responseData, setResponseData ] = useState([]);
  const [ author, setAuthor ] = useState('');
  const [ clear, setClear ] = useState(null);
    
    function fetchapi() {
      fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(response => {
          const data = response;
          const rd = Math.floor(Math.random() * (data.length + 1));
           if (data[rd].author === null) {
             setAuthor("Khuyết danh");
           } else { setAuthor('__' + data[rd].author + '__')};
          setResponseData(data[rd].text);
        })
        .catch((error) => {
          console.log(error)
        })}
  useEffect(fetchapi,[]);
  useEffect(() => {
    return setClear(true);
  })
    
// facebook button
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v8.0&appId=522995571786911&autoLogAppEvents=1";
    script.async = true;
    document.body.appendChild(script);
// twitter button 
    const href_twitter = 'https://twitter.com/intent/tweet?text=' + responseData + "\n" + author;

      return (
        <div>
          <div className="body-container">
            <div className="body-title">
              <h2>Random Quotes</h2>
            </div>
            <div className="getquote">
              <button className="getquote-button" onClick={fetchapi}>New quote</button>
            </div>
            <div className="quote-container">
              <div className="quote">"{responseData}"</div>
              <div className="author">{author}</div>
              {
              clear
              && <Dich quote={responseData} clear={clear} />
              }
              {/* add facebook and twitter share button */}
              <div className="share">
                <button className="share-button">
                  <a className="twitter-share-button" href={href_twitter} data-size="large">
                    <i className="fa fa-twitter" aria-hidden="true"></i>&nbsp;Tweet</a>
                </button>
                <div className="fb-share-button" data-href="#" data-layout="button" data-size="large"><a target="_blank" rel="noopener noreferrer"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvoz.vn%2Ff%2Fdiem-bao.33%2F&amp;src=sdkpreparse"
                  className="fb-xfbml-parse-ignore">Chia sẻ</a></div>
              </div>
            </div>
          </div>
          <div id="fb-root"></div>
        </div>
      )
    }

export default App;