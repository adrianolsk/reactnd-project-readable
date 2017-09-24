import React, {Component} from 'react';
import moment from 'moment';

class CardPost extends Component {

    render() {
        let {title, author, timestamp, category, score} = this.props.post;
        return (
            <div className="content-card">
                <div className="card-score">{score}</div>

                <div className="card-detail">
                    <h3>{title}</h3>
                    <div className="card-author"><i>by {author}</i></div>
                    <div className="card-date">{moment(timestamp).format('D MMM YYYY, h:mma')}</div>
                    <div className="card-category">{category}</div>
                </div>
            </div>
        );
    }
}

export default CardPost;