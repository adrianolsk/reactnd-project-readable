import React, {Component} from 'react';
import {connect} from "react-redux";
import {orderBy} from 'lodash';
class AuthorList extends Component {

    render() {
        let userGroup = this.props.posts.reduce((result, next) => {

            result[next.author] = result[next.author] || { author: next.author, total : 0} ;
            result[next.author].total++;

            return result;
        }, {});
        let userList = orderBy(Object.keys(userGroup).map(key=> ({
            author: key,
            total: userGroup[key].total,
        })), ['total'], ['desc'])

        return (
            <div>
                <div>
                    {userList.map(user=> (
                        <div key={user.author}>{user.author} {user.total}</div>
                    ))}
                </div>
            </div>
        );
    }
}

// export default AuthorList;




const mapStateToProps = (state, props) => ({
    posts: state.posts.list
});



export default connect(mapStateToProps, null)(AuthorList);
