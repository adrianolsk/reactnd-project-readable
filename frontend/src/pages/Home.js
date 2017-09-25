import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListHeader from "../components/ListHeader";
import CardPost from "../components/CardPost";
import {getPostsAsync} from "../actions/posts";

//todo: remove debuggers;
class Home extends Component {


    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const {category} = this.props.match.params;
        debugger;
        let {posts} = this.props;

        return (
            <div className="content-list">

                <ListHeader category={category}/>
                {posts.map(post => (<CardPost key={post.id} post={post}/>))}

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

