# Tarea 2 - WASM

#### C modules build command

```bash
emcc lib/prime_factors.c -s WASM=1 -s NO_EXIT_RUNTIME=1 -s EXPORTED_FUNCTIONS=_getPrimeFactors,_free -o func/prime_factor.js -s 'EXPORTED_RUNTIME_METHODS=["ccall"]' -s ALLOW_MEMORY_GROWTH
```

