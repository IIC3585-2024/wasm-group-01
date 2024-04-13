// default lenguage
let selectedLenguage = "C/C++";

function changeLenguage() {
  const btn = document.getElementById("changeLenguageBton");
  if (btn.textContent === "C/C++") {
    selectedLenguage = "JavaScript";
    btn.textContent = "JavaScript";
  } else {
    btn.textContent = "JavaScript";
    selectedLenguage = "C/C++";
    btn.textContent = "C/C++";
  }
  console.log("Lenguaje actualizado a: " + selectedLenguage);
}

function generatePrimeNumbers() {
  if (selectedLenguage === "C/C++") {
    console.log("EJECUTANDO EN C");
    generatePrimeNumbersInC();
  } else {
    console.log("EJECUTANDO EN JS");
    generatePrimeNumbersInJS();
  }
}

function generatePrimeNumbersInC() {
  const start = performance.now();
  const input = document.getElementById("Input").value;
  const number = parseInt(input);
  console.log(`Number: ${number}`);

  var resultPointer = Module.ccall(
    "getPrimeFactors", // C function name
    "number", // Return data type (pointer)
    ["number"], // arg data type
    [number] // arg values
  );

  // Check data values using pointer
  var resultArray = [];
  for (var i = 0; i < number; ++i) {
    var value = Module.HEAP32[resultPointer / 4 + i]; // 4 bytes for each int
    if (value === -1) {
      break;
    }
    resultArray.push(value);
  }

  Module._free(resultPointer);

  const area = document.getElementById("results");
  area.textContent = resultArray;
  console.log(resultArray);
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
  const executionTime = document.getElementById("time");
  executionTime.textContent = `${end - start} ms`;
}

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

function generatePrimeNumbersInJS() {
  const start = performance.now();
  const input = document.getElementById("Input").value;
  const number = parseInt(input);
  console.log(`Number: ${number}`);

  let resultArray = getPrimeFactorsJSV2(number);

  const area = document.getElementById("results");
  area.textContent = resultArray;
  console.log(resultArray);
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
  const executionTime = document.getElementById("time");
  executionTime.textContent = `${end - start} ms`;
}
