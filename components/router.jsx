import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'


// Components
var Login = React.createClass({
  render: function() {
    return (
      <div>
        React Login
        {this.props.children}
        <a href="/authorize">Authorize</a>
        <Link to="/about">About</Link>
      </div>
    )
  }
});

class About extends React.Component {
 render() {
  return <div onClick={this._handleClick}>About
  </div>;
 }
 _handleClick() {
  console.log(Home);
 }
}

const Users =  React.createClass({
  render: function() {
    return (
      <div>Users</div>
    )
  }
});

const User =  React.createClass({
  render: function() {
    return (
      <div>User</div>
    )
  }
});

const UnknownRoute =  React.createClass({
  render: function() {
    return (
      <div>Unknown Route</div>
    )
  }
});


render((
  <Router history={browserHistory}>
    <Route path="/" component={Login}>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={UnknownRoute}/>
    </Route>
  </Router>
), document.getElementById('react-mount'))