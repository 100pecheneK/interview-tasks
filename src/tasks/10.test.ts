import { describe, it, expect } from 'vitest'
import isBalanced from './10'

describe('Проверит строку на сбалансированность скобок: {}, (), []', () => {
  it('Вернёт true если скобки сбалансированы', () => {
		expect(isBalanced('(x + y) - (4)')).toBeTruthy()
  })
  it('Вернёт true если скобки сбалансированы', () => {
		expect(isBalanced('(((10 ) ()) ((?)(:)))')).toBeTruthy()
  })
  it('Вернёт true если скобки сбалансированы', () => {
		expect(isBalanced('[{()}]')).toBeTruthy()
  })
  it('Вернёт false если скобки не сбалансированы', () => {
		expect(isBalanced('(50)(')).toBeFalsy()
  })
  it('Вернёт false если скобки не сбалансированы', () => {
		expect(isBalanced('[{]]}')).toBeFalsy()
  })
})
