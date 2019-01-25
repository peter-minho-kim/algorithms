// In DNA strings, symbols "A" and "T" are complements of each other, 
// as "C" and "G".You have function with one side of the DNA(string, 
// except for Haskell); you need to get the other complementary side.
// DNA strand is never empty or there is no DNA at all(again, 
// except for Haskell).

function DNAStrand(dna) {
  let answer = ''

  const dnaObj = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  }

  for (let char of dna) {
    answer += dnaObj[char]
  }

  return answer
}