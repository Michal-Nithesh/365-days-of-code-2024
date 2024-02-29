import java.lang.*;
import java.util.*;
import java.text.*;



public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double payment = scanner.nextDouble();
        scanner.close();
        
        // Write your code here.
        NumberFormat nf = NumberFormat.getCurrencyInstance(Locale.US);
        NumberFormat formatter = NumberFormat.getCurrencyInstance(new Locale("en", "IN"));
        System.out.println("US: " +nf.format(payment));
        System.out.println("India: " + formatter.format(payment));
        }
}
