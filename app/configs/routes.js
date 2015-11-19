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
import applicationReducer from '../reducers/application'

const reducer = combineReducers({
  router: routerStateReducer,
  application: applicationReducer
});

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
            <Route path="parent" component={Parent} />
            <Route path="parent/:id" component={Parent} />
            <IndexRoute component={Main} />
          </Route>
        </ReduxRouter>
      </Provider>

      <DebugPanel top right bottom>
        <DevTools store={store} visibleOnLoad={false} monitor={LogMonitor} />
      </DebugPanel>
    </div>)
  }
}

global.Dispatch = store.dispatch;

render(<Root />, document.getElementById('app'));

import falcor from 'falcor'
import httpDataSource from 'falcor-http-datasource'

var model = new falcor.Model({source: new httpDataSource('/model.json')});

model.get("events[0..3]['name', 'description']").then((results) => {
  var items = results.json.events;

  for (let i of Object.keys(items)) {
    console.log(items[i]);
  }
});