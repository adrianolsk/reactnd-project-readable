import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostForm from "./pages/post-form/PostForm";
import PostDetail from "./pages/post-detail/PostDetail";

/*
* todo: Validate forms
* todo: Show confirmation on delete post/comments
* todo: edit a post
* todo: edit a comment
*/
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div className="content">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/new' component={PostForm}/>
                        <Route exact path='/edit/:id' component={PostForm}/>
                        <Route exact path='/:category/:id' component={PostDetail}/>
                        <Route exact path='/:category' component={Home}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
