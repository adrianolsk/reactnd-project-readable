import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostForm from "./pages/post-form/PostForm";
import PostDetail from "./pages/post-detail/PostDetail";


class App extends Component {
    render() {
        return ([
            <Header key="header"/>,
            <div className="main" key="main">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/new' component={PostForm}/>
                        <Route exact path='/edit/:id' component={PostForm}/>
                        <Route exact path='/:category/:id' component={PostDetail}/>
                        <Route exact path='/:category' component={Home}/>
                    </Switch>
                </div>,
            <Footer key="footer"/>
        ]);
    }
}

export default App;
