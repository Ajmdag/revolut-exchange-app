import React, {Component} from 'react'
import CurrencySelector from '../CurrencySelector'
import CurrencyValueInput from '../CurrencyValueInput'
import IHaveCurrency from '../IHaveCurrency'

import './CurrencyCard.css'

class CurrencyCard extends Component<ICurrencyCardProps> {
  public render() {
    return (
    <div className="CurrencyCard">
      <div className="CurrencyCard-ExchangeContainer">
        <CurrencyValueInput currencyType={this.props.currencyType}/>
        <CurrencySelector currencyType={this.props.currencyType}/>
      </div>
      <IHaveCurrency currencyType={this.props.currencyType}/>
    </div>
    )
  }
}

export default CurrencyCard
