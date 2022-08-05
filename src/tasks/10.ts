type AvailableParenthesesType = {
  open: string
  close: string
}

function compareParentheses(
  parentheses: AvailableParenthesesType[],
  open: string,
  close: string
): boolean {
  for (let i = 0; i < parentheses.length; i++) {
    if (parentheses[i].open === open && parentheses[i].close === close) {
      return true
    }
  }
  return false
}

export default function isBalanced(string: string) {
  const availableParentheses: AvailableParenthesesType[] = [
    { open: '(', close: ')' },
    { open: '[', close: ']' },
    { open: '{', close: '}' },
  ]
  const availableOpenParentheses: string[] = []
  const availableCloseParentheses: string[] = []
  availableParentheses.forEach(p => {
    availableOpenParentheses.push(p.open)
    availableCloseParentheses.push(p.close)
  })
  const parentheses: string[] = []
  string.split('').forEach(symbol => {
    if (availableOpenParentheses.includes(symbol)) {
      parentheses.push(symbol)
    }
    if (
      availableCloseParentheses.includes(symbol) &&
      compareParentheses(
        availableParentheses,
        parentheses[parentheses.length - 1],
        symbol
      )
    ) {
      parentheses.pop()
    }
  })

  return !parentheses.length
}