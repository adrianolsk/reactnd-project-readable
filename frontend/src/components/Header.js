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

        const {categories} = this.props;
        return (<header>
            <ul>
                <li>
                    <NavLink exact to='/' activeClassName="active">All</NavLink>

                </li>
                {categories.map(item => (
                    <li key={item.path}>
                        <NavLink exact activeClassName="active" to={`/${item.path}`}>{item.name}</NavLink>
                    </li>
                ))}
            </ul>
        </header>);
    }
}


const mapStateToProps = (state, props) => ({
    categories: state.categories
});

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategoriesAsync())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);


