type ItemType = any

type StorageType = {
  [l: number]: ItemType
}

export default class HashTable {
  _storage: StorageType = {}
  _first: number = 0
  _last: number = 0

  enqueue(item: ItemType) {
    this._storage[this._last] = item
    this._last++
  }

  dequeue() {
    const item = this._storage[this._first]
    delete this._storage[this._first]
    this._first++
    return item
  }

  get size() {
    return this._last - this._first
  }
}
