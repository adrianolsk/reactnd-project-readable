import React, {Component} from 'react';
import {connect} from 'react-redux';
import ListHeader from "./components/ListHeader";
import CardPost from "./components/CardPost";
import {getPostsAsync, getPostsFromCategoryAsync} from "../../actions/posts";
import {setCategory} from "../../actions/categories";
import AuthorList from "../../components/AuthorsList";
import Link from "react-router-dom/es/Link";

// todo: remove debuggers;
// todo: remove extra comments
class Home extends Component {


    componentDidMount() {
        this.loadData();
    }

    // componentDidUpdate(prevProps, prevState)
    componentDidUpdate(prevProps) {
        if (prevProps.match.params !== this.props.match.params) {
            this.loadData();
        }
    }

    loadData() {
        const {category} = this.props.match.params;
        this.props.setCategory(category);
        if (!category) {
            this.props.getPosts();
        } else {

            this.props.getPostsFromCategory(category);
        }
    }

    render() {
        const {category} = this.props.match.params;

        let {posts} = this.props;

        return (
            <div className="main">
                <div className="title">
                    {category || "All topics"}
                </div>
                <div className="toolbar">
                    Share a knowlage
                    <ListHeader category={category}/>
                    {/*<div className="tools">*/}
                        {/*<span>Order By</span>*/}
                        {/*<select name="" id="">*/}
                            {/*<option value="">Title</option>*/}
                            {/*<option value="">Score</option>*/}
                            {/*<option value="">Date</option>*/}
                        {/*</select>*/}
                        {/*<Link to="/new"><button><i className="fa fa-file-o"/></button></Link>*/}

                    {/*</div>*/}
                </div>
                <div className="container">
                    {posts.map(post => (<CardPost key={post.id} post={post}/>))}


                </div>

            </div>
            // <div className="content-list">
            //
            //     <ListHeader category={category}/>
            //     {posts.map(post => (<CardPost key={post.id} post={post}/>))}
            //
            // </div>
        )
    }
}


const mapStateToProps = (state, props) => ({
    posts: state.posts.list
});

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(getPostsAsync()),
    getPostsFromCategory: (category) => dispatch(getPostsFromCategoryAsync(category)),
    setCategory: (category) => dispatch(setCategory(category))
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);

