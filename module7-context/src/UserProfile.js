import React from 'react';
import {AuthContext} from './context/AuthContext.js';


const UserProfile = () => (
   <AuthContext.Consumer>{

      ({user: { image, name, email, phone }}) => (

   <section>
      <img src = {image} alt = 'user' width = '240'/>
      <ul>
         <li>name: {name}</li>
         <li>email: {email}</li>
         <li>phone: {phone}</li>

      </ul>
   </section>
   )
   }
   </AuthContext.Consumer>
)



export default UserProfile;