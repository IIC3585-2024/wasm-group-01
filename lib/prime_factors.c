#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <inttypes.h>

double* getPrimeFactors(double n, int size) {
    double* primes = (double*)malloc(size * sizeof(double));
    int count = 0;

    while (fmod(n, 2) == 0){
        primes[count++] = 2;
        n = n / 2;
    }

    for (double i = 3; i*i <= n; i = i + 2) {
        while (fmod(n, i) == 0) {
            primes[count++] = i;
            n = n / i;
        }
    }

    if (n > 2) primes[count++] = n;

    primes[count] = -1;
    return primes;
}

// https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/
