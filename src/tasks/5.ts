export default function isStringRotated(source: string, test: string) {
  return source.length === test.length && (source + source).includes(test)
}
