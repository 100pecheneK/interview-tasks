type MatrixType = number[][]

export default function rotate(matrix: MatrixType): MatrixType {
  const rotatedMatrix: MatrixType = Array.from(
    { length: matrix.length },
    () => []
  )
  matrix.forEach(row => row.forEach((_, i) => rotatedMatrix[i].unshift(row[i])))
  return rotatedMatrix
}

export function rotate180(matrix: MatrixType): MatrixType {
  const reversedMatrix: MatrixType = []
  matrix.forEach(row => reversedMatrix.unshift([...row]))
  return reversedMatrix.map(row => row.reverse())
}

export function rotate270(matrix: MatrixType): MatrixType {
  const rotatedMatrix: MatrixType = Array.from(
    { length: matrix.length },
    () => []
  )
  matrix.forEach(row =>
    row.forEach((_, i) => rotatedMatrix[matrix.length - 1 - i].push(row[i]))
  )
  return rotatedMatrix
}
