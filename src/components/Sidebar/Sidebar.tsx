import React, {Component} from 'react'
import ExitButton from '../ExitButton'
import Logo from '../Logo'

import './Sidebar.css'

class Sidebar extends Component {
  public render() {

    return (
    <div className="Sidebar">
      <Logo />
      <ExitButton />
    </div>
    )
  }
}

export default Sidebar
