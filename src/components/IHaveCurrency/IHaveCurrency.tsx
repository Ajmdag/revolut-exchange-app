import React, {Component} from 'react'
import {connect} from 'react-redux'

import './IHaveCurrency.css'

class IHaveCurrency extends Component<IIHaveCurrencyProps> {
  
  public render() {
    const {userMoney, fromCurrency, toCurrency, currencyType} = this.props

    return (
      <div className="IHaveCurrency">
      You have: {
        currencyType === 'from' &&
        `${userMoney[fromCurrency]} ${fromCurrency}`
      }
      {
        currencyType === 'to' &&
        `${userMoney[toCurrency]} ${toCurrency}`
      }
    </div>
    )
  }
}

const mapStateToProps = ({userMoney, fromCurrency, toCurrency}: IStore): IIHaveCurrencyStateProps => ({
  userMoney,
  fromCurrency,
  toCurrency
})

export default connect(
  mapStateToProps,
)(IHaveCurrency)
