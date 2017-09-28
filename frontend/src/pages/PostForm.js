import React, {Component} from 'react';
import {connect} from "react-redux";
import {createPostsAsync, getPostAsync} from "../actions/posts";
import {Redirect} from "react-router-dom";

class PostForm extends Component {

    constructor() {
        super();
        // Form inputs and controlled components may have some state handled by the component. (from Udacity rubric review)
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
        this.setState({ fireRedirect: true })

    }

    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.getPost(id)
    }

    render() {
        console.log("State:", this.state);
        const { from } = this.props.location.state || '/'
        const { fireRedirect } = this.state;

        const {post} = this.props;

        return (<div>
            <form onSubmit={this.handleSubmit}>

                <label htmlFor="title">Title</label>
                <input id="title" type="text" value={post.title} onChange={(e) => this.setValue(e)}/>

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
            {fireRedirect && (
                <Redirect to={from || '/'}/>
            )}

        </div>);
    }
}

const mapStateToProps = (state, props) => ({
    post: state.post
});





const mapDispatchToProps = dispatch => ({
    getPost: (postId) => dispatch(getPostAsync(postId)),
    createPost: (post) => dispatch(createPostsAsync(post))

});


export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
