import React, {Component} from 'react'
import {connect} from 'react-redux'

let mapState = (state) => ({

});

class LeftPane extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="left-pane">
      <div className="relative-wrapper">
        <div className="branding">
          branding
        </div>

        <div className="commands">
          <div>Commands,</div>
          <div>Cloud!</div>
        </div>
      </div>
    </div>)
  }
}

export default connect(mapState)(LeftPane);