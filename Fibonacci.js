// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  const sequence = [0, 1]

  for (let i = 2; i <= n; i++) {
    const a = sequence[sequence.length - 1]
    const b = sequence[sequence.length - 2]

    sequence.push(a + b)
  }

  return sequence[n]
}