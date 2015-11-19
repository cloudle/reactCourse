import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {pushState} from 'redux-router'

import {changeName} from '../actions/applicationActions'

let mapState = (state) => ({
  name: state.application.name
});

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.changeApplicationNameClick = this.changeApplicationNameClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const {dispatch} = this.props;

    dispatch(pushState(null, '/parent/cloud'));
  }

  changeApplicationNameClick(event) {
    event.preventDefault();
    if (this.props.name != 'reactCourse') this.props.dispatch(changeName('reactCourse'));
  }

  render() {
    return (
      <div>
        <h1>My awesomeApp! {this.props.name}</h1>
        <span>{JSON.stringify(Object.keys(this.props))}</span>
        <ul>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/home">Home</Link></li>
        </ul>

        <a href="#" onClick={this.handleClick}>/parent/child/custom</a><br/>
        <a href="#" onClick={this.changeApplicationNameClick}>Change app Name</a>

        {this.props.children}
      </div>
    )
  }
}

export default connect(mapState)(App);