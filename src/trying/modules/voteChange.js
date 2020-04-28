//action types

const VOTE_UP = "voteChange/VOTE_UP";
const VOTE_DOWN = "voteChange/VOTE_DOWN";

//action creator

export const voteUp = () => ({ type: VOTE_UP})
export const voteDown = () => ({ type: VOTE_DOWN})

//initial state

const initialState = {
  upVotes: 0,
  downVotes: 0,
}

//reducer

export default handleActions({
  [VOTE_UP]: (state, action) => {
    return { upVotes: state.upVotes + 1 };
  },
 //short 
  [VOTE_DOWN]: ({ downVotes }) => ({ downVotes: downVotes - 1 })
}, initialState);