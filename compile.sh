#!/bin/bash

emcc lib/prime_factors.c -s WASM=1 -s NO_EXIT_RUNTIME=1 -s EXPORTED_FUNCTIONS=_getPrimeFactors,_free -o func/prime_factor_o0.js -s 'EXPORTED_RUNTIME_METHODS=["cwrap","getValue"]' -s ALLOW_MEMORY_GROWTH -s EXPORT_ES6=1 -s WASM_BIGINT

emcc lib/prime_factors.c -s WASM=1 -s NO_EXIT_RUNTIME=1 -s EXPORTED_FUNCTIONS=_getPrimeFactors,_free -o func/prime_factor_o1.js -s 'EXPORTED_RUNTIME_METHODS=["cwrap","getValue"]' -s ALLOW_MEMORY_GROWTH -s EXPORT_ES6=1 -s WASM_BIGINT -O1

emcc lib/prime_factors.c -s WASM=1 -s NO_EXIT_RUNTIME=1 -s EXPORTED_FUNCTIONS=_getPrimeFactors,_free -o func/prime_factor_o2.js -s 'EXPORTED_RUNTIME_METHODS=["cwrap","getValue"]' -s ALLOW_MEMORY_GROWTH -s EXPORT_ES6=1 -s WASM_BIGINT -O2

emcc lib/prime_factors.c -s WASM=1 -s NO_EXIT_RUNTIME=1 -s EXPORTED_FUNCTIONS=_getPrimeFactors,_free -o func/prime_factor_o3.js -s 'EXPORTED_RUNTIME_METHODS=["cwrap","getValue"]' -s ALLOW_MEMORY_GROWTH -s EXPORT_ES6=1 -s WASM_BIGINT -O3
