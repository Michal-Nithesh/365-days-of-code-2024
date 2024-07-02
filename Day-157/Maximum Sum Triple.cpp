int Solution::solve(vector<int> &A) {

    int n = A.size();

    // Array to store the maximum element on the right for each index
    vector<int> right(n);

    // Initialize the last element of 'right' array
    right[n-1] = A[n-1];

    // Set to store unique elements encountered so far from the left
    set<int> left;

    // Insert the first element into the set
    left.insert(A[0]);

    // Fill the 'right' array by finding the maximum element on the right for each index
    for(int i = 1; i < n; i++) {
        right[n-i-1] = max(A[n-i-1], right[n-i]);
    }

    int sum = 0;

    // Iterate through the array to find the maximum sum of triplet
    for(int i = 1; i < n - 1; i++) {

        // Find the element in the set which is just smaller than A[i]
        auto l = left.lower_bound(A[i]);
        l--;

        // Check conditions for the triplet, update 'sum' if conditions are met
        if(l != left.end() && A[i] < right[i+1] && *l < A[i]) {
            sum = max(sum, *l + A[i] + right[i+1]);
        }

        // Insert the current element into the set
        left.insert(A[i]);
    }

    return sum;
}￼Enter
