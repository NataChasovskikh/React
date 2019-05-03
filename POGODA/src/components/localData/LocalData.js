import React from 'react';
import s from './LocalData.module.css';

const LocalData = ({cityName}) => (
   <div className = {s.block}>
   <p>{cityName}</p>
   <p>data</p>
   <p>time</p>
   </div>
)

export default LocalData;