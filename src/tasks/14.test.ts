import { describe, it, expect } from 'vitest'
import './14'

describe('bbind', () => {
  function sum(this: { a: number; b: number }, ...args: any) {
    return this.a + this.b + args
  }
  it('Function.prototype.bbind работает как Funciton.prototype.bind', () => {
    const bindedSum = sum.bbind({ a: 1, b: 2 }, 1, 2)
    expect(bindedSum(3)).toBe('31,2,3')
  })
})
