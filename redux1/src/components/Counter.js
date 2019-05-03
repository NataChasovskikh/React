import React from 'react';
import {connect} from 'react-redux';
import {increment,decrement,reset} from '../redux/counterAction';


const Counter = ({value, increment, decrement,reset}) => (
   <div>
      <h1>{value}</h1>
      <div>
         <button onClick={()=>increment(5)}>increment</button>
         <button onClick={()=>decrement(1)}>decrement</button>
         <button onClick={()=>reset()}>reset</button>
      </div>
   </div>
);

const mapStateToProps = (state) => ({
   value: state.counterValue
})

const mapDispatchToProps = {increment, decrement,reset};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);