import highestFrequency from './4'
import { describe, it, expect } from 'vitest'

describe('Какая строка встречается чаще всего', () => {
  it('Тест 1', () => {
    expect(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])).toEqual('c')
  })
  it('Тест 2', () => {
    expect(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])).toEqual('abc')
  })
  it("Тест 3", () => {
    expect(highestFrequency(['abc', 'def'])).toEqual('abc')
  })
  it("Тест 4", () => {
    expect(
      highestFrequency([
        'abc',
        'abc',
        'def',
        'def',
        'def',
        'ghi',
        'ghi',
        'ghi',
        'ghi',
      ])
    ).toEqual('ghi')
  })
})
