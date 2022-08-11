import {describe, it, expect} from 'vitest'
import add from './15'

describe('Складывает два числа', () => {
  it('1 + 2 = 3', () =>{ expect(add(1, 2)).toBe(3)})
  it('1 + 2 = 3', () =>{ expect(add(1)(2)).toBe(3)})
  it('1 + 2 = 3', () =>{ expect(add(1)()(2)).toBe(3)})
  it('1 + 2 = 3', () =>{ expect(add(1)()()()(2)).toBe(3)})
  it('1 + 2 = 3', () =>{ expect(add(1)()()()()()()()()()()()(2)).toBe(3)})
  it('1 + 2 = 3', () =>{ expect(add()(1)(2)).toBe(3)})
  it('1 + 2 = 3', () =>{ expect(add()()()()(1)(2)).toBe(3)})
  it('1 + 2 = 3', () =>{ expect(add()(1)()(2)).toBe(3)})
  it('1 + 2 = 3', () =>{ expect(add()()()()()(1)()()()(2)).toBe(3)})
})
