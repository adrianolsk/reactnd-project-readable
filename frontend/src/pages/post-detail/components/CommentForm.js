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

    componentDidMount() {
        this.setState({...this.state, ...this.props.comment});
    }

    clearForm = () => {
        this.setState(initialState);
    }

    onCancel = () => {
        if (this.props.onDone) {
            this.props.onDone();
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({formSubmitted: true});
        const validator = validate(this.state);
        if (validator.valid) {
            this.props.addComment({
                id: this.state.id,
                author: this.state.author,
                body: this.state.body,
                voteScore: this.state.voteScore,
                parentId: this.props.postId
            });

            this.clearForm();
            if (this.props.onDone) {
                this.props.onDone();
            }
        }
    }

    render() {
        let {author, body, id} = this.state;
        const validator = validate(this.state);
        return (
            <div className='comment-box'>
                <fieldset>
                    <div className='header'>
                        <b>  {id ? "Editing comment" : "Add a comment"}</b>

                    </div>
                    <div className='comment-content form'>

                        <form onSubmit={this.handleSubmit}>

                            <ErrorMessages show={this.state.formSubmitted} errors={validator.errors}/>

                            <label htmlFor="">Name</label>
                            <input autoComplete="off" type="text" id='author' value={author} onChange={this.setValue}/>

                            <label htmlFor="">Message</label>
                            <input autoComplete="off" type="text" id='body' value={body} onChange={this.setValue}/>

                            <div className="form-buttons">
                                {id ? ( <button type='button' className="cancel" onClick={this.onCancel}>
                                    <i className="fa fa-undo" aria-hidden="true"/> Cancelar
                                </button>) : ""}

                                <button type='submit'>
                                    <i className="fa fa-save" aria-hidden="true"/> Salvar
                                </button>
                            </div>
                        </form>

                    </div>
                    <div className="footer-edit">

                    </div>

                </fieldset>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (comment) => dispatch(addCommentAsync(comment))
});

export default connect(null, mapDispatchToProps)(CommentForm);
