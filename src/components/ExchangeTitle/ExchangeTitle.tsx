import React, {Component} from 'react'
import {connect} from 'react-redux'
import {IDispatch} from '../../store'
import {
  changeFromCurrency,
  changeToCurrency,
} from '../../store/modules/App/app.actions'
import './ExchangeTitle.css'

class ExchangeTitle extends Component<IExchangeTitleProps> {
  public render() {
    return (
    <div className="ExchangeTitle">
      <span>{this.props.toCurrency}</span>
      <img className="ExchangeTitle-Image" src="./assets/arrow.svg" alt=""/>
      <span>{this.props.fromCurrency}</span>
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
)(ExchangeTitle)
