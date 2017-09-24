import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListHeader from "../components/ListHeader";
import CardPost from "../components/CardPost";
import {getPostsAsync} from "../actions/posts";

class Home extends Component {

    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const {category} = this.props.match.params
        let {posts} = this.props;

        return (
            <div className="content-list">

                <ListHeader category={category}/>
                {posts.map(post => (<CardPost key={post.title} post={post}></CardPost>))}

            </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    posts: state.posts
});

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(getPostsAsync())
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);

