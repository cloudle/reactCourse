import React from 'react'
import {Link} from 'react-router'

var App = React.createClass({
  getInitialState() {
    return { count: 0 }
  },
  componentWillMount() {
    console.log('WillMount?', this.state.count);
    setInterval(() => {
      this.setState({count: this.state.count + 1});
    }, 1000);
  },
  render() {
    return (
      <div>
        <h1>My Awesome App!!! {'{'+this.state.count+'}'}</h1>
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