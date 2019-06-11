import actionCreatorFactory from 'typescript-fsa'

const ACF = actionCreatorFactory('@exchangeCurrencies')

export const exchangeCurrenciesPrepare = ACF('prepare')
