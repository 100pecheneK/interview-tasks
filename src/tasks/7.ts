export default function allAnagrams(array: string[]): boolean {
  const sortedArray = array.map(s => s.split('').sort().join())
  for (let i = 0; i < sortedArray.length - 1; i++) {
    if (sortedArray[i] !== sortedArray[i + 1]) return false
  }
	return true
}
