import { describe, it, expect } from 'vitest'
import rotate, { rotate180, rotate270 } from './8'

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
const rotated90Matrix = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
]
const rotated180Matrix = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
]
const rotated270Matrix = [
  [3, 6, 9],
  [2, 5, 8],
  [1, 4, 7],
]

describe('Принимает матрицу 3х3 и переворачивает на 90 градусов по часовой стрелке', () => {
  it('Переворачивает матрицу на 90 градусов', () => {
    expect(rotate(matrix)).toEqual(rotated90Matrix)
  })
})

describe('Принимает матрицу 3х3 и переворачивает на 180 градусов по часовой стрелке', () => {
  it('Переворачивает матрицу на 180 градусов', () => {
    expect(rotate180(matrix)).toEqual(rotated180Matrix)
  })
})

describe('Принимает матрицу 3х3 и переворачивает на 270 градусов по часовой стрелке', () => {
  it('Переворачивает матрицу на 270 градусов', () => {
    expect(rotate270(matrix)).toEqual(rotated270Matrix)
  })
})
