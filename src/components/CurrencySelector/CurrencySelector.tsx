import React, {Component} from 'react'
import {connect} from 'react-redux'
import {IDispatch} from '../../store'
import {
  changeFromCurrency,
  changeToCurrency,
} from '../../store/modules/App/app.actions'

class CurrencySelector extends Component<ICurrencySelector> {

  public state = {
    selectedValue: 'USD',
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
    
    this.setState({
      selectedValue: event.target.value,
    }, () => {
      this.props.changeFromCurrency(this.state.selectedValue)
    })
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
)(CurrencySelector)
