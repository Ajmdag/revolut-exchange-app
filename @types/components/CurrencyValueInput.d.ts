interface ICurrencyValueInputOwnProps {
  currencyType: string
}

interface ICurrencyValueInputDispatchProps {
  changeFromCurrencyQuantity: (quantity: string) => void
}

interface ICurrencyValueInputProps extends
  ICurrencyValueInputOwnProps,
  ICurrencyValueInputDispatchProps {}
