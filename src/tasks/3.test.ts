import removeDupes from './3'
import { describe, it, expect } from 'vitest'


describe('Удаление всех повторяющихся значений в строке', () => {
  it('На входе abcd, на выходе abcd', () => {
    expect(removeDupes('abcd')).toEqual('abcd')
  })
  it('На входе aabbccdd, на выходе abcd', () => {
    expect(removeDupes('aabbccdd')).toEqual('abcd')
  })
  it('На входе abcddbca, на выходе abcd', () => {
    expect(removeDupes('abcddbca')).toEqual('abcd')
  })
  it('На входе abababcdcdcd, на выходе abcd', () => {
    expect(removeDupes('abababcdcdcd')).toEqual('abcd')
  })
})