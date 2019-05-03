import React, { Component, createRef } from 'react';
import DropDown from './dropDown/DropDown.js';
import Avatar from '../avatar/Avatar';
import s from './UserMenu.module.css';



export default class UserMenu extends Component {

   containerRef = createRef();

   state = {
      isDropDownOpen: false
   };

   openDropDown = () => {
      this.setState ({isDropDownOpen: true})
   }

   closeDropDown = () => {
      this.setState ({isDropDownOpen: false})
   }

   componentDidMount(){
      window.addEventListener('click', this.handleWindowClick);
   }

   shouldComponentUpdate(nextProps, nextState){
      const {isDropDownOpen} = this.state;
      return nextState.isDropDownOpen !== isDropDownOpen;
   }

   componentWillUnmount(){
      window.removeEventListener ('click', this.handleWindowClick)
   }

   handleWindowClick = (event) => {
      const isInsideContainer = this.containerRef.current.contains(event.target);
      console.log(event);
      const {isDropDownOpen} = this.state;
      if (isDropDownOpen && !isInsideContainer) {
         this.closeDropDown();
      };   
   };

   
   
   render() {
      // console.log('render');
      const {isDropDownOpen} = this.state;
      const {name, avatar} = this.props;

     return (
       <div className = {s.container} onClick = {this.openDropDown} ref = {this.containerRef}>
         <Avatar image = {avatar}/>
         <span className = {s.name}>{name}</span>
         {isDropDownOpen && <DropDown/>}
       </div>
     )
   }
}