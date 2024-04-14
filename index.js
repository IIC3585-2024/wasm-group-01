import {
  getPrimeFactorsJS,
  getPrimeFactorsCO0,
  getPrimeFactorsCO1,
  getPrimeFactorsCO2,
  getPrimeFactorsCO3,
} from "./lib/prime_factors.js";

const languageFunctions = {
  "js": getPrimeFactorsJS,
  "co0": getPrimeFactorsCO0,
  "co1": getPrimeFactorsCO1,
  "co2": getPrimeFactorsCO2,
  "co3": getPrimeFactorsCO3,
}

function showResultsFromLanguage(language) {
  const start = performance.now();
  let result;
  let isNegative = false;

  try {
    let input = Number(document.getElementById("input-number").value);
    if (Number.isNaN(input) || !Number.isInteger(input)) throw new Error("Invalid input");
    if (input === 0) throw new Error("Zero is not allowed");

    if (input < 0) {
      input *= -1;
      isNegative = true;
    }

    const resultArray = languageFunctions[language](input);
    result = (isNegative ? "-" : "")
      + (resultArray.length > 0 ? resultArray.join(", ") : "No prime factors.") ;
  } catch (err) {
    console.error(err);
    result = "Invalid input. Please enter a non-zero integer number.";
  }

  document.getElementById("results-" + language).textContent = result;
  const end = performance.now();
  document.getElementById("time-" + language).textContent = `${end - start} ms`;
}

document.getElementById("getPrimeNumbersButton").addEventListener("click", async () => {
  Object.keys(languageFunctions).forEach((language) => {
    showResultsFromLanguage(language);
  });
});
