import React, {Component} from 'react';
import {connect} from "react-redux";
import {createPostsAsync, deletePostAsync, getPostAsync} from "../../actions/posts";
import {getCommentsAsync} from "../../actions/comments";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";

class PostDetail extends Component {


    constructor() {
        super();
        this.state = {};
    }

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


    //todo: extract comments/comment form to components



    render() {
        const {id} = this.props.match.params;
        const {post, comments} = this.props;

        return (<div>
            <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <span>{post.author}</span>
                <button onClick={this.delete}>Delete Post</button>
            </div>


            <hr/>
            <br/>comments:
            <br/>

            <CommentList postId={post.id}/>



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
