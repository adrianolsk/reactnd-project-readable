import React, {Component} from 'react';
import {connect} from "react-redux";
import {deletePostAsync, getPostAsync, votePostAsync} from "../../actions/posts";
import {getCommentsAsync} from "../../actions/comments";
import CommentList from "./components/CommentList";
import {Link, Redirect} from "react-router-dom";
import moment from "moment";

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


    onDelete = () => {
        if (window.confirm("Are you sure?")) {
            const {post} = this.props;
            this.props.deletePost(post.id);
            this.setState({fireRedirect: true})
        }
    }


    onVote = (postId, vote) => {
        this.props.votePost(postId, vote);
    }

    render() {
        const {id} = this.props.match.params;
        const {author, title, body, voteScore, category, timestamp} = this.props.post || {};
        const {fireRedirect} = this.state;
        const {from} = this.props.location.state || '/'
        return (
            <div className="main">
                <div className="title">
                    {title}

                </div>
                <div className="toolbar">
                    Author: {author}

                    <div className="toolbar-actions">
                        <div className="tag"><i className="fa fa-tag"/>{category}</div>
                        <div className="buttons">
                            <button onClick={() => this.onVote(id, 'upVote')}><i className='fa fa-thumbs-up'/></button>
                            <span>{voteScore}</span>
                            <button onClick={() => this.onVote(id, 'downVote')}><i className='fa fa-thumbs-down'/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="post-container">

                    <div>
                        <p>{body}</p>
                        <span>{moment(timestamp).format('D MMM YYYY, h:mma')}</span>
                    </div>
                    <div className="post-actions">
                        <button onClick={this.onDelete}><i className="fa fa-trash-o" aria-hidden="true"/>Delete</button>
                        <Link to={`/edit/${id}`}> <i className="fa fa-pencil" aria-hidden="true"/>Edit</Link>
                    </div>

                    <CommentList postId={id}/>
                </div>
                {fireRedirect && (
                    <Redirect to={from || '/'}/>
                )}
            </div>
        );
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
