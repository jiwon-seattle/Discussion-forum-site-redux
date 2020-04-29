import React from 'react';
import './Votes.css';
import { connect } from 'react-redux';
import {increment, decrement} from './actions/votes'

const Votes = ({ value, color, increment, decrement }) => {
  return (
    <div className="Vote">
      <h1 style={{ color }}>{value}</h1>
      <button onClick={() => this.props.increment()}>+</button>
      <button onClick={this.props.decrement()}>-</button>
    </div>
  );
};

export default Votes;