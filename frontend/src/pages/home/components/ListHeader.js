import React, {Component} from 'react';
import Link from "react-router-dom/es/Link";
import {connect} from "react-redux";
import {sortPosts} from "../../../actions/posts";
import SortButton from "./SortButton";

class ListHeader extends Component {

    constructor() {
        super()
        this.state = {
            fields: [
                {label: 'Title', value: 'title'},
                {label: 'Category', value: 'category'},
                {label: 'Score', value: 'voteScore'},
                {label: 'Date', value: 'timestamp'},
            ]
        };
    }


    render() {
        let {category, postsSortedBy} = this.props;
        return (
            <div className="content-header">
                <h2>{category || "All"}</h2>
                <div className="content-actions">
                    <Link to="/new">new</Link>
                    {this.state.fields.map(field => (
                        <SortButton
                            key={field.value}
                            field={field}
                            onSort={this.props.sortPosts}
                            postsSortedBy={postsSortedBy}/>
                    ))}
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
