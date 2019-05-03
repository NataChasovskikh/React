import React from 'react';
import s from './Navigation.module.css';

const Navigation  = ({items}) => (
   <ul className = {s.list}>
      {items.map((el) => (
         <li key = {el}>
            <a href = '#' className = {s.link}>{el}</a>
         </li>
      ))}
   </ul>
);

export default Navigation;

