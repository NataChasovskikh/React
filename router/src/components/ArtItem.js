import React from 'react';


const ArtItem = ({title, imageUrl, author, category, body, onClick}) => (
   <article>
      <h2>{title}</h2>
      <img src = {imageUrl} alt = {title}/>
      <p>Author: {author}</p>
      <p>Category: {category}</p>
      <p>{body}</p>
      <button onClick={onClick}>back to articles</button>
   </article>
);

export default ArtItem;