import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const Header = ({categories, currentCategory}) => (

    <div className="sidebar-left">
        <Link className="logo" to={`/`}>
            Readable
        </Link>
        <div className="search">
            TOPICS
        </div>
        <div className="categories">
            <ul>
                <li>
                    <i className="fa fa-circle-o-notch"/>
                    <Link to='/'>All</Link>
                </li>
                {categories.map(item => (
                    <li key={item.path} className={currentCategory === item.path ? 'active' : ''}>
                        <i className="fa fa-circle-o-notch"/> <Link to={`/${item.path}`}>{item.name}</Link>
                    </li>
                ))}

            </ul>
        </div>
    </div>
);

const mapStateToProps = (state, props) => ({
    categories: state.categories.list,
    currentCategory: state.categories.current,
});

export default connect(mapStateToProps, null)(Header);


