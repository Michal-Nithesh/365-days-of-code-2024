int Solution::solve(vector<int> &a, int b) {

   int n =a.size();

   int i=0,c=1,d=0,e=-1,f=0;

   while(i<b && i<n){

       if(a[i]==1){

           e=i;

       }

       i++;

   }

  if(e==-1){

      return -1;

  }

  if(i>=n){

      return 1;

  }

   i--;

   b--;

    f=e;

   b=b*2;

   while(i<n ){

       while(i<n && d<=b+1){

           if(a[i]==1){

               e=i;

           }

           i++;

           d++;

       }

       if(e==f && d>b/2){

           return -1;

       }

       if(i>=n){

           if(d>b/2){

               c++;

           }

           return c;

       }

       i--;

       d=i-e;

       f=e;

       c++;

       

       

   }

}
