import React, { Component } from 'react';
import './App.css';
import * as API from './util/api';
import ListHeader from "../components/ListHeader";

class Home extends Component {

    constructor(){
        super();
        this.state = {
            posts: []
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
                {posts.map(post => (<CardPost key={post.title} post={post}></CardPost>))}

            </div>
        )}
}


export default Home;