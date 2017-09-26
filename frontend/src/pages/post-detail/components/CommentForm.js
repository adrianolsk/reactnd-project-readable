import React, {Component} from 'react';
import {connect} from "react-redux";
import {addCommentAsync} from "../../../actions/comments";

// Form inputs and controlled components may have some state handled by the component. (from Udacity rubric review)
const initialState = {
    author: '',
    body: ''
};

class CommentForm extends Component {

    constructor() {
        super();
        this.state = initialState;
    }

    setValue = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    addComment = (e) => {
        e.preventDefault();

        this.props.addComment({
            ...this.state,
            parentId: this.props.postId
        });

        this.clearForm();

    }

    clearForm = () => {
        this.setState(initialState);
    }

    render() {
        let {author, body} = this.state;

        return (
            <form onSubmit={this.addComment}>
                <label htmlFor="">Name</label>
                <input type="text" id='author' value={author} onChange={this.setValue}/>

                <label htmlFor="">Message</label>
                <input type="text" id='body' value={body} onChange={this.setValue}/>

                <button type='submit'>Salvar</button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (comment) => dispatch(addCommentAsync(comment))
});

export default connect(null, mapDispatchToProps)(CommentForm);
