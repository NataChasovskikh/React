import React from 'react';

const Avatar = ({image = '', width = 60, height = 60}) => (
   <img src = {image} alt = 'logo' width = {width} height = {height}/>
)


export default Avatar;