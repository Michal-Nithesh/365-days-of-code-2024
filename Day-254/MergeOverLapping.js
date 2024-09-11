module.exports = { 
    /**
     * Interval: [start, end]
     * 
     * param A: intervals, a list of Intervals
     * return :a list of Intervals
     */
    merge : function(A){
        if (A.length === 0) {
            return [];
        }

        // Sort the intervals based on the starting time
        A.sort((a, b) => a[0] - b[0]);

        const merged = [A[0]];
        for (let i = 1; i < A.length; i++) {
            const last = merged[merged.length - 1];
            const current = A[i];

            if (current[0] <= last[1]) { // Check if there is an overlap
                last[1] = Math.max(last[1], current[1]); // Merge the intervals
            } else {
                merged.push(current);
            }
        }

        return merged;
    }
};
