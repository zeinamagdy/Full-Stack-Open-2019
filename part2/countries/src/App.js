import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './Components/Country';
import CountryInfo from './Components/CountryInfo';
import Filter from './Components/Filter'
import './App.css';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [result, setResult] = useState([]);
  const [weather, setWeather] = useState({});

  const handelSearch = (event) => {
    let searchKeyWord = event.target.value.toLowerCase();
    search(searchKeyWord)
  }

  const search = (searchKeyWord) => {
    if (searchKeyWord.length > 0) {
      let data = countries.filter((country) => country.name.toLowerCase().includes(searchKeyWord));
      setResult(data);
    } else {
      setResult([]);
    }
  }

  const showCountry = (name) => {
    console.log('show', name)
    search(name.toLowerCase())
    // setShowInfo(true);
  }
  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(hook, []);

  useEffect(() => {
    if (result.length === 1) {
      const params = {
        access_key: '95e034781f22483d5326802f83e9a6f6',
        query: `${result[0].name}`
      }
      axios.get('http://api.weatherstack.com/current', { params })
        .then(response => {
          const apiResponse = response.data;
          setWeather(apiResponse);
        }).catch(error => {
          console.log(error);
        });
    }
  }, [result]);

  return (
    <div>
      <Filter onSearch={handelSearch} />
      <div>
        {result.length > 10 ?
          <span>Too many matches, specify anthor fliter</span>
          : result.length === 1 ?
            <div>
              <CountryInfo info={result[0]} weather={weather} />
            </div>
            : <ul>
              <Country countries={result} onShow={showCountry} />
            </ul>
        }
        <ul>

        </ul>
      </div>

    </div>
  );
}

export default App;
