import React, {Component} from 'react'

class CurrencyCard extends Component<ICurrencyCardProps> {
  public render() {
    return (
    <div className="CurrencyCard">
      CurrencyCard
      {this.props.isFrom ? 'from' : 'to'}
    </div>
    )
  }
}

export default CurrencyCard
