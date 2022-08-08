import { describe, it, expect } from 'vitest'
import Queue from './11_1'

describe('Очередь с О(1) сложностью операций', () => {
  const queue = new Queue()
  queue.enqueue('1')
  queue.enqueue('2')
  queue.enqueue('3')
  it('Добавлят элементы в конец очереди', () => {
    expect(queue._tail!.item).toEqual('3')
  })
  it('Удаляет и возвращает первый элемент из очереди', () => {
    expect(queue.dequeue()).toEqual('1')
  })
  it('Возвращает размер очереди', () => {
    expect(queue.size).toEqual(2)
  })
})
