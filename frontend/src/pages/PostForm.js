import React, {Component} from 'react';
import {connect} from "react-redux";
import {createPostsAsync, getPostAsync, savePostsAsync} from "../actions/posts";
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
        debugger;
        this.props.savePost({...this.state});
        this.setState({fireRedirect: true})

    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getPost(id)
    }


    componentWillReceiveProps(nextProps) {

        const {post} = nextProps;
        this.setState(post)
    }

    render() {
        console.log("State:", this.state);
        const {from} = this.props.location.state || '/'
        const {fireRedirect} = this.state;
        const {categories} = this.props;
        const {title, body, author, category} = this.state;

        return (<div>
            <form onSubmit={this.handleSubmit}>

                <label htmlFor="title">Title</label>
                <input id="title" type="text" value={title} onChange={(e) => this.setValue(e)}/>

                <label htmlFor="body">Body</label>
                <textarea id="body" value={body} onChange={(e) => this.setValue(e)}/>

                <label htmlFor="author">Author</label>
                <input id="author" value={author} type="text" onChange={(e) => this.setValue(e)}/>

                <label htmlFor="category">Category</label>

                <select name="category" id="category" value={category || categories.current || ''}
                        onChange={(e) => this.setValue(e)}>
                    <option value="" disabled>Select a category</option>
                    {categories.list.map(item => (
                        <option key={item.path} value={item.path}>{item.name}</option>
                    ))}


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
    post: state.post,
    categories: state.categories
});


const mapDispatchToProps = dispatch => ({
    getPost: (postId) => dispatch(getPostAsync(postId)),
    savePost: (post) => dispatch(savePostsAsync(post))

});


export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
