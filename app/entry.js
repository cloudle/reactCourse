import React, {Component} from 'react'
import {render} from 'react-dom'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import {reduxReactRouter, routerStateReducer, ReduxRouter, pushState} from 'redux-router'
import {Router, Route, IndexRoute} from 'react-router'
import {devTools} from 'redux-devtools'
import {createHistory} from 'history'

import './styles/entry.styl'
import Root from './configs/routes'
import applicationReducer from './reducers/application'

const reducer = combineReducers({
  router: routerStateReducer,
  application: applicationReducer
});

const store = compose(
  //applyMiddleware(),
  reduxReactRouter({createHistory}),
  devTools()
)(createStore)(reducer);

global.Dispatch = store.dispatch;

render(<Root store={store} />, document.getElementById('app'));

import falcor from 'falcor'
import httpDataSource from 'falcor-http-datasource'

var model = new falcor.Model({source: new httpDataSource('/model.json')});

model.get("events[0..3]['name', 'description']").then((results) => {
  var items = results.json.events;

  for (let i of Object.keys(items)) {
    console.log(items[i]);
  }
});