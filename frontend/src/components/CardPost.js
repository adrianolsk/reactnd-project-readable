import React, {Component} from 'react';
import moment from 'moment';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deletePostAsync, votePostAsync} from "../actions/posts";


//todo: style links
class CardPost extends Component {

    onDelete = (id) => {
        this.props.deletePost(id);
    }

    //todo: extract comments/comment form to components

    onVote = (postId, vote) => {
        this.props.votePost(postId, vote);
    }


    render() {
        let {id, title, author, timestamp, category, score, voteScore} = this.props.post;
        return (
            <div className="content-card">
                <div className="card-score">{score}</div>

                <div className="card-detail">
                    <h3>{title}</h3>
                    <div className="card-author"><i>by {author}</i></div>
                    <div className="card-date">{moment(timestamp).format('D MMM YYYY, h:mma')}</div>
                    <div className="card-category">{category}</div>
                    <div className="card-category">voteScore: {voteScore}</div>
                    <Link to={`/${category}/${id}`}>Details</Link>
                    <Link to={`/edit/${id}`}>Editar</Link>
                    <button onClick={() => this.onDelete(id)}>Excluir</button>
                    <button onClick={() => this.onVote(id, 'upVote')}>Vote Up</button>
                    <button onClick={() => this.onVote(id, 'downVote')}>Vote Down</button>
                </div>
            </div>
        );
    }
}




const mapDispatchToProps = dispatch => ({
    deletePost: (postId) => dispatch(deletePostAsync(postId)),
    votePost: (postId, vote) => dispatch(votePostAsync(postId, vote))
});


export default connect(null, mapDispatchToProps)(CardPost);
