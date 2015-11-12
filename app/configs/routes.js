import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute} from 'react-router'
import App  from '../components/App'
import Main from '../components/Main'
import Home from '../components/Home'

var routes = (
  <Router>
    <Route path="/" component={App} >
      <Route path="home" component={Home} />
      <IndexRoute component={Main} />
    </Route>
  </Router>
);

render(routes, document.getElementById('app'));