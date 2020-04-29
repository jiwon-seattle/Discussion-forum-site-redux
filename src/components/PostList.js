import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import Post from './Post';

class PostList extends Component {
    render() {
        const { posts} = this.props;

        return (
            <div>
                <h3>React + Redux Board Forum</h3>
                <PostForm/>
                <table border="1">
                    <tbody>
                    <tr align="center">
                        <td width="50">No.</td>
                        <td width="300">Title</td>
                        <td width="100">Name</td>
                        <td width="100">Date</td>
                    </tr>
                    {
                        posts.map(row =>
                            (<Post key={row.postId} row={row} />)
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.posts,
        selectedPost: state.selectedPost
    };
}

export default connect(mapStateToProps)(PostList);
