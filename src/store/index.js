import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import logger from 'redux-logger';
import votesReducer from '../reducers/votes'

export default function createStore(history){
  return reduxCreateStore(
    combineReducers({
      votes: votesReducer,
      router: routerReducer
    }),
    applyMiddleware(
      logger,
      routerMiddleware(history)
    )
  )
}