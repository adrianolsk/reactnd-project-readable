import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header";


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
