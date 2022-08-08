type ItemType = any
type NodeType = {
  item: ItemType
  next: NodeType
} | null

export default class Queue {
  _size: number = 0
  _head: NodeType = null
  _tail: NodeType = null

  enqueue(item: ItemType) {
    const node = {
      item,
      next: null,
    }
    if (this._size === 0) {
      this._head = node
      this._tail = node
    } else {
      this._tail!.next = node
      this._tail = node
    }
    this._size++
  }

  dequeue() {
    if (this._size === 0) return
    const item = this._head!.item
    this._head = this._head!.next
    this._size--
    return item
  }

  get size() {
    return this._size
  }
}



