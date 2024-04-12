function getPrimeFactors(n) {
  let isPrime = new Array(n + 1).fill(true);
  let primes = [];
  let count = 0;

  for (let i = 0; i <= n; i++) {
    isPrime[i] = true;
  }
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes[count++] = i;
      for (let j = i + i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  let primeFactors = [];
  let c = 0;
  for (let i = 0; i < count; i++) {
    if (n % primes[i] === 0) {
      primeFactors[c] = primes[i];
      c++;
    }
  }

  return primeFactors;
}
