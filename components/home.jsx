import React from 'react';
var ReactDOM = require('react-dom');

var Home = React.createClass({
  getInitialState: function() {
    return {}
  },
  updateState: function(data) {
    this.setState(data)
  },
  render: function() {
    return (
      <div>
        React is working
      </div>
    )
  }
});

export default Home