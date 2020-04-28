import {
  VOTE_UP, VOTE_DOWN
} from '../actionTypes/votesTypes'

const initialState = {
  upVotes: 0,
  downVotes: 0,
}

export default voteHandleActions({
  [VOTE_UP]: (state, action) => {
    return { upVotes: state.upVotes + 1 };
  },
 //short version
  [VOTE_DOWN]: ({ downVotes }) => ({ downVotes: downVotes - 1 })
}, initialState);
