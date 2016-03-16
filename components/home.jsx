import React from 'react';
var ReactDOM = require('react-dom');

var Home = React.createClass({
  render: function() {
    return (
      <div>
        React Home
        {this.props.children}
        <Link to="/about">About</Link>
      </div>
    )
  }
});

export default Home