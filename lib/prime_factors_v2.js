function getPrimeFactorsJSV2(n) {
  let primes = [];
  let primeFactors = [];

  // Criba de Eratóstenes para encontrar todos los números primos hasta sqrt(n)
  let sieve = new Array(Math.floor(Math.sqrt(n)) + 1).fill(true);
  sieve[0] = false;
  sieve[1] = false;
  for (let i = 2; i * i <= Math.sqrt(n); i++) {
    if (sieve[i]) {
      for (let j = i * i; j < sieve.length; j += i) {
        sieve[j] = false;
      }
    }
  }

  // Recorre los números primos y encuentra los factores primos de n
  for (let i = 2; i < sieve.length; i++) {
    if (sieve[i]) {
      primes.push(i);
      while (n % i === 0) {
        primeFactors.push(i);
        n /= i;
      }
    }
  }

  // Si queda algún factor primo mayor que la raíz cuadrada de n, es el último factor primo
  if (n > 1) {
    primeFactors.push(n);
  }

  return primeFactors;
}
