import React, {Component} from 'react';
import * as API from '../util/api';
import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {getCategoriesAsync} from "../actions/categories";

class Header extends Component {

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        debugger;

        const {categories,currentCategory} = this.props;
        return (<header>
            <ul>
                <li className={!currentCategory? 'active': ''}>
                    <Link  to='/' >All</Link>

                </li>
                {categories.map(item => (
                    <li key={item.path} className={currentCategory === item.path ? 'active': ''}>
                        <Link  to={`/${item.path}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </header>);
    }
}


const mapStateToProps = (state, props) => ({
    categories: state.categories.list,
    currentCategory: state.categories.current,
});

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategoriesAsync())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);


