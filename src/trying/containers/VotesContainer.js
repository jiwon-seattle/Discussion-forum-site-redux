// CounterContainer 컴포넌트 만들기
// 이제 리덕스와 연동된 컴포넌트인 CounterContainer 컴포넌트를 만들겠습니다. 일단, 컴포넌트를 만들어서 단순히 Counter 를 불러온다음에 렌더링하세요.

import React, { Component } from 'react';
import Votes from 'components/Votes';
import { connect } from 'react-redux';
import * as voteActions from 'modules/voteChange'

class VotesContainer extends Component {
  handleUpVotes = () => {
    this.props.upVotes();
  }

  handleDownVotes = () => {
    this.props.downVotes();
  }

  render() {
    const { handleUpVotes, handleDownVotes } = this;
    const { vote } = this.props;

    return (
      <Votes
      onUpVote = {handleUpVotes}
      onDownVote = {handleDownVotes}
      vote = {vote}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  number: state.votes.vote
});

const mapDispatchToProps = (dispatch) => ({
  onUpVote: () => dispatch(voteActions.voteUp()),
  onDownVote: () => dispatch(voteActions.voteDown())
})


export default connect(mapStateToProps, mapDispatchToProps)(VotesContainer);