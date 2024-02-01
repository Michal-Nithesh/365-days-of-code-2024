import java.lang.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // YOUR CODE GOES HERE
        // Please take input and print output to standard input/output (stdin/stdout)
        // DO NOT USE ARGUMENTS FOR INPUTS
        // E.g. 'Scanner' for input & 'System.out' for output
        Scanner scan = new Scanner(System.in);
        int m = scan.nextInt();
        int n = scan.nextInt();
       
       
       
        int[][] arr = new int[m][n];
       
        for(int i=0 ; i<m ; i++){
            for(int j=0 ; j<n ; j++){
                arr[i][j] = scan.nextInt();
            }
        }
       
        for(int i=0 ; i<n ; i++){
            int sum=0;
            for(int j=0 ; j<m ; j++){
                sum = sum + arr[j][i];
            }
            System.out.print(sum+" ");
        }
}
             
    }
