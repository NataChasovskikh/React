import React, { Component } from 'react';
import queryString from 'query-string';
import * as api from '../api-mock/api';
import ArticleList from '../components/ArticleList';
import categories from '../api-mock/categories';
import CategorySelector from '../components/CategorySelector';


const getCategoryFromProps = (props) => queryString.parse(props.location.search).category;


export default class Articles extends Component {
   state = {
      art: []
   };

   componentDidMount(){
      const category = getCategoryFromProps(this.props);

      if(!category){
         this.props.history.replace({
            pathname: this.props.location.pathname,
            search: 'category=all' 
         });
         return;
      }

      api.fetchArticlesByCategory(category).then(articles => this.setState({art: articles}));
   }

   componentDidUpdate(prevProps){
      const prevCategory = getCategoryFromProps(prevProps);
      const nextCategory = getCategoryFromProps(this.props);

      if (prevCategory === nextCategory) return;

      api.fetchArticlesByCategory(nextCategory).then(articles => this.setState({art: articles}));

   }

   handleCategoryChange = (category) => {
      this.props.history.push ({
         pathname: this.props.location.pathname,
         search: `category=${category}` 
      })
   };

   render() {
      const {art} = this.state;
      const { match } = this.props;
      const {search}=this.props.location;
      const currentCategory = getCategoryFromProps(this.props);


     return (
       <div>
         <h2>Articles Page</h2>
         <CategorySelector 
            options = {categories}
            value = {currentCategory}
            onChange = {this.handleCategoryChange}
         />
         <ArticleList articles = {art} match = {match} location={search}/>
       </div>
     )
   }
};
