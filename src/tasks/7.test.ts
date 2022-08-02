import allAnagrams from './7'
import { describe, it, expect } from 'vitest'

describe('Являются ли все элементы в массиве анаграммами друг друга.', () => {
  it('[2, 1, 3] и [1, 2, 3] являются подмножеством', () => {
    expect(allAnagrams(['abcd', 'bdac', 'cabd'])).toBeTruthy()
  })
  it('[2, 1, 1, 3] и [1, 2, 3] являются подмножеством', () => {
    expect(allAnagrams(['abcd', 'bdXc', 'cabd'])).toBeFalsy()
  })
})
