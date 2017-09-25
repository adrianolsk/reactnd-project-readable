import React, {Component} from 'react';
import {connect} from "react-redux";
import {createPostsAsync} from "../actions/posts";

class PostDetail extends Component {

    edit = () => {

    }
    delete = () => {

    }

    render() {
        return (<div>Form post
            <button onClick={this.save}>salvar</button>
        </div>);
    }
}

const mapStateToProps = (state, props) => ({
    post: state.post
});

const mapDispatchToProps = dispatch => ({
    editPost: (post) => dispatch(createPostsAsync(post)),
    deletePost: (post) => dispatch(createPostsAsync(post))
});


export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
