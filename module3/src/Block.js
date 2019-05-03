import React, { Fragment } from "react";
import Btn from "./Btn.js";
import style from "./Block.module.css"



const Block = ({item}) => (
   <Fragment>
      <p>{item.smalltitle}</p>
      <h2>{item.title}</h2>
      <p>{item.text}</p>
      <p>{item.price}</p>
   </Fragment>
)

export default Block;