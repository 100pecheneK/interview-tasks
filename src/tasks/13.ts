export default function fibonacci(n: number) {
  const fib: number[] = [1, 1]

  if (n < 2) {
    return fib.slice(0, n)
  }

  for (let i = 3; i <= n; i++) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2])
  }

  return fib
}
