import { getPrimeFactorsC, getPrimeFactorsJS } from "./lib/prime_factors.js";

// default lenguage
let selectedLenguage = "C/C++";

document.getElementById("changeLanguageButton").addEventListener("click", (ev) => {
  selectedLenguage = selectedLenguage === "C/C++" ? "JavaScript" : "C/C++";
  ev.target.textContent = "Current: " + selectedLenguage;
  console.log("Lenguaje actualizado a: " + selectedLenguage);
});

document.getElementById("getPrimeNumbersButton").addEventListener("click", () => {
  const start = performance.now();
  const input = document.getElementById("Input").value;
  const number = parseInt(input);
  console.log(`Number: ${number}`);

  const resultArray = selectedLenguage === "C/C++"
    ? getPrimeFactorsC(number)
    : getPrimeFactorsJS(number);

  const area = document.getElementById("results");
  area.textContent = resultArray.join(", ");
  console.log(resultArray);
  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);
  const executionTime = document.getElementById("time");
  executionTime.textContent = `${end - start} ms`;
});
