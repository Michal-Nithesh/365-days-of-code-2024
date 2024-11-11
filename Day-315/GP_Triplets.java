import java.util.ArrayList;
import java.util.Collections;

public class Solution {
    public int solve(ArrayList<Integer> A) {
        // Sort the array
        Collections.sort(A);

        int count = 0;
        int n = A.size();

        // Loop through each triplet
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                for (int k = j + 1; k < n; k++) {
                    // Case 1: All three elements are the same
                    if (A.get(i).equals(A.get(j)) && A.get(j).equals(A.get(k))) {
                        count += 6; // 3! permutations for the same elements
                    }
                    // Case 2: Check for geometric progression
                    else if ((long) A.get(k) * A.get(i) == (long) A.get(j) * A.get(j) &&
                             A.get(j) % A.get(i) == 0 &&
                             A.get(k) % A.get(j) == 0) {
                        count++;
                    }
                }
            }
        }

        return count; // Return the total count of triplets
    }
}

