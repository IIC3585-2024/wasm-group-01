import O0 from "../func/prime_factor_o0.js";
import O1 from "../func/prime_factor_o1.js";
import O2 from "../func/prime_factor_o2.js";
import O3 from "../func/prime_factor_o3.js";

const getPrimeFactorsJS = (numberString) => {
  let number = parseInt(numberString);
  const primes = [];

  while (number % 2 === 0) {
    primes.push(2);
    number /= 2;
  }

  for (let i = 3; i*i <= number; i = i + 2) {
    while (number % i === 0) {
      primes.push(i);
      number /= i;
    }
  }

  if (number > 2) primes.push(number);

  return primes;
}

const getPrimeFactorsC = (module) => (numberString) => {
  const size = 100;
  const getPrimeFactors = module.cwrap(
    "getPrimeFactors", // C function name
    "[number]", // Return data type (pointer)
    ["number", "number"], // arg data type
  );

  const resultPointer = getPrimeFactors(parseFloat(numberString), size);
  const result = [];
    for (let i = 0; i < size; i++) {
        result.push(module.getValue(resultPointer + i * 8, 'double'));
    }
  module._free(resultPointer);

  return result.slice(0, result.findIndex((pred) => pred === -1));
}

const getPrimeFactorsCO0 = getPrimeFactorsC(await O0());
const getPrimeFactorsCO1 = getPrimeFactorsC(await O1());
const getPrimeFactorsCO2 = getPrimeFactorsC(await O2());
const getPrimeFactorsCO3 = getPrimeFactorsC(await O3());

export {
  getPrimeFactorsJS,
  getPrimeFactorsCO0,
  getPrimeFactorsCO1,
  getPrimeFactorsCO2,
  getPrimeFactorsCO3,
}
