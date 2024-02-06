import java.lang.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // YOUR CODE GOES HERE
        // Please take input and print output to standard input/output (stdin/stdout)
        // DO NOT USE ARGUMENTS FOR INPUTS
        // E.g. 'Scanner' for input & 'System.out' for output
        Scanner sc = new Scanner(System.in);
        int Q = sc.nextInt();
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for(int i=0; i<Q;i++)
        {
            int x = sc.nextInt();
            int y = sc.nextInt();
            switch(x){
                case 1 : pq.add(y);
                break;
                case 2 : if(pq.peek() == null) System.out.println(-1);
                else System.out.println(pq.peek());
                break;
                case 3 : if(pq.peek()!=null) pq.poll();
                break;
        }
    }
}
}
