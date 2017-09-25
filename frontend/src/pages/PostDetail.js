import React, {Component} from 'react';
import {connect} from "react-redux";
import {createPostsAsync, deletePostAsync, getPostAsync} from "../actions/posts";
import {getCommentsAsync} from "../actions/comments";

class PostDetail extends Component {


    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getPost(id)
        this.props.getComments(id)
    }

    edit = () => {

    }
    delete = () => {
        const {post} = this.props;

        this.props.deletePost(post.id);
    }

    render() {
        const {id} = this.props.match.params;
        const {post, comments} = this.props;

        return (<div>
            <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <span>{post.author}</span>
            </div>



            <br/>comments:
            <br/>
            {comments.map(comment => (
                <div>
                    <p>{comment.author}</p>
                    <span>{comment.body}</span>
                </div>
            ))}

            <button onClick={this.delete}>delete</button>
        </div>);
    }
}

const mapStateToProps = (state, props) => ({
    post: state.post,
    comments: state.comments,
});

const mapDispatchToProps = dispatch => ({
    getPost: (postId) => dispatch(getPostAsync(postId)),
    getComments: (postId) => dispatch(getCommentsAsync(postId)),
    deletePost: (postId) => dispatch(deletePostAsync(postId))
});


export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
