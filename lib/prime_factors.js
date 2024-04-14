import O0 from "../func/prime_factor_o0.js";
import O1 from "../func/prime_factor_o1.js";
import O2 from "../func/prime_factor_o2.js";
import O3 from "../func/prime_factor_o3.js";

const getPrimeFactorsJS = (numberString) => {
  let number = Number(numberString);
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

const getPrimeFactorsC = (module) => (number) => {
  const size = 100;
  const getPrimeFactors = module.cwrap(
    "getPrimeFactors", // C function name
    "[bigint]", // Return data type (pointer)
    ["bigint", "number"], // arg data type
  );

  const resultPointer = getPrimeFactors(BigInt(number), size);
  const resultArray = new BigInt64Array(module.HEAP32.buffer, resultPointer, size);
  module._free(resultPointer);

  return resultArray.slice(0, resultArray.findIndex((pred) => pred === -1n));
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
