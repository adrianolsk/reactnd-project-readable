import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostForm from "./pages/post-form/PostForm";
import PostDetail from "./pages/post-detail/PostDetail";
import connect from "react-redux/es/connect/connect";
import {getCategoriesAsync} from "./actions/categories";


class App extends Component {

    componentDidMount() {
        this.props.getCategories();
    }

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

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategoriesAsync())
});

export default withRouter(connect(null, mapDispatchToProps)(App));