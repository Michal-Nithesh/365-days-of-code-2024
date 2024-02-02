import java.lang.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // YOUR CODE GOES HERE
        // Please take input and print output to standard input/output (stdin/stdout)
        // DO NOT USE ARGUMENTS FOR INPUTS
        // E.g. 'Scanner' for input & 'System.out' for output
        Scanner sc = new Scanner(System.in);
        ArrayList<Integer>list = new ArrayList<>();
        int N = sc.nextInt();
        while(N >= 0){
            list.add(N);
            N = sc.nextInt();
        }
        for(int i = list.size() -1;i >= 0;i--){
            System.out.print(list.get(i) +" ");
        }
    }
}
