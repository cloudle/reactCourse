import React, {Component} from 'react'
import {connect} from 'react-redux'

let mapState = (state) => ({

});

class RightPane extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="right-pane">
      <div className="relative-wrapper">
        <div className="commands">
          Commands
        </div>
      </div>
    </div>)
  }
}

export default connect(mapState)(RightPane);