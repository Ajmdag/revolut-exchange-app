import React, {Component} from 'react'
import {connect} from 'react-redux'
import {IDispatch} from '../../store'
import {
  changeFromCurrency,
  changeToCurrency,
  countToCurrencyQuantity,
} from '../../store/modules/App/app.actions'

class CurrencySelector extends Component<ICurrencySelectorProps> {

  public state = {
    selectedValue: '',
  }

  public render() {
    return (
    <div className="CurrencySelector">
      <select onChange={this.handleChangeSelect} name="" id="">
        <option>USD</option>
        <option>EUR</option>
        <option>GBP</option>
      </select>
    </div>
    )
  }

  private handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      currencyType,
      changeToCurrency: doChangeToCurrency,
      changeFromCurrency: doChangeFromCurrency,
      countToCurrencyQuantity: doCountToCurrencyQuantity,
    } = this.props

    this.setState({
      selectedValue: event.target.value,
    }, () => {
      if (currencyType === 'to') {
        doChangeToCurrency(this.state.selectedValue)
      }
      else if (currencyType === 'from') {
        doChangeFromCurrency(this.state.selectedValue)
      }
      doCountToCurrencyQuantity()
    })
  }
}

const mapStateToProps = ({
  fromCurrency: fromCurrency,
  toCurrency: toCurrency,
}: IStore): ICurrencySelectorStateProps => ({
  fromCurrency,
  toCurrency,
})

const mapDispatchToProps = (dispatch: IDispatch): ICurrencySelectorDispatchProps => ({
  changeFromCurrency: (currency: string) => dispatch(changeFromCurrency(currency)),
  changeToCurrency: (currency: string) => dispatch(changeToCurrency(currency)),
  countToCurrencyQuantity: () => dispatch(countToCurrencyQuantity()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencySelector)
