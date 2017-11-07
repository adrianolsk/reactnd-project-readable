import React, {Component} from 'react';
import AuthorList from "../components/AuthorsList";
import Link from "react-router-dom/es/Link";

class Footer extends Component {
    render() {
        return (
            <div className="sidebar-users">
                <div className="title">
                    Top users
                </div>
                <div className="search">
                    <Link to="/new"><i className="fa fa-file-o"/>Add a new post</Link>
                </div>
                <AuthorList/>

            </div>
        );
    }
}

export default Footer;