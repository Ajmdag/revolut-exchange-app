import React, {Component} from 'react'
import {connect} from 'react-redux'
import {IDispatch} from '../../store'
import {
  changeFromCurrencyQuantity,
  countToCurrencyQuantity,
} from '../../store/modules/App/app.actions'

import './CurrencyValueInput.css'

class CurrencyValueInput extends Component<ICurrencyValueInputProps> {

  public state = {
    inputValue: '',
  }

  public render() {
    const {currencyType, toCurrencyQuantity} = this.props
    const inputValue = currencyType === 'to' ? toCurrencyQuantity : this.state.inputValue

    return (
    <div className="CurrencyValueInput">
      <input
      disabled={currencyType === 'to'}
      className="CurrencyValueInput-Input"
      type="text"
      value={inputValue}
      maxLength={30}
      pattern="[0-9]*"
      onChange={this.handleChangeInput} />
    </div>
    )
  }

  public componentDidUpdate() {
    if (this.props.currencyType === 'to' && this.state.inputValue !== '') {
      this.props.countToCurrencyQuantity()
    }
  }

  private handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target

    const {
      currencyType,
      changeFromCurrencyQuantity: doChangeFromCurrencyQuantity,
      countToCurrencyQuantity: doCountToCurrencyQuantity,
    } = this.props

  // validate *from* field to include only numbers
  if (currencyType === 'from' && target.validity.valid) {
    const inputValue = target.validity.valid ? target.value : this.state.inputValue
    this.setState({inputValue}, () => {
        doChangeFromCurrencyQuantity(this.state.inputValue)
        doCountToCurrencyQuantity()
      })
    }
  }
}

const mapStateToProps = ({
  toCurrencyQuantity: toCurrencyQuantity,
  ratesData: ratesData,
}: IStore): ICurrencyValueInputStateProps => ({
  ratesData,
  toCurrencyQuantity,
})

const mapDispatchToProps = (dispatch: IDispatch): ICurrencyValueInputDispatchProps => ({
  changeFromCurrencyQuantity: (quantity: string) => dispatch(changeFromCurrencyQuantity(quantity)),
  countToCurrencyQuantity: () => dispatch(countToCurrencyQuantity()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrencyValueInput)
