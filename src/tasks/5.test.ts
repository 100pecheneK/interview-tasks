import isStringRotated from './5'
import { describe, expect, it } from 'vitest'


describe('Повернута ли строка?', () => {
  it('scriptjava перевернутый вариант javascript', () => {
    expect(isStringRotated('javascript', 'scriptjava')).toBeTruthy()
  })
  it('iptjavascr перевернутый вариант javascript', () => {
    expect(isStringRotated('javascript', 'iptjavascr')).toBeTruthy()
  })
  it('java не перевернутый вариант javascript', () => {
    expect(isStringRotated('javascript', 'java')).toBeFalsy()
  })
})
