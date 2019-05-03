import React, { Component } from 'react';
import axios from 'axios';
import ArticleList from './ArticleList';
import Spinner from './Spinner';
// import './App.css';

const API = 'https://hn.algolia.com/api/v1/search?query=react';

const mapper = (articles) => {
  return articles.map(({objectID, title, url}) => ({
    id: objectID,
    link: url,
    name: title
  }));
}

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null
  };

  componentDidMount(){

    this.setState({isLoading: true})

    axios.get(API)
      .then (response =>
        this.setState({articles: mapper(response.data.hits), isLoading: false})
     )
     .catch(error => this.setState ({ error, isLoading: false}))
  };

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <div className="App">
       <p>hello</p> 
       {error &&  <p>{error.message}</p>}
       { isLoading ? <Spinner/> : <ArticleList articles = {articles}/>}
      </div>
    );
  }
}

export default App;
