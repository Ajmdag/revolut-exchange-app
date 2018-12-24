import React, {Component} from 'react'

import './MainArea.css'

class MainArea extends Component {
  public render() {

    return (
    <div className="MainArea">
      MAIN AREA
      {this.props.children}
    </div>
    )
  }
}

export default MainArea
