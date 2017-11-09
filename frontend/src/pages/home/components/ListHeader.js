import React from 'react';
import {connect} from "react-redux";
import {sortPosts} from "../../../actions/posts";
import SortButton from "./SortButton";

const fields = [
    {label: 'Title', value: 'title'},
    {label: 'Category', value: 'category'},
    {label: 'Score', value: 'voteScore'},
    {label: 'Date', value: 'timestamp'},
];

const ListHeader = ({postsSortedBy, sortPosts}) => (
    <div className="tools">
        <span>Order By:</span>
        <div className="sorting">
            {fields.map(field => (
                <SortButton
                    key={field.value}
                    field={field}
                    onSort={sortPosts}
                    postsSortedBy={postsSortedBy}/>
            ))}
        </div>
    </div>
);


const mapStateToProps = (state, props) => ({
    postsSortedBy: state.posts.sortBy
});
const mapDispatchToProps = dispatch => ({
    sortPosts: (field) => dispatch(sortPosts(field))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListHeader);
