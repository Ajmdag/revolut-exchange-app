import React, {Component} from 'react'
import {MainAreaContainer} from '../../containers/MainAreaContainer/MainAreaContainer'
import Sidebar from '../Sidebar'

import './App.css'

class App extends Component {
  render() {
    return (
    <div className='App'>
      <Sidebar />
      <MainAreaContainer />
    </div>
    )
  }
}

export default App
