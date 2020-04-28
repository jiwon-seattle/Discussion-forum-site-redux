import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div>
      <h1>404</h1>
      <Link to="/">Back</Link>
    </div>
  );
}
