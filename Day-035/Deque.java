import java.lang.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // YOUR CODE GOES HERE
        // Please take input and print output to standard input/output (stdin/stdout)
        // DO NOT USE ARGUMENTS FOR INPUTS
        // E.g. 'Scanner' for input & 'System.out' for output
        Scanner sc=new Scanner(System.in);
     int q=sc.nextInt();
     int x,y,j=0;
     int res[]=new int[q];
     Deque<Integer> deque= new ArrayDeque<>();
     for(int i=0;i<q;i++)
     {
         x=sc.nextInt();
         y=sc.nextInt();
         switch(x)
         {
             case 1:deque.offerLast(y);
             break;
             case 2:deque.offerFirst(y);
             break;
             case 3:res[j++]=deque.isEmpty()?-1:deque.peekFirst();
             break;
             case 4:res[j++]=deque.isEmpty()?-1:deque.peekLast();
             break;
             case 5:if (!deque.isEmpty()) {
                    deque.pollFirst();
                }
                break;
            case 6:if (!deque.isEmpty()) {
                    deque.pollLast();
                }
                break;
         }
     }  for(int i=0;i<res.length;i++)
        if(res[i]!=0)
        System.out.println(res[i]);
     
     
    }
}
