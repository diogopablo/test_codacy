#include <iostream>  
#include <cub/cub.cuh> // Inclusion de la bibliothèque CUB  

__global__ void add(int* a, int* b, int* c, int size) {  
    int index = threadIdx.x;   
    if (index < size) {  
        c[index] = a[index] + b[index]; // Utilisation de pointeurs  
    }  
}  

int main() {  
    const int arraySize = 5;  
    int a[arraySize] = {1, 2, 3, 4, 5};  
    int b[arraySize] = {10, 20, 30, 40, 50};  
    int c[arraySize];  

    int *d_a, *d_b, *d_c;  
    cudaMalloc(&d_a, arraySize * sizeof(int));  
    cudaMalloc(&d_b, arraySize * sizeof(int));  
    cudaMalloc(&d_c, arraySize * sizeof(int));  

    cudaMemcpy(d_a, a, arraySize * sizeof(int), cudaMemcpyHostToDevice);  
    cudaMemcpy(d_b, b, arraySize * sizeof(int), cudaMemcpyHostToDevice);  

    add<<<1, arraySize>>>(d_a, d_b, d_c);  
    cudaMemcpy(c, d_c, arraySize * sizeof(int), cudaMemcpyDeviceToHost);  

    for (int i = 0; i < arraySize; i++) {  
        std::cout << c[i] << " ";  
    }  

    cudaFree(d_a);  
    cudaFree(d_b);  
    cudaFree(d_c);  
    return 0;  
}