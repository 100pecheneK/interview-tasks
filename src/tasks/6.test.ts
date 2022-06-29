import arraySubset from './6'
import { describe, it, expect } from 'vitest'

describe('Является ли массив подмножеством другого массива', () => {
  it('[2, 1, 3] и [1, 2, 3] являются подмножеством', () => {
    expect(arraySubset([2, 1, 3], [1, 2, 3])).toBeTruthy()
  })
  it('[2, 1, 1, 3] и [1, 2, 3] являются подмножеством', () => {
    expect(arraySubset([2, 1, 1, 3], [1, 2, 3])).toBeTruthy()
  })
  it('[1, 1, 1, 3] и [1, 3, 3] не являются подмножеством', () => {
    expect(arraySubset([1, 1, 1, 3], [1, 3, 3])).toBeFalsy()
  })
  it('[1, 2, 4] и [1, 2, 3] не являются подмножеством', () => {
    expect(arraySubset([1, 2, 4], [1, 2, 3])).toBeFalsy()
  })
})
