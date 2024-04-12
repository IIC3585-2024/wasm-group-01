# Tarea 2 - WASM

Esta tarea consiste en crear una función tanto en JavaScript como en otro lenguaje externo, como C/C++, para luego importarlos a JS usando WebAssembly.

## Instrucciones de ejecución

1. Ejecute el siguiente comando para construir los módulos de WASM para C:
```bash
emcc lib/prime_factors.c -s WASM=1 -s NO_EXIT_RUNTIME=1 -s EXPORTED_FUNCTIONS=_getPrimeFactors,_free -o func/prime_factor.js -s 'EXPORTED_RUNTIME_METHODS=["cwrap"]' -s ALLOW_MEMORY_GROWTH -s WASM_BIGINT
```

2. Abra el archivo **index.html**.
