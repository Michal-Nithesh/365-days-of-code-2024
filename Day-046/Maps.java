import java.lang.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // YOUR CODE GOES HERE
        // Please take input and print output to standard input/output (stdin/stdout)
        // DO NOT USE ARGUMENTS FOR INPUTS
        // E.g. 'Scanner' for input & 'System.out' for output
        Map<String, Integer> student = new HashMap<>();
        Scanner sc =  new Scanner(System.in);
        int A = sc.nextInt();
        for(int i=0;i<A;i++){
            String name = sc.next();
            int marks = sc.nextInt();
            student.put(name,marks);
        }
        
        int Q = sc.nextInt();
        String[] stuName = new String[Q];
        for(int i=0;i<Q;i++){
            stuName[i] = sc.next();
        }
        
        for(int i=0; i<Q; i++){
            boolean key = student.containsKey(stuName[i]);
            if(key){
                System.out.println(student.get(stuName[i]));
            }else{
                System.out.println("Not Found");
            }
        }
    }
}
