import React, { Component } from 'react'
import { ExchangeButtonContainer } from '../../containers/ExchangeButtonContainer/ExchangeButtonContainer'
import CurrencyCard from '../CurrencyCard'
import ExchangeTitle from '../ExchangeTitle'

import './MainArea.css'

export class MainArea extends Component<any> {
  render() {

    return (
      <div className='MainArea'>
        <ExchangeTitle />
        <div className='MainArea-ExchangeZone'>
          <CurrencyCard currencyType='from' />
          <CurrencyCard currencyType='to' />
        </div>
        <div className='MainArea-Button'>
          <ExchangeButtonContainer />
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchRates()
    setInterval(() => {
      // this.props.fetchRates()
    }, 10000)
  }
}
