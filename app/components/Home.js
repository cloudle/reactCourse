import React, {Component} from 'react';
import {connect} from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        This is Home! {this.props.name}
      </div>
    )
  }
}

export default connect((state) => ({name: state.application.name}))(Home)