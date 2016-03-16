import React from 'react';
var ReactDOM = require('react-dom');

var MainContainer = React.createClass({
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

var mainContainer = ReactDOM.render(
  <MainContainer />,
  document.getElementById('react-mount')
);