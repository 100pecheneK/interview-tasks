type FlatArray<T> = T extends Array<infer R> ? FlatArray<R> : T

export default function flatten<T>(array: T): FlatArray<T>[] {
  if (!Array.isArray(array)) {
    return [<FlatArray<T>>(<unknown>array)]
  }
  const result: FlatArray<T>[] = []
  array.forEach(element => {
    if (Array.isArray(element)) {
      const flat = flatten(element)
      flat.forEach(e => result.push(e))
    } else {
      result.push(element)
    }
  })
  return result
}
