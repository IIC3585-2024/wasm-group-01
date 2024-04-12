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

function getPrimeFactorsJS(n) {
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

function generatePrimeNumbersInJS() {
  const start = performance.now();
  const input = document.getElementById("Input").value;
  const number = parseInt(input);
  console.log(`Number: ${number}`);

  let resultArray = getPrimeFactorsJS(number);

  const area = document.getElementById("results");
  area.textContent = resultArray;
  console.log(resultArray);
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
  const executionTime = document.getElementById("time");
  executionTime.textContent = `${end - start} ms`;
}
