import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';

import moment from 'moment';
import Home from "./pages/Home";
import Header from "./components/Header";
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
            <Route exact path='/' component={Home} />
            <Route exact path='/:category' component={Home} />
          </Switch>         
        </div>
      <Footer/>
      </div>
    );
  }
}

export default App;
