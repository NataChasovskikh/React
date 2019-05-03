import React from 'react';
import s from './MenuCard.module.css';


const MenuCard = ({name, image, price, onDelete, onShowMore }) => (
   <div className = {s.block}>
      <img src = {image} alt = {name} className={s.picture}/>
      <p className={s.title}>{name}</p>
      <p className={s.price}>Price: {price} £ </p>
      <button type = 'button' onClick = {onDelete} className={s.btn}>del</button>
      <button type = 'button' onClick = {onShowMore} className={s.btn}>show</button>
   </div>
);
export default MenuCard;