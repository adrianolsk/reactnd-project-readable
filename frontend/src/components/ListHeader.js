import React, { Component } from 'react';
import Link from "react-router-dom/es/Link";

class ListHeader extends Component {
    render() {
        let {category} = this.props;
        return (
            <div className="content-header">
                <h2>{category || "All"}</h2>
                <div className="content-actions">
                    <button>Sort by Date</button>
                    <button>Sort By Score</button>
                    <Link to="/new">new</Link>
                    <button>New Post</button>
                </div>
            </div>
        );
    }
}

export default ListHeader;