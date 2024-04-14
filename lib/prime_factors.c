#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include <stdint.h>
#include <math.h>

intmax_t* getPrimeFactors(intmax_t n, int size) {
    intmax_t* primes = (intmax_t*)malloc(size * sizeof(intmax_t));
    int count = 0;

    while (n % 2 == 0) {
        primes[count++] = 2;
        n = n / 2;
    }

    for (intmax_t i = 3; i*i <= n; i = i + 2) {
        while (n % i == 0) {
            primes[count++] = i;
            n = n / i;
        }
    }

    if (n > 2) primes[count++] = n;

    primes[count] = -1;
    return primes;
}

// https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/
