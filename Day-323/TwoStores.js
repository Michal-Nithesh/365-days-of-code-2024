module.exports = {
    //param A : integer
    //param B : integer
    //param C : integer
    //param D : integer
    //param E : integer
    //return an integer
    solve: function (A, B, C, D, E) {
        let am1, am2, cost1, cost2;
        if (C / B < E / D) {
            am1 = B;
            am2 = D;
            cost1 = C;
            cost2 = E;
        } else {
            am1 = D;
            am2 = B;
            cost1 = E;
            cost2 = C;
        }

        let totalCost = 0;
        let min = Math.min(am1, am2);

        while (A >= min) {
            if (A % am1 === 0) {
                totalCost = totalCost + (A / am1) * cost1;
                A = A % am1;
            } else {
                totalCost += cost2;
                A -= am2;
            }
        }

        return A === 0 ? totalCost : -1;
    }
};

