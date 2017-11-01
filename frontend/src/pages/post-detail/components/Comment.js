import React, {Component} from 'react';
import moment from "moment";
import './Comment.css'
import CommentForm from "./CommentForm";

class Comment extends Component {

    constructor() {
        super();
        this.state = {
            editing: false
        }
    }

    onEdit = () => {
        this.setState({editing: true})
    }

    onSave = () => {
        this.setState({editing: false})
    }

    render() {
        let {comment, postId} = this.props;
        return (
            <div>
                {this.state.editing ? (
                    <CommentForm postId={postId} comment={comment} onSave={this.onSave}/>
                ) : (
                    <div className='comment-box'>
                        <div className='header'>
                            <div className='author-letter'>{comment.author[0].toUpperCase()}</div>
                            <div className='author'>{comment.author}</div>
                            <div className='date'>{moment(comment.timestamp).fromNow()}</div>

                                <button onClick={this.onEdit}>
                                    <i className="fa fa-pencil-square-o" aria-hidden="true"/>
                                </button>
                                <button className='comment-delete' onClick={() => this.props.onDelete(comment.id)}>
                                    <i className="fa fa-trash-o" aria-hidden="true"/>
                                </button>

                        </div>
                        <div className='comment-content'>
                            <span>{comment.body}</span>
                        </div>

                        <div className="footer">
                            <p>Votes: {comment.voteScore}</p>

                            <button onClick={() => this.props.onVote(comment.id, 'upVote')}>
                                <i className="fa fa-thumbs-o-up" aria-hidden="true"/>
                            </button>
                            <button onClick={() => this.props.onVote(comment.id, 'downVote')}>
                                <i className="fa fa-thumbs-o-down" aria-hidden="true"/>
                            </button>
                        </div>



                    </div>
                )}
            </div>
        );
    }
}

export default Comment;