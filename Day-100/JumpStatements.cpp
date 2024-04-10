#include<iostream>

using namespace std;

int main()  {
    int N;
    cin>>N;
    // YOUR CODE GOES HERE
      for(int i = 0; i <= N; i++)
    {
        if(i % 2 == 0)
        {
            continue;
        }
        cout << i << endl;
    }
   
   
    /*
    int i = 0;
    while(i < N) // SO when i <= N taken then if n = even then i++ while take odd and count it too so i < N
    {
        i++;
        if(i % 2 == 0)
        {
            continue;
        }
        cout<< i << endl;
    }
    */
    return 0;
}
