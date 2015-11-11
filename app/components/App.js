import React from 'react'
import {Link} from 'react-router'

var App = React.createClass({
  render() {
    return (
      <div>
        <h1>My App</h1>
        <ul>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/home">Home</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
});

export default App