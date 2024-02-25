import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Main {

    /*
     * Complete the 'getDay' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts following parameters:
     *  1. String day
     *  2. String month
     *  3. String year
     */
      
    public static String getDay(String day, String month, String year) {
       List<String> days = Arrays.asList("SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY");
        int y = Integer.parseInt(year);
        int m = Integer.parseInt(month);
        int d = Integer.parseInt(day);
        Calendar c = Calendar.getInstance();
        c.set(y, m-1, d); 
        int p = c.get(Calendar.DAY_OF_WEEK);
        String s = days.get(p-1);
        return s;
    }
    public static void main(String[] args) {
        
        /****don't alter the code below*************************************/
        
        Scanner in = new Scanner(System.in);
        String month = in.next();
        String day = in.next();
        String year = in.next();
        
        System.out.println(getDay(day, month, year));
        
        /****************************************************/
        
    }
}
