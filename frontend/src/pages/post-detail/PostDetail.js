import React, {Component} from 'react';
import {connect} from "react-redux";
import {createPostsAsync, deletePostAsync, getPostAsync, votePostAsync} from "../../actions/posts";
import {getCommentsAsync} from "../../actions/comments";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import {Link, Redirect} from "react-router-dom";

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


    delete = () => {
        const {post} = this.props;
        this.props.deletePost(post.id);
        this.setState({fireRedirect: true})
    }


    //todo: extract comments/comment form to components

    onVote = (postId, vote) => {
        this.props.votePost(postId, vote);
    }

    render() {
        const {id} = this.props.match.params;
        const {post, comments} = this.props;
        const {fireRedirect} = this.state;
        const {from} = this.props.location.state || '/'
        return ([
            <div className="main">
                <div className="title">
                    {post.title}
                </div>
                <div className="toolbar">
                    Author: {post.author}

                    {/*<div className="tools">*/}
                    {/*<span>Order By</span>*/}
                    {/*<select name="" id="">*/}
                    {/*<option value="">Title</option>*/}
                    {/*<option value="">Score</option>*/}
                    {/*<option value="">Date</option>*/}
                    {/*</select>*/}
                    {/*<Link to="/new"><button><i className="fa fa-file-o"/></button></Link>*/}

                    {/*</div>*/}
                </div>
                <div className="post-container">

                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <span>{post.author}</span>
                        <p>Score: {post.voteScore}</p>
                        <p>Category: {post.category}</p>
                        <button onClick={this.delete}>Delete Post</button>
                        <button onClick={() => this.onVote(post.id, 'upVote')}>Vote Up</button>
                        <button onClick={() => this.onVote(post.id, 'downVote')}>Vote Down</button>
                        <Link to={`/edit/${id}`}>Edit</Link>
                    </div>

                    <hr/>
                    <br/>comments:
                    <br/>

                    <CommentList postId={post.id}/>
                </div>





                    {fireRedirect && (
                        <Redirect to={from || '/'}/>
                    )}



            </div>]);
    }
}

const mapStateToProps = (state, props) => ({
    post: state.posts.post,
    comments: state.comments,
});

const mapDispatchToProps = dispatch => ({
    getPost: (postId) => dispatch(getPostAsync(postId)),
    getComments: (postId) => dispatch(getCommentsAsync(postId)),
    deletePost: (postId) => dispatch(deletePostAsync(postId)),
    votePost: (postId, vote) => dispatch(votePostAsync(postId, vote))
});


export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
