import React, {Component} from 'react';
import {connect} from "react-redux";
import {getPostAsync, savePostsAsync} from "../../actions/posts";
import {Redirect} from "react-router-dom";
import ErrorMessages from "../../components/ErrorMessages";


const validate = values => {
    const errors = []
    if (!values.title) {
        errors.push('Title is required');
    } else if (values.title.length < 5) {
        errors.push('Title must be 5 characters or more');
    }

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

    if (!values.category) {
        errors.push('Category is required');
    }


    return {errors, valid: errors.length === 0}
}


class PostForm extends Component {


    constructor() {
        super();

        this.state = {
            formSubmitted: false,
            form: {
                title: '',
                body: '',
                author: '',
                category: ''
            }
        };
    }

    setValue = (event) => {

        var object = {};
        object[event.target.id] = event.target.value;
        this.setState({
            form: {
                ...this.state.form,
                ...object
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({formSubmitted: true});
        const errors = validate(this.state.form);
        if (errors.valid) {
            this.props.savePost({...this.state.form});
            this.setState({fireRedirect: true})
        }

    }

    componentDidMount() {

        const {id} = this.props.match.params;
        if (id) {
            this.props.getPost(id)
        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.post !== this.props.post) {
            const {post} = nextProps;
            this.setState({form: post})
        }
    }

    render() {
        const validator = validate(this.state.form);
        const {from} = this.props.location.state || '/'
        const {fireRedirect} = this.state;
        const {categories} = this.props;
        const {title, body, author, category} = this.state.form;

        return (
            <div className="main">
                <div className="title">
                    {title || "Add a new post"}
                </div>
                <div className="toolbar">
                    Share a knowlage

                </div>
                <div className="container-form">
                    <form onSubmit={this.handleSubmit}>
                        <ErrorMessages show={this.state.formSubmitted} errors={validator.errors}/>


                        <label htmlFor="title">Title</label>
                        <input autoComplete="off" id="title" type="text" value={title} onChange={this.setValue}/>

                        <label htmlFor="body">Body</label>
                        <textarea id="body" value={body} onChange={this.setValue}/>

                        <label htmlFor="author">Author</label>
                        <input autoComplete="off" id="author" value={author} type="text" onChange={this.setValue}/>

                        <label htmlFor="category">Category</label>

                        <select name="category" id="category" value={category || categories.current || ''}
                                onChange={this.setValue}>
                            <option value="" disabled>Select a category</option>
                            {categories.list.map(item => (
                                <option key={item.path} value={item.path}>{item.name}</option>
                            ))}

                        </select>

                        <button type="submit">salvar</button>
                    </form>
                </div>

                {fireRedirect && ( <Redirect to={from || '/'}/>)}

            </div>);
    }
}

const mapStateToProps = (state, props) => ({
    post: state.posts.post,
    categories: state.categories
});

const mapDispatchToProps = dispatch => ({
    getPost: (postId) => dispatch(getPostAsync(postId)),
    savePost: (post) => dispatch(savePostsAsync(post))

});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
