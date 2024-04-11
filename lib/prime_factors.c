#include <stdio.h>
#include <stdlib.h>

int* getPrimeFactors(int n) {

    int* isPrime = (int*)malloc((n + 1) * sizeof(int));
    int* primes = (int*)malloc((n + 1) * sizeof(int));
    int count = 0;

    for (int i = 0; i <= n; i++) {
        isPrime[i] = 1;
    }
    isPrime[0] = 0;
    isPrime[1] = 0;

    for (int i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes[count++] = i;
            for (int j = i + i; j <= n; j += i) {
                isPrime[j] = 0;
            }
        }
    }

    int* primeFactors = (int*)malloc((count + 1) * sizeof(int));
    int c = 0;
    for (int i = 0; i < count; i++) {
        if (n % primes[i] == 0) {
            primeFactors[c] = primes[i];
            c++;
            
        }
    }

    primeFactors[c] = -1;

    return primeFactors;
}