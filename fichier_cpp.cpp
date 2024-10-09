#include <iostream>  
#include <vector>  
#include <algorithm>  

class PointerExample {  
public:  
    PointerExample(int size) : size(size) {  
        data = new int[size];  // Allocation dynamique avec pointeur  
        for (int i = 0; i < size; ++i) {  
            data[i] = size - i;  // Remplir le tableau  
        }  
    }  

    ~PointerExample() {  
        delete[] data;  // Libération de la mémoire  
    }  

    void sortData() {  
        std::sort(data, data + size);  // Utilisation de std::sort  
    }  

    void printData() const {  
        for (int i = 0; i < size; ++i) {  
            std::cout << data[i] << " ";  
        }  
        std::cout << std::endl;  
    }  

private:  
    int* data;  // Pointeur vers des entiers  
    int size;  
};  

int main() {  
    PointerExample example(5);  
    example.printData();  
    example.sortData();  
    example.printData();  
    
    return 0;  
}