import React, {Component} from 'react'

export class ExchangeButton extends Component<IExchangeButtonDispatchProps> {
  render() {
    return (
      <button className='ExchangeButton' onClick={this.props.exchangeCurrenciesPrepare}>Exchange</button>
    )
  }
}
