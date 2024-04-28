public class Solution {
    public String[] fizzBuzz(int A) {
        String a[] = new String[A];
        int j=1;
        for(int i=0;i<A;i++){
            if(j%15==0){
                a[i]="FizzBuzz";
               
            }
            else if(j%3==0){
                a[i]="Fizz";
               
            }
            else if(j%5==0){
                a[i]="Buzz";    
            }
            else{
                a[i]=""+j;
               
            }
             j++;
       
        }
        return a;
    }
}
