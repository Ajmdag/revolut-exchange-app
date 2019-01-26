interface IIHaveCurrencyOwnProps {
  currencyType: string
}

interface IIHaveCurrencyDispatchProps {

}

interface IIHaveCurrencyStateProps {
  userMoney: {
    EUR: number,
    USD: number,
    GBP: number,
  },
  fromCurrency: 'EUR' | 'GBP' | 'USD',
  toCurrency: 'EUR' | 'GBP' | 'USD'
}

interface IIHaveCurrencyProps extends
  IIHaveCurrencyOwnProps,
  IIHaveCurrencyDispatchProps,
  IIHaveCurrencyStateProps {}