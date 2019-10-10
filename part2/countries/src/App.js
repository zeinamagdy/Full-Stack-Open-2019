import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [result, setResult] = useState([]);

  const handelSearch = (event) => {
    console.log(event.target.value);
    let searchKeyWord = event.target.value.toLowerCase();
    if (searchKeyWord.length > 0) {
      let data = countries.filter((country) => country.name.toLowerCase().includes(searchKeyWord));
      console.log('result', data);
      setResult(data);
    } else {
      setResult([]);
    }
  }

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled', response.data);
        setCountries(response.data)
      })
  }
  useEffect(hook, []);
  return (
    <div>
      <div>
        <span>find countries</span>
        <input type="text" onChange={handelSearch}></input>
      </div>
      <div>
        {result.length > 10 ?
          <span>Too many matches, specify anthor fliter</span>
          : result.length === 1 ?
            <div>
              <h1>{result[0].name}</h1>
              <table>
                <tr>
                  <td>capital {result[0].capital}</td>
                </tr>
                <tr>
                  <td>population {result[0].population}</td>
                </tr>
              </table>
              <h3>Languages</h3>
              <ul>
                {result[0].languages.map((lang) => <li key={lang.name}>
                  {lang.name}
                </li>)}
              </ul>
              <div>
                <img src={result[0].flag} alt="flag" className='flag' />
              </div>
            </div>
            : <ul>
              {result.map((c) =>
                <li key={c.name}>
                  {c.name}
                </li>)}
            </ul>
        }
        <ul>

        </ul>
      </div>

    </div>
  );
}

export default App;
