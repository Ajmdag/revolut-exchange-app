import React, {Component} from 'react'
import CurrencySelector from '../CurrencySelector'
import CurrencyValueInput from '../CurrencyValueInput'

import './CurrencyCard.css'

class CurrencyCard extends Component<ICurrencyCardProps> {
  public render() {
    return (
    <div className="CurrencyCard">
      <CurrencyValueInput />
      <CurrencySelector currencyType={this.props.currencyType}/>
    </div>
    )
  }
}

export default CurrencyCard
