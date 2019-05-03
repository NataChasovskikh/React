import React, { Component, Fragment } from 'react';
import style from "./Togles.module.css";

export default class Toggle extends Component{
   state = {on: false};

   handleToggle = () => {
      this.setState(prevState => ({on: !prevState.on}))
   }

   render() {
      const { on } = this.state;
      const { children } = this.props;

      return(
         <Fragment>
         <button className = {style.btn} onClick = {this.handleToggle}>ORDER</button>
         { on && children }
         {/* <Form/> */}
         </Fragment>

      )
   }
}