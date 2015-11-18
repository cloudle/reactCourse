import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {pushState} from 'redux-router'

export default class Parent extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const {params: {id}} = this.props;
    return (
      <div>
        <h2>Child</h2>
        {id && <p>{id}</p>}
      </div>
    )
  }
};