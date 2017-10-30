import React, {Component} from 'react';
import {connect} from "react-redux";
import {addCommentAsync} from "../../../actions/comments";
import ErrorMessages from "../../../components/ErrorMessages";


const validate = values => {
    const errors = []


    if (!values.body) {
        errors.push('Body is required');
    } else if (values.body.length < 5) {
        errors.push('Body must be 5 characters or more');
    }

    if (!values.author) {
        errors.push('Author is required');
    } else if (values.body.length < 5) {
        errors.push('Author must be 5 characters or more');
    }

    return {errors, valid: errors.length === 0}
}


// Form inputs and controlled components may have some state handled by the component. (from Udacity rubric review)
const initialState = {
    formSubmitted: false,
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
        this.setState({formSubmitted: true});
        const validator = validate(this.state);
        if (validator.valid) {
            this.props.addComment({
                id: this.state.id,
                author: this.state.author,
                body: this.state.body,
                parentId: this.props.postId
            });

            this.clearForm();
        }

    }

    componentWillReceiveProps(nextProps){
        debugger;
        this.setState({...this.state,...nextProps.comment});
    }

    clearForm = () => {
        this.setState(initialState);
    }

    render() {
        let {author, body} = this.state;
        const validator = validate(this.state);
        return (
            <form onSubmit={this.addComment}>
                <ErrorMessages show={this.state.formSubmitted} errors={validator.errors}/>

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
