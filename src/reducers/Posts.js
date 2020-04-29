import {v4} from 'uuId';

const POST_SAVE = "SAVE";
const POST_REMOVE = "REMOVE";
const POST_READ = "READ";
const POST_LIST = "LIST";

export const post_save = (data) => ({type: POST_SAVE, data});

export const post_remove = (postId) => ({type: POST_REMOVE, postId : postId});

export const post_read = (postId) => ({type: POST_READ, postId : postId});

export const post_list = () => ({type: POST_LIST});

const initialState = {
  posts : [
    {
      postId: 1,
      author: "Jiwon",
      content: "Earth is round",
      date: new Date()
    },
    {
      postId: 2,
      author: "Sewon",
      content: "Cat is the best animal",
      date: new Date()
    }
  ],
  selectedPost: {}
};

export default function postReducer(state=initialState, action){
  const posts = state.posts;

  switch(action.type){
    case POST_SAVE:
      const data = action.data;
      if (!data.postId){
        return {posts: posts.concat({...data, postId: v4(), date: new Date()}), selectedPost: {}};
      }
      return {...state, posts: posts.map(row=>data.postId === row.postId ? {...data} : row), selectedPost: {}};
      case POST_REMOVE:
        return {...state, posts: posts.filter(row => row.postId!== action.postId), selectedPost: {}}
      case POST_READ:
        return {
          ...state,
          selectedPost: posts.find(row=> row.postId === action.postId)
        }
      default:
        return state;
  }
}