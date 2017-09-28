import React, {Component} from 'react';
import Link from "react-router-dom/es/Link";
import {connect} from "react-redux";
import {sortPosts} from "../actions/posts";

class ListHeader extends Component {

    checkOrder = (field) => {
        let {postsSortedBy} = this.props;

        return (field === postsSortedBy.field ? 'active' : '') + ' ' + (postsSortedBy.direction === 1 ? 'desc' : 'asc');
    }

    // todo: extract order buttons to component and use a list of fields to map on, so it won't repeat the fields and could show a arrow up or down easily


    render() {
        let {category, postsSortedBy} = this.props;
        return (
            <div className="content-header">
                <h2>{category || "All"}</h2>
                <div className="content-actions">
                    <Link to="/new">new</Link>

                    <button onClick={() => this.props.sortPosts('author')} className={this.checkOrder('author')}>Sort by
                        Author
                    </button>

                    <button onClick={() => this.props.sortPosts('title')} className={this.checkOrder('title')}>Sort by
                        title
                    </button>
                    <button onClick={() => this.props.sortPosts('category')} className={this.checkOrder('category')}>
                        Sort by category
                    </button>
                    <button onClick={() => this.props.sortPosts('voteScore')} className={this.checkOrder('voteScore')}>
                        Sort by Score
                    </button>
                    <button onClick={() => this.props.sortPosts('timestamp')} className={this.checkOrder('timestamp')}>
                        Sort by Date
                    </button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => ({
    postsSortedBy: state.posts.sortBy
});
const mapDispatchToProps = dispatch => ({
    sortPosts: (field) => dispatch(sortPosts(field))
});


export default connect(mapStateToProps, mapDispatchToProps)(ListHeader);
