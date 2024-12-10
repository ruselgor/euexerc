function lcg(seed, iterations) {
  const a = 1103515245;
  const c = 12345;
  const m = 2 ** 31;

  let current = seed;
  const randomNumbers = [];

  for (let i = 0; i < iterations; i++) {
    current = (a * current + c) % m;
    randomNumbers.push(current / m);
  }

  return randomNumbers;
}

const seed = 42;
const iterations = 10;
const randomNumbers = lcg(seed, iterations);
console.log(randomNumbers);
