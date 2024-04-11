function generatePrimeNumbers() {
    const input = document.getElementById('Input').value;
    const number = parseInt(input)
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
        if (value === -1){
            break
        }
        resultArray.push(value);
    }

    Module._free(resultPointer);
  
    console.log(resultArray)

}