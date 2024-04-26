#include<iostream>
#include <vector>
#include<algorithm>
using namespace std;

int main()  {
    // YOUR CODE GOES HERE
    // Please take input and print output to standard input/output (stdin/stdout)
    // E.g. 'cin' for input & 'cout' for output
        // Read the number of integers
    int N;
    std::cin >> N;

    // Read the integers into a vector
    std::vector<int> v(N);
    for (int i = 0; i < N; ++i) {
        std::cin >> v[i];
    }

    // Read the index to be deleted
    int X;
    std::cin >> X;

    // Erase the element at index X
    v.erase(v.begin() + X);

    // Sort the vector
    std::sort(v.begin(), v.end());

    // Print the remaining integers
    for (int i = 0; i < N - 1; ++i) {
        std::cout << v[i] << std::endl;
    }
    return 0;
}
