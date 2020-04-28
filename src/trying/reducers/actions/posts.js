import {
  CREATE_POST, EDIT_POST, DELETE_POST
} from '../actionTypes/postsTypes'

export default (state = {}, action) => {
  const { author, content, timestamp, likes, dislikes } = action;
  switch(action.type) {
    case 'CREATE_POST':
      return Object.assign({}, state, {
        [id]: {
          author: author,
          content: content,
          timestamp: timestamp,
          id: id,
          dislikes: dislikes,
          likes: likes
        }
      })

      case 'EDIT_POST':
        return newState
      
      case 'DELETE_TICKET':
        const newState = { ...state };
        delete newState[id];
        return newState;
      default:
        return state;
  }
}
