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
    BigInteger n = sc.nextBigInteger();
    sc.close();
    if(n.isProbablePrime(1)){
        System.out.println("prime");
    }
    else{
        System.out.println("not prime");
      }
}
}
