/*
#include<iostream>
#include<sstream>
using namespace std;
*/

int main()  {
    string A;
    cin>>A;
    // YOUR CODE GOES HERE
     istringstream ss(A);
    string number;
    while(getline(ss,number,',')){
        cout << number << endl;
    }
     
    return 0;
}
