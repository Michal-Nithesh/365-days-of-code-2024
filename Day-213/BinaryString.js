module.exports = {
    //param A : string
    //return a strings
    solve: function (A) {
        
        // Function to check if a string is non-decreasing
        function isNonDecreasing(str) {
            for (let i = 1; i < str.length; i++) {
                if (str[i] < str[i - 1]) {
                    return false;
                }
            }
            return true;
        }

        // If the string is already non-decreasing, return it as it is the cleanest string
        if (isNonDecreasing(A)) {
            return A;
        }

        // Count the number of leading zeroes (x) and trailing ones (y) in the string
        let x = 0;
        while (x < A.length && A[x] === '0') {
            x++;
        }
        let y = 0;
        let i = A.length - 1;
        while (i >= 0 && A[i] === '1') {
            y++;
            i--;
        }

        // Construct the cleanest string as x+1 zeroes followed by y ones
        return '0'.repeat(x + 1) + '1'.repeat(y);
    }
};

