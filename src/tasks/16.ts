type GroupType<E> = {
  [key: string]: E[]
}

export default function groupBy<E>(
  elements: E[],
  fn: keyof E | Function
): GroupType<E> {
  return elements.reduce<GroupType<E>>((prev, curr) => {
    const key = typeof fn === 'function' ? fn(curr) : curr[fn]
    if (!prev[key]) {
      prev[key] = []
    }
    prev[key].push(curr)
    return prev
  }, {})
}
