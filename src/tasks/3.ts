export default function removeDupes(str: string) {
  return Array.from(new Set(str)).join('')
}

