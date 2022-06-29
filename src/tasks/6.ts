type ArrayElementsType = number | string

export default function arraySubset(
  _source: ArrayElementsType[],
  subset: ArrayElementsType[]
): boolean {
  const source = [..._source]

  if (source.length < subset.length) {
    return false
  }

  for (let subsetIndex = 0; subsetIndex < subset.length; subsetIndex++) {
    const subsetElement = subset[subsetIndex]
    const sourceIndex = source.indexOf(subsetElement)
    if (sourceIndex === -1) {
      return false
    }
    source.splice(sourceIndex, 1)
  }
  return true
}
