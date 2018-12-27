import React, {Component} from 'react'
import CurrencySelector from '../CurrencySelector'
import CurrencyValueInput from '../CurrencyValueInput'

class CurrencyCard extends Component {
  public render() {
    return (
    <div className="CurrencyCard">
      CurrencyCard
      <CurrencyValueInput />
      <CurrencySelector />
    </div>
    )
  }
}

export default CurrencyCard
