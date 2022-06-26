export default function isUnique(string: string): boolean {
  return new Set(string).size === string.length
}
