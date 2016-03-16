import React from 'react';
import { Link } from 'react-router'

var Login = React.createClass({
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



var divStyle = {
  color: 'white',
  backgroundImage: 'url(' + imgUrl + ')',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};