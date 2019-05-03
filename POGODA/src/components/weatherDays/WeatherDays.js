import React from 'react';
import s from './WeatherDays.module.css';

const WeatherDays = ({forecast}) => (
   
   
   <ul className={s.daysBox}>
      {forecast.map(el => (
         <li className={s.box}>
            <img src={el.day.condition.icon} alt="icon" className={s.icon} />
            <p className={s.text}> {el.day.avgtemp_c}<span className={s.celsius}>℃</span></p>
            <p className={s.text}>влажность: {el.day.avghumidity}</p>
            <p className={s.text}>ветер: {el.day.avgvis_km}m/sec</p>
         </li>
      ))}
   </ul>
  
)

export default WeatherDays;


// <li className={s.box}> 
//    <img src={iconUrl} alt="icon" className={s.icon}/>
//    <p className={s.temp}>{forecastDays}</p>
// </li>
// <li className={s.box}> 
//    <img src={iconUrl} alt="icon" className={s.icon}/>
//    <p className={s.temp}>{forecastDays}</p>
// </li>
// <li className={s.box}> 
//    <img src={iconUrl} alt="icon" className={s.icon}/>
//    <p className={s.temp}>{forecastDays}</p>
// </li>
// <li className={s.box}> 
//    <img src={iconUrl} alt="icon" className={s.icon}/>
//    <p className={s.temp}>{forecastDays}</p>
// </li>
// <li className={s.box}> 
//    <img src={iconUrl} alt="icon" className={s.icon}/>
//    <p className={s.temp}>{forecastDays}</p>
// </li>