import React, {Component} from 'react';
import {connect} from "react-redux";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {deleteCommentAsync, voteCommentAsync} from "../../../actions/comments";

class CommentList extends Component {

    onDelete = (commentId) => {
        this.props.deleteComment(commentId);
    }

    onVote = (commentId, vote) => {
        this.props.voteComment(commentId, vote);
    }


    render() {
        let {comments, postId} = this.props;
        return (
            <div>
                {comments.map(comment => (<Comment key={comment.id}
                                                   comment={comment}
                                                   onVote={this.onVote}
                                                   onDelete={this.onDelete}/>  ))}
                <CommentForm postId={postId}/>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => ({
    comments: state.comments,
});


const mapDispatchToProps = dispatch => ({
    deleteComment: (postId) => dispatch(deleteCommentAsync(postId)),
    voteComment: (commentId, vote) => dispatch(voteCommentAsync(commentId, vote))
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentList);