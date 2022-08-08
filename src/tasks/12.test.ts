import { describe, it, expect } from 'vitest'
import deepEqual from './12'

describe('Проверет на глубокое равенство 2 входящих параметров', () => {
  const source = { a: 1, b: { c: 1 } }
  const test1 = { a: 1, b: { c: 1 } }
  const test2 = { a: 1, b: { c: 2 } }
  it('Равенство двух объектов', () => {
    expect(deepEqual(source, test1)).toBeTruthy()
  })
  it('Неравенство двух объектов', () => {
    expect(deepEqual(source, test2)).toBeFalsy()
  })
  it('NaN и NaN равны', () => {
    expect(deepEqual(NaN, NaN)).toBeTruthy()
  })
  it('Неравенство строк', () => {
    expect(deepEqual('test', 'test!')).toBeFalsy()
  })
  it('Запуск без параметров поддерживается', () => {
    expect(deepEqual()).toBeTruthy()
  })
})
