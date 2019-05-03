import React from 'react';
import MenuCard from './MenuCard.js';
import s from './MenuGrit.module.css';


const MenuGrid = ({ items, onDelete, onShowMore }) => (
   <ul className = {s.menu}>
      {items.map(item =>(
         <li key = {item.id} className = {s.card}>
            <MenuCard
            name = {item.name}
            price = {item.price}
            image = {item.image}
            onShowMore = {() => onShowMore(item.id)}
            onDelete = {() => onDelete(item.id)}
            />
         </li>
      ))}
   </ul>
);

export default MenuGrid;