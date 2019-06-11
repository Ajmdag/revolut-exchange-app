import actionCreatorFactory from 'typescript-fsa'
import {IGetStateData} from '../sagas/exchangeCurrencies'

const ACF = actionCreatorFactory('@exchangeCurrencies')

export const exchangeCurrencies = ACF<IGetStateData>('exchange')
