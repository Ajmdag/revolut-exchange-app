import React, {Component} from 'react'
import MainArea from '../MainArea'
import Sidebar from '../Sidebar'

import './App.css'

class App extends Component {
  public render() {
    return (
    <div className="App">
      <Sidebar />
      <MainArea />
    </div>
    )
  }
}

export default App
