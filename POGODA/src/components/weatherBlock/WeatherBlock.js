import React from 'react';
import s from './WeatherBlock.module.css';
import Map from '../map/Map';

const WeatherBlock = ({temp_c, iconUrl, text, latitude, longitude, country, cityName, getInfo}) => (
   <div className={s.WeatherBlock}>
      <div className={s.map}><Map 
      getInfo={getInfo}
      latitude={latitude}
      longitude={longitude}
      cityName={cityName}
      country={country}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEV5hm-_7AqHTdPCrmjbFLY1bQkvEGpK0"
      loadingElement={<div style={{ boxShadow: '3px 3px 19px -6px rgba(0,0,0,0.75)', borderRadius: "50%", height: `100%` }} />}
      containerElement={<div style={{  boxShadow: '3px 3px 19px -6px rgba(0,0,0,0.75)', borderRadius: "50%", height: `20.5rem` }} />}
      mapElement={<div style={{ boxShadow: '3px 3px 19px -6px rgba(0,0,0,0.75)', borderRadius: "50%", height: `100%` }} />}
     
      /></div>
      <div className={s.weather}>
      <img src={iconUrl} alt="icon" className={s.icon}/>
      <p className={s.text}>{text}</p>
      <p className={s.temp}>{temp_c}<span className={s.celsius}>℃</span></p>
      </div>
   </div>
)

export default WeatherBlock;