import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';

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

  render() {
    const {category} = this.props.match.params
    let {posts} = this.state;
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
    let {title, author, date, category, score} = this.props.post;
    return (
        <div className="content-card">
          <div className="card-score">{score}</div>
          
          <div className="card-detail">
            <h3>{title}</h3>
            <div className="card-author"> <i>by  {author}</i>   </div>
            <div className="card-date">{date.toString()}</div>
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
  render() {
    return(<header>
      <ul>
      <li>
          <a href="/">All</a>
        </li>
        <li>
          <a href="/react">React</a>
        </li>
        <li>
          <a href="/redux">Redux</a>
        </li>
        <li>
          <a href="/udacity">Udacity</a>
        </li>
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
