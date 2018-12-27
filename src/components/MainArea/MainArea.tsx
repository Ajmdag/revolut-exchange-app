import React, {Component} from 'react'
import {connect} from 'react-redux'
import {IDispatch} from '../../store'
import {
  changeFromCurrency,
  changeToCurrency,
} from '../../store/modules/App/app.actions'
import CurrencyCard from '../CurrencyCard'
import ExchangeTitle from '../ExchangeTitle'

import './MainArea.css'

class MainArea extends Component<any> {
  public render() {

    return (
    <div className="MainArea">
      <ExchangeTitle />
      <CurrencyCard />
      <CurrencyCard />
      {/* <h1>{this.props.changeFromCurrency()}</h1> */}
    </div>
    )
  }
}

const mapStateToProps = ({
  fromCurrency: fromCurrency,
  toCurrency: toCurrency,
}: IStore) => ({
  fromCurrency,
  toCurrency,
})

const mapDispatchToProps = (dispatch: IDispatch) => ({
  changeFromCurrency: (currency: string) => dispatch(changeFromCurrency(currency)),
  changeToCurrency: (currency: string) => dispatch(changeToCurrency(currency)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainArea)
