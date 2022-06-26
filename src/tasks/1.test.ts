import isUnique from './1'
import { describe, it, expect } from 'vitest'

describe('Уникальность всех символов в строке', () => {
  it('Символы abcdef являются уникальными', () => {
    expect(isUnique('abcdef')).toBeTruthy()
  })
  it('Символы 1234567 являются уникальными', () => {
    expect(isUnique('1234567')).toBeTruthy()
  })
  it('Символы abcABC являются уникальными', () => {
    expect(isUnique('abcABC')).toBeTruthy()
  })
  it('Символы abcadef не являются уникальными', () => {
    expect(isUnique('abcadef')).toBeFalsy()
  })
})
