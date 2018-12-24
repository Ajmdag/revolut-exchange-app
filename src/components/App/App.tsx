import React, {Component} from 'react'
// import ExchangeButton from '../ExchangeButton'
import ExchangeTitle from '../ExchangeTitle'
import MainArea from '../MainArea'
// import PriceStatus from '../PriceStatus'
import Sidebar from '../Sidebar'

import './App.css'

class App extends Component {
  public render() {
    return (
    <div className="App">
      <Sidebar />
      <MainArea>
        <ExchangeTitle>USD TO GBP</ExchangeTitle>
      </MainArea>
    </div>
    )
  }
}

export default App
