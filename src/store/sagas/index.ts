import { SagaMiddleware } from 'redux-saga'
import { watchExchangeCurrencies } from './exchangeCurrencies'

export const runSagas = (middleWare: SagaMiddleware<{}>): void => {
    middleWare.run(watchExchangeCurrencies)
}
