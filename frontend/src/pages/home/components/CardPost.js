import React, {Component} from 'react';
import moment from 'moment';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deletePostAsync, votePostAsync} from "../../../actions/posts";
import {getCommentsAsync} from "../../../actions/comments";


//todo: style links
class CardPost extends Component {


    componentDidMount() {
        const {id} = this.props.post;
        this.props.getComments(id)
    }


    onDelete = (id) => {
        this.props.deletePost(id);
    }

    //todo: trazer total de comentários
    //todo: mostrar total de post em cada categoria

    onVote = (postId, vote) => {
        this.props.votePost(postId, vote);
    }


    render() {
        let {id, title, author, timestamp, category, score, voteScore} = this.props.post;
        let comments = this.props.comments.filter(x=>x.parentId === id);
        return (
            <div className="card">
                <div className="title">
                    {title}
                    <div className="buttons">
                        <Link className='button' to={`/edit/${id}`}><i class='fa fa-pencil'/></Link>
                        {/*<button><i class='fa fa-pencil'/></button>*/}
                        <button onClick={() => this.onDelete(id)} className="remove"><i className='fa fa-trash '/></button>
                    </div>
                </div>
                <div className="content">
                    <Link to={`/${category}/${id}`}> Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI...</Link>

                </div>
                <div className="author">
                    <div className="letter a">{author[0]}</div>
                    <div className="name">{author}</div>
                    <div className="time">{moment(timestamp).format('D MMM YYYY, h:mma')}</div>
                </div>
                <div className="footer">
                    <div>
                        <span  className="meta"><i className="fa fa-tag"/> {category}</span>
                        <span  className="meta"><i className="fa fa-comments"/> {comments.length} Comments</span>
                    </div>
                    <div className="buttons">
                        <button  onClick={() => this.onVote(id, 'upVote')}><i class='fa fa-thumbs-up'/></button>
                        <span>{voteScore}</span>
                        <button onClick={() => this.onVote(id, 'downVote')}><i class='fa fa-thumbs-down'/></button>
                    </div>


                </div>
            </div>

            // <div className="content-card">
            //     <div className="card-score">{score}</div>
            //
            //     <div className="card-detail">
            //         <h3>{title}</h3>
            //         Total comentários: {comments.length}
            //         <div className="card-author"><i>by {author}</i></div>
            //         <div className="card-date">{moment(timestamp).format('D MMM YYYY, h:mma')}</div>
            //         <div className="card-category"><i className="fa fa-tag" aria-hidden="true"/>{category}</div>
            //         <div className="card-category">voteScore: {voteScore}</div>
            //         <Link to={`/${category}/${id}`}>Details</Link>
            //         <Link to={`/edit/${id}`}>Editar</Link>
            //         <button onClick={() => this.onDelete(id)}>Excluir</button>
            //         <button onClick={() => this.onVote(id, 'upVote')}>Vote Up</button>
            //         <button onClick={() => this.onVote(id, 'downVote')}>Vote Down</button>
            //         <i className="fa fa-thumbs-o-up" aria-hidden="true">a</i>sss
            //     </div>
            // </div>
        );
    }
}



const mapStateToProps = (state, props) => ({
    comments: state.comments
});

const mapDispatchToProps = dispatch => ({
    deletePost: (postId) => dispatch(deletePostAsync(postId)),
    votePost: (postId, vote) => dispatch(votePostAsync(postId, vote)),
    getComments: (postId) => dispatch(getCommentsAsync(postId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(CardPost);
