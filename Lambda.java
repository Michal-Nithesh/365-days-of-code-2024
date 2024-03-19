import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int q = scanner.nextInt();

        // Using a TreeMap to keep track of the frequencies of the elements
        TreeMap<Integer, Integer> map = new TreeMap<>();
        StringBuilder output = new StringBuilder();

        for (int i = 0; i < q; ++i) {
            int operation = scanner.nextInt();
            int number = operation == 3 ? -1 : scanner.nextInt();

            if (operation == 1) {
                // Add the number to the map
                map.put(number, map.getOrDefault(number, 0) + 1);
            } else if (operation == 2) {
                // Delete one occurrence of the number from the map
                if (map.containsKey(number) && map.get(number) > 0) {
                    map.put(number, map.get(number) - 1);
                    if (map.get(number) == 0) {
                        map.remove(number);
                    }
                } else {
                    output.append("-1\n");
                }
            } else if (operation == 3) {
                // Print the smallest number in the map
                if (map.isEmpty()) {
                    output.append("-1\n");
                } else {
                    output.append(map.firstKey()).append("\n");
                }
            }
        }

        scanner.close();
        System.out.print(output.toString());
    }
}