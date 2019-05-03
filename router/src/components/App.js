import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from '../pages/About.js';
import Home from '../pages/Home.js';
import NotFound from '../pages/NotFound.js';
import Contact from '../pages/Contact.js';
import Nav from './Nav';
import Articles from '../pages/Articles';
import ItemPage from '../pages/ItemPage';
import s from './App.module.css';


const App = () => (
<div>
  
    <Nav className = {s.app}/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/articles/:id' component={ItemPage}/>      
      <Route  path='/articles' component={Articles}/>  
      <Route  path='/about' component={About}/>
      <Route  path='/contact' component={Contact}/>
      <Route component={NotFound}/>
      {/* <Redirect to='/articles'/> */}
    </Switch>
  
</div>
);
export default App;
 

