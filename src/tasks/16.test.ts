import { describe, it, expect } from 'vitest'
import groupBy from './16'

describe('Функция groupBy', () => {
  it('', () => {
    expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({
      '4': [4.2],
      '6': [6.1, 6.3],
    })
  })
  it('', () => {
    expect(groupBy(['one', 'two', 'three'], 'length')).toEqual({
      '3': ['one', 'two'],
      '5': ['three'],
    })
  })
})
