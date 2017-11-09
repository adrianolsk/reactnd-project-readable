import React, {Component} from 'react';
import moment from "moment";

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

    onDone = () => {
        this.setState({editing: false})
    }

    onDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            this.props.onDelete(id);
        }
    }

    render() {
        let {comment, postId} = this.props;
        return (
            <div>
                {this.state.editing ? (
                    <CommentForm postId={postId} comment={comment} onDone={this.onDone}/>
                ) : (
                    <fieldset>
                        <div className='comment-box'>
                            <div className="comment-header">
                                <div className="author">
                                    <div className={"letter " + comment.author[0].toLowerCase()}>
                                        {comment.author[0].toUpperCase()}
                                    </div>
                                    <div className="name">{comment.author}</div>
                                    <div className="time">{moment(comment.timestamp).fromNow()}</div>
                                </div>
                                <div className='buttons'>
                                    <button onClick={this.onEdit}>
                                        <i className="fa fa-pencil-square-o" aria-hidden="true"/>
                                    </button>
                                    <button className='remove' onClick={() => this.onDelete(comment.id)}>
                                        <i className="fa fa-trash-o" aria-hidden="true"/>
                                    </button>

                                </div>
                            </div>

                            <div className='comment-content'>
                                <span>{comment.body}</span>
                            </div>

                            <div className="footer">
                                <div>


                                </div>
                                <div className="buttons">
                                    <button onClick={() => this.props.onVote(comment.id, 'upVote')}>
                                        <i className='fa fa-thumbs-up'/>
                                    </button>
                                    <span>{comment.voteScore}</span>
                                    <button onClick={() => this.props.onVote(comment.id, 'downVote')}>
                                        <i className='fa fa-thumbs-down'/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                )}
            </div>
        );
    }
}

export default Comment;