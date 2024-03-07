import java.lang.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        
        /****Don't alter the code below*****/
        Scanner in = new Scanner(System.in);
        ArrayList<pair> arr = new ArrayList<pair>();
        int n = in.nextInt();
        in.nextLine();
        for(int i = 0;i<n;i++)
        {
            int a = in.nextInt();
            int b = in.nextInt();
            arr.add(new pair(a,b));
            in.nextLine();
        }
        in.close();
        Collections.sort(arr);
        for(int i=0;i<n;i++)
        {
            System.out.println(arr.get(i).first + " " + arr.get(i).second);
        }
        /*********************************************************************/
        
    }
}
//your code goes here
class pair implements Comparable<pair>
{
    int first;
    int second;
    public pair(int a,int b)
    {
        this.first = a;
        this.second = b;
    }
    @Override
    public int compareTo(pair b)
    {
        if(this.second == b.second)
            return b.first - this.first;
        else
            return b.second - this.second;
    }
}
