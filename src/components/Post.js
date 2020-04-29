import React, {Component} from 'react';
import { connect } from 'react-redux';

import {post_read, post_remove} from '/reducers/Posts'


class Post extends Component {
  handleUpdateForm = (postId) =>
  {this.props.dispatch(post_read(postId))}

  render() {
    const row= this.props.row
    
    return(
        <tr>
            <td>{row.postId}</td>
            <td><a onClick={() => this.handleUpdateForm(row.brdno) }>{row.title}</a></td>
            <td>{row.author}</td>
            <td>{row.date.toLocaleDateString('ko-KR')}</td>
            <td><a onClick={() => { this.props.dispatch(post_remove(row.postId)) }}>REMOVE</a></td>
        </tr>
    );
}
}

export default connect()(Post)