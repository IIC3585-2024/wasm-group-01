#include <stdio.h>
#include <stdlib.h>
#include <math.h>

long long* getPrimeFactors(long long n, int size) {
    long long* primes = (long long*)malloc(size * sizeof(long long));
    int count = 0;

    while (n % 2 == 0) {
        primes[count++] = 2;
        n = n / 2;
    }

    for (long long i = 3; i <= sqrt(n); i = i + 2) {
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
