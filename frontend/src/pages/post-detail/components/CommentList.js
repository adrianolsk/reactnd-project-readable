import React, {Component} from 'react';
import {connect} from "react-redux";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {deleteCommentAsync, voteCommentAsync} from "../../../actions/comments";
import PropTypes from 'prop-types';

class CommentList extends Component {

    constructor() {
        super();
        this.state = {
            comment: null
        }
    }

    onDelete = (commentId) => {
        this.props.deleteComment(commentId);
    }

    onVote = (commentId, vote) => {
        this.props.voteComment(commentId, vote);
    }

    onEdit = (comment) => {
        this.setState({comment})
    }


    render() {
        let {comments, postId} = this.props;
        return (
            <div className="comments">
                <h3>Comments:</h3>
                {comments.filter(x => x.parentId === postId)
                    .map(comment => (<Comment key={comment.id}
                                              postId={postId}
                                              comment={comment}
                                              onEdit={this.onEdit}
                                              onVote={this.onVote}
                                              onDelete={this.onDelete}/>  ))}
                <CommentForm postId={postId} comment={this.state.comment}/>
            </div>
        );
    }
}

CommentList.propTypes = {
    postId: PropTypes.string.isRequired
}

const mapStateToProps = (state, props) => ({
    comments: state.comments,
});


const mapDispatchToProps = dispatch => ({
    deleteComment: (postId) => dispatch(deleteCommentAsync(postId)),
    voteComment: (commentId, vote) => dispatch(voteCommentAsync(commentId, vote))
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentList);