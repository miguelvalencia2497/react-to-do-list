import React from 'react';
import { Link } from 'react-router-dom';

export class About extends React.Component {
  render() {
    return (
      <div>
        <Link to={'/'}>Home</Link>
        <h2>About App</h2>
        <p>A simple to do list application created using React JS</p>
      </div>
    );
  }
}
