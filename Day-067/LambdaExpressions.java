import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner inp = new Scanner(System.in);
        int n = inp.nextInt();
        inp.nextLine();

        // Using a lambda expression to create a max heap (sorted in reverse order)
        PriorityQueue<Integer> pq = new PriorityQueue<>((number1, number2) -> number2 - number1);

        for (int i = 0; i < n; i++) {
            int a = inp.nextInt();
            int b = inp.nextInt();
            inp.nextLine();
            if (a == 1)
                pq.offer(b);
            else if (a == 2) {
                if (pq.isEmpty()) System.out.println("-1");
                else System.out.println(pq.peek());
            } else {
                if (!pq.isEmpty()) pq.poll();
            }
        }
    }
}
