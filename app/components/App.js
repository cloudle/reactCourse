import React from 'react'
import {Link} from 'react-router'

var App = React.createClass({
  getInitialState() {
    return { count: 0 }
  },
  componentWillMount() {
    console.log('WillMount?', this.state.count);
    setInterval(this.tick, 1000);
  },
  tick() {
    this.setState({count: this.state.count + 1});
  },

  render() {
    return (
      <div>
        <h1>My awesomeApp! {'{'+this.state.count+'}'}</h1>
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