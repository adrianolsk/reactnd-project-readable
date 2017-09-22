import React, { Component } from 'react';
import * as API from '../util/api';
import {Link} from "react-router-dom";

class Header extends Component {
    // todo: lookup how to redirect to page without refreshing the page
    constructor(){
        super();
        this.state = {
            categories: []
        }
    }
    componentDidMount(){
        API.getCategories().then(categories=>{
            debugger
            this.setState({
                categories: categories
            });
        });
    }
    render() {

        const  {categories} = this.state;
        return(<header>
            <ul>
                <li>
                    <Link to="/" >All</Link>
                </li>
                {categories.map(item=>(
                    <li key={item.path}>
                        <Link to={"/"+item.path}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </header>);
    }
}

export default Header;