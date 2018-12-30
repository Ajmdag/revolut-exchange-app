interface ICurrencyValueInputOwnProps {
  currencyType: string
}

interface ICurrencyValueInputStateProps {
  toCurrencyQuantity: number | string
}

interface ICurrencyValueInputDispatchProps {
  changeFromCurrencyQuantity: (quantity: string) => void
  countToCurrencyQuantity: () => void
}

interface ICurrencyValueInputProps extends
  ICurrencyValueInputOwnProps,
  ICurrencyValueInputStateProps,
  ICurrencyValueInputDispatchProps {}
