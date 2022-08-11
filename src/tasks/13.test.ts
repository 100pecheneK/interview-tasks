import { describe, it, expect } from 'vitest'
import fibonacci from './13'

describe('Генерирует последовательность Фиббоначи длинны n', () => {
  it('8 чисел = 1, 1, 2, 3, 5, 8, 13, 21', () => {
    expect(fibonacci(8)).toEqual([1, 1, 2, 3, 5, 8, 13, 21])
  })
  it('1 число = 1', () => {
    expect(fibonacci(1)).toEqual([1])
  })
  it('2 числа = 1, 1', () => {
    expect(fibonacci(2)).toEqual([1, 1])
  })
  it('0 чисел = []', () => {
    expect(fibonacci(0)).toEqual([])
  })
})
