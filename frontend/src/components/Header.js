import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getCategoriesAsync} from "../actions/categories";

class Header extends Component {

    componentDidMount() {
        this.props.getCategories();
    }

    render() {


        const {categories,currentCategory} = this.props;



        // return (<header>
        //     <ul>
        //         <li className={!currentCategory? 'active': ''}>
        //             <Link  to='/' >All</Link>
        //
        //         </li>
        //         {categories.map(item => (
        //             <li key={item.path} className={currentCategory === item.path ? 'active': ''}>
        //                 <Link  to={`/${item.path}`}>{item.name}</Link>
        //             </li>
        //         ))}
        //     </ul>
        // </header>);

        return(
            <div className="sidebar-left">
                <div className="logo">Readable</div>
                <div className="search">
                    <i className="fa fa-search"/>
                    <input placeholder="Search topic"/>
                </div>
                <div className="categories">
                    <ul>
                        <li>
                            <i className="fa fa-circle-o-notch"/>
                            <Link  to='/' >All</Link>
                        </li>
                        {categories.map(item => (
                                        <li key={item.path} className={currentCategory === item.path ? 'active': ''}>
                                            <i className="fa fa-circle-o-notch"/> <Link  to={`/${item.path}`}>{item.name}</Link>
                                        </li>
                                    ))}

                    </ul>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => ({
    categories: state.categories.list,
    posts: state.posts.list,
    currentCategory: state.categories.current,
});

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getCategoriesAsync())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);


