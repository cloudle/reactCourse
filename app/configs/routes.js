import React, {Component} from 'react'
import {render} from 'react-dom'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {Provider, connect} from 'react-redux'
import {reduxReactRouter, routerStateReducer, ReduxRouter, pushState} from 'redux-router'
import {Router, Route, IndexRoute} from 'react-router'
import {devTools} from 'redux-devtools'
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react'
import {createHistory} from 'history'

import App  from '../components/App'
import Parent from '../components/Parent'
import Main from '../components/Main'
import Home from '../components/Home'

const reducer = combineReducers({router: routerStateReducer});

const store = compose(
  //applyMiddleware(),
  reduxReactRouter({createHistory}),
  devTools()
)(createStore)(reducer);

class Root extends Component {
  render() {
    return (<div>
      <Provider store={store}>
        <ReduxRouter>
          <Route path="/" component={App} >
            <Route path="home" component={Home} />
            <IndexRoute component={Main} />
          </Route>
        </ReduxRouter>
      </Provider>

      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    </div>)
  }
}

global.App = App;
global.Name = "Cloud";

render(<Root />, document.getElementById('app'));