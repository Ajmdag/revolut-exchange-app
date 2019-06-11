import { put, select, takeLatest } from 'redux-saga/effects'
import { exchangeCurrencies } from '../actions/exchangeCurrencies'
import { exchangeCurrenciesPrepare } from '../actions/exchangeCurrenciesPrepare'

export interface IGetStateData {
    fromCurrency: 'EUR' | 'GBP' | 'USD',
    fromCurrencyQuantity: string | number,
    toCurrency: 'EUR' | 'GBP' | 'USD',
    toCurrencyQuantity: string | number,
}

const getStateData = (state: IStore): IGetStateData => {
    return {
        fromCurrency: state.fromCurrency,
        fromCurrencyQuantity: state.fromCurrencyQuantity,
        toCurrency: state.toCurrency,
        toCurrencyQuantity: state.toCurrencyQuantity,
    }
}

function* exchangeCurrenciesSaga() {
    const storeData = yield select(getStateData)
    yield put(exchangeCurrencies(storeData))
}

export function* watchExchangeCurrencies() {
    yield takeLatest(exchangeCurrenciesPrepare.type, exchangeCurrenciesSaga)
}
