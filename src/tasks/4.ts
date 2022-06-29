type StringRepetitionType = {
  [key: string]: number
}
export default function highestFrequency(array: string[]) {
  const stringRepetition: StringRepetitionType = {}
  let maxRepetition = 0
  let maxRepetitionString = array[0]
  array.forEach(string => {
    if (stringRepetition[string]) {
      stringRepetition[string]++
    } else {
      stringRepetition[string] = 1
    }

    if (stringRepetition[string] > maxRepetition) {
      maxRepetition = stringRepetition[string]
      maxRepetitionString = string
    }
  })

  return maxRepetitionString
}
