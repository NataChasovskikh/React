import React from 'react';
import Button from './Button';
import s from './UserMenu.module.css';

const UserMenu = ({
   image = 'https://dansezza.ru/images/thumb/venecianskaya-maska-volto-volto-ruchnaya-rabota-zhenskaya-86550000.jpg',
   name = 'Nelsen Norman',
   onSingOut = () => null
}) => (
   <section>
      <img className = {s.avatar} src = {image} alt = 'avatar' width = '60' />
      <span className = {s.name}>{name}</span>
      <Button label = 'sing out' onClick = {onSingOut} castomClassName = {s.button}/>
   </section>
)

export default UserMenu;