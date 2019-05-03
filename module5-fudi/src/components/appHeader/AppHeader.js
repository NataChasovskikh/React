import React from 'react';
import logo from './assets/logo.png';
import avatar from './assets/no_user.png';
import s from './AppHeader.module.css';
import Logo from '../logo/Logo.js';
import Avatar from '../avatar/Avatar';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu.js';

const navItems = ['menu', 'about', 'conact', 'delivery'];


const AppHeader = () => (
   <header className = {s.header}>
   <div className = {s.logo}>
   <Logo image = {logo}/>
   {/* <Avatar image = {avatar}/> */}
   </div>
   <Navigation items = {navItems}/>
   <div className={s.usermenu}>
      <UserMenu avatar = {avatar} name = 'Michael Jackson'/>
   </div>
   </header>
)

export default AppHeader;