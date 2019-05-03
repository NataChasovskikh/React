import React from 'react';


const Menu = ({items}) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.name}</li>
    ))
    }
  </ul>
);


export default Menu;

