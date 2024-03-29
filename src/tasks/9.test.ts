import { describe, it, expect } from 'vitest'
import search from './9'

describe('Возвращает индекс числа, если оно есть в массиве, иначе возвращает -1', () => {
  it('Переворачивает матрицу на 90 градусов', () => {
    expect(search([1, 3, 6, 13, 17], 12))
  })
  it('Переворачивает матрицу на 90 градусов', () => {
    expect(search([1, 3, 6, 13, 17], 13))
  })
})
