import React, {Component} from 'react';
import moment from "moment";
import './Comment.css'
class Comment extends Component {

    //todo: editar comentário
    render() {
        let {comment} = this.props;
        return (
            <div className='comment-box'>
                <div className='header'>
                    <div className='author-letter'>{comment.author[0].toUpperCase()}</div>
                    <div className='author'>{comment.author}</div>
                    <span>{moment(comment.timestamp).fromNow()}</span>
                </div>
                <div className='comment-content'>
                    <span>{comment.body}</span>
                </div>



                <p>Votes: {comment.voteScore}</p>
                <button onClick={() => this.props.onDelete(comment.id)}>
                    <i className="fa fa-trash-o" aria-hidden="true"/>
                </button>
                <button onClick={() => this.props.onVote(comment.id, 'upVote')}>
                    <i className="fa fa-thumbs-o-up" aria-hidden="true"/>
                </button>
                <button onClick={() => this.props.onVote(comment.id, 'downVote')}>
                    <i className="fa fa-thumbs-o-down" aria-hidden="true"/>
                </button>

                <button onClick={() => this.props.onEdit(comment)}>
                    <i className="fa fa-pencil-square-o" aria-hidden="true"/>
                </button>
                <hr/>
            </div>
        );
    }
}

export default Comment;