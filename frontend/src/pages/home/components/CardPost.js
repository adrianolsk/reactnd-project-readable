import React, {Component} from 'react';
import moment from 'moment';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deletePostAsync, votePostAsync} from "../../../actions/posts";
import {getCommentsAsync} from "../../../actions/comments";


//todo: style links
class CardPost extends Component {


    componentDidMount() {
        const {id} = this.props.post;
        this.props.getComments(id)
    }


    onDelete = (id) => {
        this.props.deletePost(id);
    }

    //todo: trazer total de comentários
    //todo: mostrar total de post em cada categoria

    onVote = (postId, vote) => {
        this.props.votePost(postId, vote);
    }


    render() {
        let {id, title, author, timestamp, category, score, voteScore} = this.props.post;
        let comments = this.props.comments.filter(x=>x.parentId === id);
        return (
            <div className="content-card">
                <div className="card-score">{score}</div>

                <div className="card-detail">
                    <h3>{title}</h3>
                    Total comentários: {comments.length}
                    <div className="card-author"><i>by {author}</i></div>
                    <div className="card-date">{moment(timestamp).format('D MMM YYYY, h:mma')}</div>
                    <div className="card-category"><i className="fa fa-tag" aria-hidden="true"/>{category}</div>
                    <div className="card-category">voteScore: {voteScore}</div>
                    <Link to={`/${category}/${id}`}>Details</Link>
                    <Link to={`/edit/${id}`}>Editar</Link>
                    <button onClick={() => this.onDelete(id)}>Excluir</button>
                    <button onClick={() => this.onVote(id, 'upVote')}>Vote Up</button>
                    <button onClick={() => this.onVote(id, 'downVote')}>Vote Down</button>
                    <i className="fa fa-thumbs-o-up" aria-hidden="true">a</i>sss
                </div>
            </div>
        );
    }
}



const mapStateToProps = (state, props) => ({
    comments: state.comments
});

const mapDispatchToProps = dispatch => ({
    deletePost: (postId) => dispatch(deletePostAsync(postId)),
    votePost: (postId, vote) => dispatch(votePostAsync(postId, vote)),
    getComments: (postId) => dispatch(getCommentsAsync(postId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CardPost);
