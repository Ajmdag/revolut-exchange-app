import React, {Component} from 'react'
import {connect} from 'react-redux'
import {IDispatch} from '../../store'
import {
  changeFromCurrencyQuantity,
  fetchRates,
} from '../../store/modules/App/app.actions'

import './CurrencyValueInput.css'

class CurrencyValueInput extends Component<ICurrencyValueInputProps> {

  public state = {
    inputValue: '',
  }

  public render() {
    return (
    <div className="CurrencyValueInput">
      <input
      disabled={this.props.currencyType === 'to'}
      className="CurrencyValueInput-Input"
      type="text"
      value={this.state.inputValue}
      maxLength={30}
      pattern="[0-9]*"
      onChange={this.handleChangeInput} />
    </div>
    )
  }

  public componentWillMount() {
    this.props.fetchRates()
  }

  private handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target

    if (target.validity.valid) {
      const inputValue = target.validity.valid ? target.value : this.state.inputValue
      this.setState({inputValue}, () => {
        if (this.props.currencyType === 'from') {
          this.props.changeFromCurrencyQuantity(this.state.inputValue)
        }
      })
    }
  }
}

const mapDispatchToProps = (dispatch: IDispatch): ICurrencyValueInputDispatchProps => ({
  changeFromCurrencyQuantity: (quantity: string) => dispatch(changeFromCurrencyQuantity(quantity)),
  fetchRates: () => dispatch(fetchRates()),
})

export default connect<null, ICurrencyValueInputDispatchProps>(
  null,
  mapDispatchToProps,
)(CurrencyValueInput)
