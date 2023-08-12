export const convertToTenThousand = (number: number) => {
  if (number < 10000) {
    return number.toString()
  } else {
    const quotient = Math.floor(number / 10000)
    const convertedNumber = `${quotient}万`
    return convertedNumber
  }
}
