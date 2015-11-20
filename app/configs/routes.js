import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {ReduxRouter} from 'redux-router'
import {Router, Route, IndexRoute} from 'react-router'
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react'

import App  from '../components/App'
import Parent from '../components/Parent'
import Main from '../components/Main'
import Home from '../components/Home'
import applicationReducer from '../reducers/application'

export default class Root extends Component {
  render() {
    return (<div className="router-wrapper">
      <Provider store={this.props.store}>
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
        <DevTools store={this.props.store} visibleOnLoad={false} monitor={LogMonitor} />
      </DebugPanel>
    </div>)
  }
}