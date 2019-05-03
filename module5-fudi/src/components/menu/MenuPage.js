import React, { Component, Fragment } from 'react';
import * as API from '../../services/api';
import MenuGrid from './MenuGrit';
import style from './MenuPage.module.css';


export default class MenuPage extends Component {
   state = {
      menu: []
   }

   componentDidMount(){
      API.getAll().then (menu => {
         this.setState ({menu});
      })
   }

   handleDelItem = (id) => {
      API.delById(id).then(isOK => {
         if (!isOK) return;
         this.setState(prevState => ({
            menu: prevState.menu.filter(item => item.id !== id)
         }));
      });
   };

   handleShowMore = (id) => {
      API.getById(id).then(item => {console.log(item)})
   };

   handleAddItem = () => {
      const item = {
         name: 'new dish',
         price: Math.random(),
         image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640",
      };

      API.addItem(item).then(newItem => {
         this.setState(prevState => ({
            menu: [newItem, ...prevState.menu]
         }))
      })

   }

   render() {
      const {menu} = this.state;
   
      return(
        <div>
          <button type="button" onClick={this.handleAddItem} className = {style.btn}>Добавить меню</button>
          <MenuGrid items={menu} onDelete={this.handleDelItem} onShowMore={this.handleShowMore}/>
   
        </div>
   
      )
    }
}

{/* render() {
   const {menu} = this.state;

   return(
     <div>
       <button type=“button” onClick={this.handleAddItem}>Добавить элемент меню</button>
       <MenuGrid items={menu} onDelete={this.handleDelItem} onShowMore={this.handleShowMore}/>

     </div>

   )
 } */}


