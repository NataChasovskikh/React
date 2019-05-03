import React, { Fragment } from 'react';
// import logo from '../logo.svg';
import './App.css';
// import Img from './/img.js';

import Header from './header/Header.js';
import Dishes from './dishes/Dishes';
import DishesList from './dishes/DishesList';
import db from './dishes/assets/menu.json'

const App = () => (
  <Fragment>
    <Header src={'https://www.seoclerk.com/pics/551103-1TOqFD1502285018.jpg'}/>
    <Dishes title="Dishes-title">
      <DishesList db={db}/>
    </Dishes>

  </Fragment>
);

export default App;
