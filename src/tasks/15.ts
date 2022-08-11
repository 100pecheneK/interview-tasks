type BFunc = <Y>(y?: Y) => Y extends number ? number : BFunc
type AFunc = <X, Y>(
  x?: X,
  y?: Y
) => X extends number ? (Y extends number ? number : BFunc) : AFunc

/**
 * Type '<X, Y>(x: X | undefined, y: Y | undefined) => number | BFunc | AFunc'
 * is not assignable to type
 * 'AFunc'.
 * ---
 * Type 'number | BFunc | AFunc'
 * is not assignable to type
 * 'X extends number ? Y extends number ? number : BFunc : AFunc'.
 * ---
 * Type 'number'
 * is not assignable to type
 * 'X extends number ? Y extends number ? number : BFunc : AFunc'.ts(2322)
 * ---
 * @ts-ignore*/
const add: AFunc = (x, y) => {
  if (typeof x !== 'number') return add
  if (typeof y !== 'number') return (y => add(x, y)) as BFunc
  return x + y
}

export default add

// Альтернативное решение
// const add: AFunc = (x, y) => {
//   if (typeof x !== 'number') return add
//   if (typeof y !== 'number') {
//     const addB: BFunc = y => {
//       if (typeof y !== 'number') return addB
//       return x + y
//     }
//     return addB
//   }
//   return x + y
// }
