import React, {Component} from 'react';
import { connect } from 'react-redux';

import { post_save} from 'reducers/posts'

class PostForm extends Component {
  state = {};
  initialSelectedPost = {
    postId: "",
    title: "",
    author: "",
    date: "",
  }

  handleChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  handleSave = () => {
    this.props.dispatch(post_save(this.state));
    this.setState(this.initialSelectedPost);
  }

  componentWillReceiveProps(nextProps){
    this.setState(nextProps)
  }

  render() {
    return (
      <div>
        <input placeholder="title" name="title" value={this.state.title} onChange={this.handleChange} />
        <input placeholder="name" name="author" value={this.state.author} onChange={this.handleChange}/>
        <button onClick={this.handleSave}>Save</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedPost: state.selectedPost
  }
}

export default connect(mapStateToProps)(PostForm)