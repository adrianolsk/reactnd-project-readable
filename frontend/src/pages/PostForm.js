import React, {Component} from 'react';
import {connect} from "react-redux";
import {createPostsAsync} from "../actions/posts";

class PostForm extends Component {

    save = () => {
        this.props.createPost({
            title: 'Test',
            body: 'Hello',
            author: 'Adriano',
            category: 'React'
        });
    }


    render() {
        return (<div>Form post
            <button onClick={this.save}>salvar</button>
        </div>);
    }
}

const mapStateToProps = (state, props) => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    createPost: (post) => dispatch(createPostsAsync(post))
});


export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
