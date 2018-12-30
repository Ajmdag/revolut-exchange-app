interface ICurrencySelectorOwnProps {
  currencyType: string
}

interface ICurrencySelectorStateProps {
  fromCurrency: string
  toCurrency: string
}

interface ICurrencySelectorDispatchProps {
  changeFromCurrency: (arg: string) => void
  changeToCurrency: (arg: string) => void
  countToCurrencyQuantity: () => void
}

interface ICurrencySelectorProps extends
  ICurrencySelectorOwnProps,
  ICurrencySelectorStateProps,
  ICurrencySelectorDispatchProps {}
