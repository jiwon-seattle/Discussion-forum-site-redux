import React from 'react';

export default function Votes({vote, upVote, downVote, redirectToError}){
  return (
    <div>
      <p>{vote}</p>
      <button onClick={() => upVote()}>+</button>
      <button onClick={() => downVote()}>-</button>
    </div>
  )
}

<button onClick={() => redirectToError()} >오류 페이지</button>