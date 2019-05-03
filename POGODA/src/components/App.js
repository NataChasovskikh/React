import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Input from './input/Input';
import LocalData from './localData/LocalData';
import WeatherBlock from './weatherBlock/WeatherBlock';
import WeatherDays from './weatherDays/WeatherDays';
import './App.css';
import { url } from 'inspector';


const WEATHERKEY = '54faf0bd8e7248e7a8a84004192204';
const IMGKEY = '12292096-2cbf044d534d88e5a8a996c19';

class App extends Component {
  state = {
    isLoading: true,
    cityName: "Kiev",
    numForecastDay: 5,
    latitude: 50.5,
    longitude: 30.3,
    country: 'Ukraine'    
  };

  getInfoMapClick = (event) => {
    let latitude = event.latLng.lat();
    let longitude = event.latLng.lng();
    console.log(latitude,longitude);
    const {numForecastDay} = this.state;
    const URL = `http://api.apixu.com/v1/forecast.json?key=${WEATHERKEY}&q=${latitude},${longitude}&days=${numForecastDay}`;
    axios.get(URL)
    .then(response=>{
      return response.data;
    })
    .then( data =>{ console.log(data)
      this.setState({
        isLoading: false,
        cityName: data.location.name,
        latitude: data.location.lat,
        longitude: data.location.lon,
        country: data.location.country, 
        temp_c: data.current.temp_c,
        text: data.current.condition.text,
        iconUrl: data.current.condition.icon,
        forecastDays: data.forecast.forecastday
      });
      console.log(data.forecast.forecastday)
    })
    .catch(err => {
      if (err) console.error("Cannot fetch Weather Data from API", err);
    })
  }
  
  searchImg(){
    const {cityName} = this.state;    
    const URL = `https://pixabay.com/api/?key=${IMGKEY}&q=${cityName}`;
    console.log(URL)
    axios.get(URL)
    .then(response=>{
      return response.data;
    })
    .then( data =>{ console.log(data)
      this.setState({
        bgImg: data.hits[0].largeImageURL 
      });
      console.log(data.forecast.forecastday)
    })
    .catch(err => {
      if (err) console.error("Cannot fetch Weather Data from API", err);
    })
  }
  
  updateWeather(){
    const {cityName, numForecastDay}= this.state;
    const URL = `http://api.apixu.com/v1/forecast.json?key=${WEATHERKEY}&q=${cityName}&days=${numForecastDay}`;
    axios.get(URL)
    .then(response=>{
      return response.data;
    })
    .then( data =>{ console.log(data)
      this.setState({
        isLoading: false,
        latitude: data.location.lat,
        longitude: data.location.lon,
        country: data.location.country, 
        temp_c: data.current.temp_c,
        text: data.current.condition.text,
        iconUrl: data.current.condition.icon,
        forecastDays: data.forecast.forecastday
      });
      console.log(data.forecast.forecastday)
    })
    .catch(err => {
      if (err) console.error("Cannot fetch Weather Data from API", err);
    })
    
  }
  
  componentDidMount(){
    this.updateWeather();
    this.searchImg();
  }

  cityNameUpdate = (element) => {
    element.preventDefault();
    console.log(element.target.city.value);
    this.setState ({
      cityName: element.target.city.value
    },
    () => this.updateWeather()
    );
    element.target.city.value="";
  };
  
  render() {
    const {cityName, isLoading, temp_c, text, iconUrl, forecastDays, latitude, longitude, country, bgImg} = this.state;
    return (
    <div className="App">
      {isLoading ? (
        <div className="wrapp">
          <div className="wrappLoader">
          <Loader 
            type="Puff"
            color="#00BFFF"
            height="100"	
            width="100"
            />   
          </div>
        </div>
      ) : (
      <div style={{backgroundImage: `url(${bgImg})`}}>
      <div className = 'section'>
        <Input getInput={this.cityNameUpdate}/>
        <LocalData cityName={cityName}/>
      </div>
      <div className = 'smallsection'>
        <WeatherBlock temp_c={temp_c} iconUrl={iconUrl} text={text} latitude={latitude} longitude={longitude} country={country} cityName={cityName} getInfo={this.getInfoMapClick}/>
        <WeatherDays forecast={forecastDays} />
      </div>
      </div>)
      }
      </div>    
    )
  }
  
}

export default App;

// import React, { Component } from 'react';
// import axios from 'axios';
// import Loader from 'react-loader-spinner';



// import Main from './Component/Main'

// // import KEyS from '../api.env'

// import s from './App.module.css';

// const WEATHER_KEY = '9ca2fed0b1af4e34ac883452192204';


// class App extends Component {
//  state = {
//    isLoading: true,
//    city: 'Ternopil',
//    numForecastDay: 5,
//  }
//  getInfoMapClick = (e) => {
//    let lat = e.latLng.lat()
//    let lng = e.latLng.lng()
//  }
//  updateWeather() {
//    const {city, numForecastDay} = this.state;
//    const URL = `http://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${city}&q=${numForecastDay}`
//    axios.get(URL)
//    .then(res => {return res.data;})
//    .then(data => {
//      this.setState({
//        isLoading: false,
//        temp_c: data.current.temp_c,
//        text: data.current.condition.icon,
//        forecastDays: data.forecast.forecastday[0],
//        astro:data.forecast.forecastday[0].astro,
//        city: data.location.name,
//        text_today: data.current.condition.text,
//        updated: data.current.last_updated,
//        humidity: data.current.humidity,
//        minT: data.forecast.forecastday[0].day.mintemp_c,
//        maxT:data.forecast.forecastday[0].day.maxtemp_c,
//        sunrise: data.forecast.forecastday[0].astro.sunrise,
//        sunset: data.forecast.forecastday[0].astro.sunset,
//        wind: (data.forecast.forecastday[0].day.avgvis_km*(5/18)).toFixed(2)
//      })
//      console.log(data.current.pressure_mb);
//    })
//    .catch(err=>{
//      if(err) console.error('Cannot get weather from data to api')
//    })
//  }
//  componentDidMount() {
//    this.updateWeather();
//  }
//  cityNameUpdate = e => {
//    e.preventDefault();
//    this.setState({
//      city:e.target.city.value
//    }, ()=>
//    this.updateWeather());
//  };
//  render() {
//    const {city, isLoading, temp_c, text, text_today, updated, humidity, minT, maxT, sunrise, sunset, wind, getInfo, lat, lng, country} = this.state;
//    return (
//      <>
//      {isLoading ? (<div className={s.Appheader}>
//        <div>
//          <Loader type='Circles' color='green' heigth='200' width='200' />
//        </div>
//        </div>):
//  <Main city={city} src={text} temp={temp_c} today={text_today} updated={updated} getInput={this.cityNameUpdate} humidity={humidity} minT={minT} maxT={maxT} sunrise={sunrise} sunset={sunset} wind={wind} />}
//      </>
//    );
//  }
// }

// export default App;
