import React from 'react';
import { Link } from 'react-router-dom';


const ArticleList = ({articles, match, location}) => (
   <ul>
      {articles.map(article => (
         <li key = {article.id}>
            <Link to = {{
               pathname: `${match.url}/${article.id}`,
               state: {from: location}
               }}>
               {article.title}</Link>
         </li>
         ))        
      }
   </ul>
);

export default ArticleList;
