import React, {Component} from 'react'
import CurrencyCard from '../CurrencyCard'

import './CardsQueue.css'

class CardsQueue extends Component<ICardsQueueProps> {
  public render() {
    const {isFrom} = this.props

    return (
    <div className="CardsQueue">
      <CurrencyCard isFrom={isFrom}/>
      <CurrencyCard isFrom={isFrom}/>
      <CurrencyCard isFrom={isFrom}/>
    </div>
    )
  }
}

export default CardsQueue
