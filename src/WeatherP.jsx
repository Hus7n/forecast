import React, { useState } from 'react'

const api = {
  key: "145f629a9593e62fd5861145c0dcfaed",
  base: "https://api.openweathermap.org/data/2.5/",
};
export default function WeatherP() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState("");
  const [weatherDetailsFetched, setWeatherDetailsFetched] = useState(false);
  
  const SearchB = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setWeatherDetailsFetched(true);
        console.log(result);
      });
  }


  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <h1>Weather</h1>
        </header>

        <input type="text" placeholder='Search'
          onChange={(e) => setSearch(e.target.value)} />
        <button onClick={SearchB}>Search</button>
        
        {weatherDetailsFetched &&
          <>
            <p>{weather.name}</p>

            <h4>Temprature</h4>
            <p>{weather.main?.temp}</p>

            <h4>Description</h4>
            <p>{weather.weather[0].main}</p>
            <p>{weather.weather[0].description}</p>
          </>
        }
      </div>
    </>
  )
}
