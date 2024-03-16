import CurrentWeather from "./Components/current-weather/current-weather";

export const geoApiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key":'11f5ee3d67mshfa64d23b76325e4p190296jsn016317a3695f', 
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
  export const WEATHER_API_KEY = "2778126076a8db48d5929cd279042a34";



