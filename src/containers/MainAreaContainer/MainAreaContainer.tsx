import {connect} from 'react-redux'
import {MainArea} from '../../components/MainArea/MainArea'
import {IDispatch} from '../../store'
import {
    changeFromCurrency,
    changeToCurrency,
    fetchRates,
} from '../../store/modules/App/app.actions'

const mapStateToProps = (store: IStore): IMainAreaMapProps => ({
    fromCurrency: store.fromCurrency,
    toCurrency: store.toCurrency,
})

const mapDispatchToProps = (dispatch: IDispatch): IMainAreaDispatchProps => ({
    changeFromCurrency: (currency: string) => dispatch(changeFromCurrency(currency)),
    changeToCurrency: (currency: string) => dispatch(changeToCurrency(currency)),
    fetchRates: () => dispatch(fetchRates()),
})

export const MainAreaContainer =  connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainArea)
