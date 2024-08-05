module.exports = {
    solve: function(A) {
        let result = '';
        for (let i = 0; i < A.length; i++) {
            const char = A[i];
            if (char >= 'a' && char <= 'z') {
                // Convert lowercase to uppercase
                result += char.toUpperCase();
            } else if (char >= 'A' && char <= 'Z') {
                // Convert uppercase to lowercase
                result += char.toLowerCase();
            } else {
                // Keep non-alphabetic characters unchanged
                result += char;
            }
        }
        return result;
    }
};
