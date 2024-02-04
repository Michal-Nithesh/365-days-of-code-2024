import java.lang.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // YOUR CODE GOES HERE
        // Please take input and print output to standard input/output (stdin/stdout)
        // DO NOT USE ARGUMENTS FOR INPUTS
        // E.g. 'Scanner' for input & 'System.out' for output
            Scanner scanner = new Scanner(System.in);
        int queries = scanner.nextInt();
        Queue<Integer> dq = new ArrayDeque<>();

        for(int i=0;i<queries;i++){
            int x = scanner.nextInt();
            int y = scanner.nextInt();
            switch(x){
                case 1: dq.add(y);
                        break;
                case 2: if(dq.isEmpty()) System.out.println(-1);
                        else System.out.println(dq.peek());
                        break;
                case 3: if(!dq.isEmpty()) dq.poll();
                         break;
            }
        }
    }
}
