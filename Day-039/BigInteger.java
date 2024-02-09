import java.lang.*;
import java.util.*;
import java.math.BigInteger;
public class Main {
    public static void main(String[] args) {
        // YOUR CODE GOES HERE
        // Please take input and print output to standard input/output (stdin/stdout)
        // DO NOT USE ARGUMENTS FOR INPUTS
        // E.g. 'Scanner' for input & 'System.out' for output
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String b = sc.next();
        sc.close();
        BigInteger A,B;
        A = new BigInteger(a);
        B = new BigInteger(b);
        BigInteger SUM = A.add(B);
        System.out.print(SUM);
    }
}
