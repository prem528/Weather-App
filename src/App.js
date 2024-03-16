import './App.css';
import Search from './Components/search/search';
import Forecast from './Components/forecast/forecast';
import CurrentWeather from './Components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';
import Navbar from './Components/Navbar/navbar';

 
function App() {

  const [currentWeather, setCurrentWeather ] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] =searchData.value.split("");

    const currentWeatherfetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const  forecastfetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

     Promise.all([currentWeatherfetch, forecastfetch])
     .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label,...weatherResponse});
      setForecast({city: searchData.label, ...forecastResponse});
     })
     .catch((err) => console.log(err));

  }

  console.log(currentWeather)
  console.log(forecast)
  return (
   
    <div className="container">
      < Navbar />
      <Search  onSearchChange={handleOnSearchChange}/> 
     {currentWeather && <CurrentWeather data={currentWeather}  /> }
     {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
