import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';


Dich.propTypes = {
     ketqua: PropTypes.string,
     quote: PropTypes.string,
}
Dich.defaultProps = {
     ketqua: '',
     quote: '',
}

function Dich(props) {
    const { quote, clear } = props;
    const [ ketqua, setKetqua ] = useState('');

    function handleChange() {
         const api = `https://api.mymemory.translated.net/get?q=${quote}&langpair=en|vi`;
           fetch(api)
          .then(response => response.json())
          .then(response => {
            const kq = response.responseData.translatedText;
            setKetqua(kq);
            console.log(kq);
          })
          .catch((error) => {
              console.log(error)
            })
    }
    function resettrans() {
        setKetqua('');
        console.log(clear)
     }
     useEffect(resettrans,[quote])

  return (
            <div>
                <button className="trans-button" onClick={handleChange}>Translate</button>
                <div className="quote-tran">{ketqua}</div>
            </div>
            )
}
export default Dich;