export default function search(array: number[], target: number): number {
  let start = 0
  let end = array.length - 1

  if (target < array[start] || target > array[end]) return -1

  while (true) {
    if (target === array[start]) return start
    if (target === array[end]) return end
    if (end - start <= 1) return -1

    const middle = Math.floor((start + end) / 2)

    if (target > array[middle]) start = middle + 1
    else if (target < array[middle]) end = middle - 1
    else return middle
  }
}
