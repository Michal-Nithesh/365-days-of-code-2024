import java.lang.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // YOUR CODE GOES HERE
        // Please take input and print output to standard input/output (stdin/stdout)
        // DO NOT USE ARGUMENTS FOR INPUTS
        // E.g. 'Scanner' for input & 'System.out' for output
        Scanner sc = new Scanner(System.in);
        String A = sc.nextLine();
        String B = sc.nextLine();
        int sum = A.length() + B.length();
        System.out.println(sum);
        int res = A.compareTo(B);
        if(res < 0){
            System.out.println("No");
        }else if(res >= 1){
            System.out.println("Yes");
        }
        String a = A.toUpperCase()+" "+B.toUpperCase();
        System.out.println(a);
    }
}
