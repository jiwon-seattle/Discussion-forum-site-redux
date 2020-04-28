//initial state

const initialState = {
  upVotes: 0,
  downVotes: 0,
}

//reducer

export default votesReducer({
  [VOTE_UP]: (state, action) => {
    return { vote: state.upVotes + 1 };
  },
 //short 
  [VOTE_DOWN]: ({ downVotes }) => ({ downVotes: downVotes - 1 })
}, initialState);