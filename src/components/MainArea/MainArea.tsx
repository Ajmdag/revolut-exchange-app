import React, {Component} from 'react'
import {connect} from 'react-redux'
import {IDispatch} from '../../store'
import {
  changeFromCurrency,
  changeToCurrency,
  fetchRates,
} from '../../store/modules/App/app.actions'
import CurrencyCard from '../CurrencyCard'
import ExchangeTitle from '../ExchangeTitle'

import './MainArea.css'

class MainArea extends Component<any> {
  public render() {

    return (
    <div className="MainArea">
      <ExchangeTitle />
      <div className="MainArea-ExchangeZone">
        <CurrencyCard currencyType="from"/>
        <CurrencyCard currencyType="to"/>
      </div>
    </div>
    )
  }

  public componentDidMount() {
    // this.props.fetchRates()
    setInterval(() => {
      // this.props.fetchRates()
    }, 10000)
  }
}

const mapStateToProps = ({
  fromCurrency: fromCurrency,
  toCurrency: toCurrency,
}: IStore) => ({
  fromCurrency,
  toCurrency,
})

const mapDispatchToProps = (dispatch: IDispatch): IMainAreaDispatchProps => ({
  changeFromCurrency: (currency: string) => dispatch(changeFromCurrency(currency)),
  changeToCurrency: (currency: string) => dispatch(changeToCurrency(currency)),
  fetchRates: () => dispatch(fetchRates()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainArea)
