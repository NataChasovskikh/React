import React from "react";
import style from "./Img.module.css"

const Img = ({src}) => (
   <img className = {style.picture} src = {src} alt = "pic"/>
);

export default Img;