import React from 'react';
import style from './Input.module.css';

const Input = ({getInput}) => (
   <form onSubmit={getInput}>
   <div className={style.inputBox}>
   <input
      type = 'text'
      placeholder = 'enter city'
      name='city'
      className = {style.input}
   >
   </input>
   <button type = 'submit'className={style.submit}>submit</button>
   </div>
   </form>
)

export default Input;