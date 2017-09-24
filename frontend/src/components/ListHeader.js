import React, { Component } from 'react';

class ListHeader extends Component {
    render() {
        let {category} = this.props;
        return (
            <div className="content-header">
                <h2>{category || "All"}</h2>
                <div className="content-actions">
                    <button>Sort by Date</button>
                    <button>Sort By Score</button>
                    <button>New Post</button>
                </div>
            </div>
        );
    }
}

export default ListHeader;