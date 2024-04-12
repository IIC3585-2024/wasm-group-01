function getPrimeFactorsJS(number) {
  console.log("EJECUTANDO EN JS");

  const primes = [];

  while (number % 2 === 0) {
    primes.push(2);
    number /= 2;
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    while (number % i === 0) {
      primes.push(i);
      number /= i;
    }
  }

  if (number > 2) primes.push(number);

  return primes;
}

function getPrimeFactorsC(number) {
  console.log("EJECUTANDO EN C");

  const size = 500;
  const getPrimeFactors = Module.cwrap(
    "getPrimeFactors", // C function name
    "[bigint]", // Return data type (pointer)
    ["bigint", "number"], // arg data type
  );

  const resultPointer = getPrimeFactors(BigInt(number), size);
  const resultArray = new BigInt64Array(Module.HEAP32.buffer, resultPointer, size);
  Module._free(resultPointer);

  return resultArray.slice(0, resultArray.findIndex((pred) => pred === -1n));
}

export { getPrimeFactorsJS, getPrimeFactorsC };
