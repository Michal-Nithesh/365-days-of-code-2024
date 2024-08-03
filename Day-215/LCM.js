module.exports = {
    //param A : integer
    //param B : integer
    //return a long integers
    solve: function (A, B) {
        let a = BigInt(A);
        let b = BigInt(B);

        let product = a * b;
        if (a < b) [a, b] = [b, a];
        while (b != 0) {
            let temp = a % b;
            a = b;
            b = temp;
        }
        return product / a;
    }
};

