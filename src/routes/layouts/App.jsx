import React from 'react';
import { Link } from 'react-router';

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">App</Link>
        </h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});

export default App;
