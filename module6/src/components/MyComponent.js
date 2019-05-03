import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

const defaultStyle = {
   width: 400,
   height: 400,
   backgroundColor: '#009688',
   opacity: 0,
   transition: 'opacity 2500ms easy-in-out',
   margin: '0 auto'
};

const transitionStyles = {
   entering: { opacity: 0 },
   entered: { opacity: 1 }
};

export default class MyComponent extends Component {
   state =  {
      visible: false
   };

   toggle = () => {
      this.setState( prevState => ({visible: !prevState.visible}));
   }

   render() {
      const { visible } = this.state;
     return (
       <div>
          <button onClick = {this.toggle}>toggle</button>
          <Transition in = {visible} timeout = {{appear: 1500, enter: 2300, exit: 2500,}} unmountOnExit>
            {
               (state) => (
                  <div>
                     <h1>current state {state}</h1>
                     <div 
                        style = {{
                           ...defaultStyle,
                           ...transitionStyles[state]
                        }}
                     />
                  </div>
               )
            }

            

          </Transition>
       </div>
     )
   }

   
}