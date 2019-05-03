import React, {Fragment} from 'react';
import Menu from '../menu/Menu';
import Img from '../img.js'

const Header = ({src}) => {
  const menuItem = [
    {id:1 , name: 'price' },
    {id:2 , name: 'about us' },
    {id:3 , name: 'contacts' },
  ];


  return(
    <Fragment>
      <h1>
        <a href="#">
          <Img src={src}/>
        </a>
      </h1>
      {menuItem.length>0
        ? <Menu items={menuItem}/>
        : <Img src='https://cdn.shopifycloud.com/hatchful-web/assets/313d73fa42f04a46213abc6267b4d074.png'/>}
    </Fragment>
  )
};

export default Header;