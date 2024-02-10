import java.lang.*;
import java.util.*;
import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
       
        Scanner sc= new Scanner(System.in);
        int n=sc.nextInt();
        String []s=new String[n];
        for(int i=0;i<n;i++){
            s[i]=sc.next();
        }
        sc.close();

        //Write your code here
         Arrays.sort(s, (a, b) -> new BigDecimal(b).compareTo(new BigDecimal(a)));

        //Output
        for(int i=0;i<n;i++)
        {
            System.out.println(s[i]);
        }
       
    }
}
