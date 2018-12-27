interface ICurrencyValueInputOwnProps {
  currencyType: string
}

interface ICurrencyValueInputDispatchProps {
  changeFromCurrencyQuantity: (quantity: string) => void
  fetchRates: () => any
}

interface ICurrencyValueInputProps extends
  ICurrencyValueInputOwnProps,
  ICurrencyValueInputDispatchProps {}
