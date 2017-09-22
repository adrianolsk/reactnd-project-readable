import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import * as API from './util/api';
import moment from 'moment';
class PageList extends Component {

  constructor(){
    super();
    this.state = { 
      posts: [
        {
          title: "React + Redux",
          author: "Adriano Skroch",
          date: new Date(),
          category: "Redux", 
          score: 10
        },
        {
          title: "React Fundamentals",
          author: "Nick Bic",
          date: new Date(),
          category: "React",
          score: 3
        }
      ]
    };
  }

  componentDidMount(){    

    API.getAllPosts().then(posts=>{     
      this.setState({
        posts
      });
    });

  }

  render() {
    const {category} = this.props.match.params
    let {posts } = this.state;
    debugger;
    return (
      <div className="content-list">    
     
        <ListHeader category={category}/>    
       {posts.map(post => (   <CardPost key={post.title} post={post}></CardPost>))}
          
      </div>
    )}
}

class CardPost extends Component {  

  render() {
    let {title, author, timestamp, category, score} = this.props.post;
    return (
        <div className="content-card">
          <div className="card-score">{score}</div>
          
          <div className="card-detail">
            <h3>{title}</h3>
            <div className="card-author"> <i>by  {author}</i>   </div>
            <div className="card-date">{moment(timestamp).format('D MMM YYYY, h:mma')}</div>
            <div className="card-category">{category}</div>
          </div>          
        </div>
    );
  }
}

class ListHeader extends Component {
  render() {
    let {category} = this.props;
    return (
      <div className="content-header">
      <h2>{category || "All"}</h2>
      <div className="content-actions">
        <button>Sort by Date</button>
        <button>Sort By Score</button>
        <button>New Post</button>
      </div>
    </div>
    );
  }
}

class Header extends Component {
  // todo: lookup how to redirect to page without refreshing the page
  constructor(){
    super();
    this.state = {
      categories: []
    }
  }
  componentDidMount(){
    API.getCategories().then(categories=>{
      debugger
      this.setState({
        categories: categories
      });
    });
  }
  render() {

    const  {categories} = this.state;
    return(<header>
      <ul>
        <li>
          <Link to="/" >All</Link> 
        </li>
        {categories.map(item=>(
          <li key={item.path}>
          <Link to={"/"+item.path}>{item.name}</Link>         
        </li>
        ))}              
      </ul>
    </header>);
  }}

class Footer extends Component {
  render() {
    return(  <footer>footer</footer>);
}}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>  
        <div className="content"> 
          <Switch>
            <Route exact path='/' component={PageList} />         
            <Route exact path='/:category' component={PageList} />        
          </Switch>         
        </div>
      <Footer/>
      </div>
    );
  }
}

export default App;
