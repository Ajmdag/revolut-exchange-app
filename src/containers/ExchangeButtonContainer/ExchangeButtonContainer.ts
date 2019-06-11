import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ExchangeButton} from '../../components/ExchangeButton/ExchangeButton'
import {IDispatch} from '../../store'
import {exchangeCurrenciesPrepare} from '../../store/actions/exchangeCurrenciesPrepare'

const mapDispatchToProps = (dispatch: IDispatch) => bindActionCreators({
    exchangeCurrenciesPrepare,
}, dispatch)

export const ExchangeButtonContainer =  connect(
    null,
    mapDispatchToProps,
)(ExchangeButton)
