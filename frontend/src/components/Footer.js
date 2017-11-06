import React, {Component} from 'react';
import AuthorList from "../components/AuthorsList";
class Footer extends Component {
    render() {
        return (
            <div className="sidebar-users">
                <div className="title">
                    Top users
                </div>
                <div className="search">
                    <i className="fa fa-search"></i>
                    <input placeholder="Search a user"/>
                </div>
                <AuthorList/>

            </div>
        );
    }
}

export default Footer;