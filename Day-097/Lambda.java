import java.util.*;

public class Main {
    private static Map<Integer, Integer> frequencyMap = new HashMap<>();
    private static PriorityQueue<Integer> queue;

    public static void main(String[] args) {
        Comparator<Integer> comparator = (n1, n2) -> {
            int freqCompare = frequencyMap.getOrDefault(n1, 0).compareTo(frequencyMap.getOrDefault(n2, 0));
            if (freqCompare != 0) {
                return freqCompare;
            } else {
                return n1.compareTo(n2);
            }
        };
        queue = new PriorityQueue<>(comparator);

        Scanner scanner = new Scanner(System.in);
        int q = scanner.nextInt();
        StringBuilder output = new StringBuilder();

        for (int i = 0; i < q; ++i) {
            int operation = scanner.nextInt();
            if (operation == 1) {
                int number = scanner.nextInt();
                frequencyMap.put(number, frequencyMap.getOrDefault(number, 0) + 1);
                if (!queue.contains(number)) {
                    queue.add(number);
                }
            } else if (operation == 2) {
                int number = scanner.nextInt();
                if (frequencyMap.containsKey(number) && frequencyMap.get(number) > 0) {
                    frequencyMap.put(number, frequencyMap.get(number) - 1);
                    if (frequencyMap.get(number) == 0) {
                        frequencyMap.remove(number);
                        queue.remove(number);
                    }
                } else {
                    output.append("-1\n");
                }
            } else if (operation == 3) {
                while (!queue.isEmpty() && frequencyMap.getOrDefault(queue.peek(), 0) == 0) {
                    queue.poll();
                }
                output.append(queue.isEmpty() ? "-1\n" : queue.peek() + "\n");
            }
        }
        scanner.close();
        System.out.print(output.toString());
    }
}
