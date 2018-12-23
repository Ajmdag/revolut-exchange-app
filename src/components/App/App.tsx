import React, {Component} from 'react'
import CardsQueue from '../CardsQueue'
import ExchangeButton from '../ExchangeButton'
import ExitButton from '../ExitButton'
import Header from '../Header'
import PriceStatus from '../PriceStatus'

import './App.css'

class App extends Component {
  public render() {
    return (
    <div className="App">
      <Header>
        <ExitButton />
        <PriceStatus />
        <ExchangeButton />
      </Header>
      <CardsQueue isFrom={true}/>
      <CardsQueue isFrom={false}/>
    </div>
    )
  }
}

export default App
