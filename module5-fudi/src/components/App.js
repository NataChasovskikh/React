import React from 'react';
import '../App.css';
import AppHeader from './appHeader/AppHeader.js';
import MenuPage from './menu/MenuPage';

const App = () => (
  <div>
    <AppHeader/>
    <MenuPage/>
    <About/>
    <Account/>
    <Auth/>
    <Contact/>
    <Delivery/>
    <Favorites/>
  </div>
)


export default App;
