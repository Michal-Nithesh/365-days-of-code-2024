#include<iostream>

using namespace std;

int main()  {
    int N;
    cin>>N;
    int i = 0;
    // YOUR CODE GOES HERE
    while(i <= N)
    {
        if(i % 2 != 0){
            cout<< i << endl;
        }
        i++;
    }
    return 0;
}
