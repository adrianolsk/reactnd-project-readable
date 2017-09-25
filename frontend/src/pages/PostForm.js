import React, {Component} from 'react';
import {connect} from "react-redux";
import {createPostsAsync} from "../actions/posts";

class PostForm extends Component {

    constructor() {
        super();
        // Form inputs and controlled components may have some state handled by the component. (from udacity rubric review)
        this.state = {
            title: '',
            body: '',
            author: '',
            category: ''
        };
    }

    setValue = (event) => {
        var object = {};
        object[event.target.id] = event.target.value;
        this.setState(object);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.createPost({...this.state});
    }

    render() {
        console.log("State:", this.state);

        return (<div>
            <form onSubmit={this.handleSubmit}>

                <label htmlFor="title">Title</label>
                <input id="title" type="text" onChange={(e) => this.setValue(e)}/>

                <label htmlFor="body">Body</label>
                <textarea id="body" onChange={(e) => this.setValue(e)}/>

                <label htmlFor="author">Author</label>
                <input id="author" type="text" onChange={(e) => this.setValue(e)}/>

                <label htmlFor="category">Category</label>
                <select name="" id="category" onChange={(e) => this.setValue(e)}>
                    <option value="" disabled>Select a category</option>
                    <option value="redux">Redux</option>
                    <option value="react">React</option>
                    <option value="udacity">Udacity</option>
                </select>

                <button type="submit">salvar</button>
            </form>

        </div>);
    }
}

const mapStateToProps = (state, props) => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    createPost: (post) => dispatch(createPostsAsync(post))
});


export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
