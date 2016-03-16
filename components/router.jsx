import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

// Components
import Home from './home.jsx'

const About =  React.createClass({
  render: function() {
    return (
      <div>About</div>
    )
  }
});

const Users =  React.createClass({
  render: function() {
    return (
      <div>About</div>
    )
  }
});

const User =  React.createClass({
  render: function() {
    return (
      <div>About</div>
    )
  }
});

const UnknownRoute =  React.createClass({
  render: function() {
    return (
      <div>About</div>
    )
  }
});


render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={UnknownRoute}/>
    </Route>
  </Router>
), document.getElementById('react-mount'))