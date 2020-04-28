import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Votes from '../components/Votes';
import {handleActions} from '../actions/votes';

function mapstateToProps(state){
  return {
    vote: state.votes.vote
  }
}

function mapDispatchToProps(dispatch){
  return {
    upVotes() {
      dispatch(upVote());
    },
    downVotes() {
      dispatch(downVote());
    },
    redirectToError() {
      dispatch(push('/error'));
    }

  }
}

export default connect (mapDispatchToProps, mapDispatchToProps)(Votes);