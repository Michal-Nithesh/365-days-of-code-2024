import java.lang.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // YOUR CODE GOES HERE
        // Please take input and print output to standard input/output (stdin/stdout)
        // DO NOT USE ARGUMENTS FOR INPUTS
        // E.g. 'Scanner' for input & 'System.out' for output
        Scanner sc = new Scanner(System.in);
        HashSet<Integer> set=new HashSet<Integer>();
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0;i<n;i++) {
            arr[i]=sc.nextInt();
        }
        for(int i=0;i<n;i++) {
            if(!set.contains(arr[i])) {
                set.add(arr[i]);
            }
        }
        System.out.println(set.size());
    }
}
