import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {pushState} from 'redux-router'

//@connect((state) => ({}))
class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const {dispatch} = this.props;

    dispatch(pushState(null, '/parent/child/custom'));
  }

  render() {
    return (
      <div>
        <h1>My awesomeApp!!</h1>
        <ul>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/home">Home</Link></li>
        </ul>

        <a href="#" onClick={this.handleClick}>/parent/child/custom</a>

        {this.props.children}
      </div>
    )
  }
}

export default connect((state) => ({}))(App)