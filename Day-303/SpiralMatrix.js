module.exports = {
    //param A : array of integers
    //param B : integer
    //param C : integer
    //return a array of array of integers
    solve: function (A, B, C) {
        if (A.length === 0) {
            return [];
        }
        const resArr = new Array(B);
        for (let i = 0; i < resArr.length; i++) {
            resArr[i] = new Array(C);
        };

        let top = 0;
        let left = 0;
        let right = C - 1;
        let bottom = B - 1;
        let dir = 0; // 0 - left to right - 1 - top to bottom - 2 - right to left - 3 bottom to top
        let i = 0; // represents the index
        while (top <= bottom && left <= right) {
            if (dir === 0) {
                for (let j = left; j <= right; j++) {
                    resArr[top][j] = A[i];
                    i++;
                }
                top++;
                dir = 1;
            } else if (dir === 1) {
                for (let j = top; j <= bottom; j++) {
                    resArr[j][right] = A[i];
                    i++;
                }
                right--;
                dir = 2;
            } else if (dir === 2) {
                for (let j = right; j >= left; j--) {
                    resArr[bottom][j] = A[i];
                    i++;
                }
                bottom--;
                dir = 3;
            } else if (dir === 3) {
                for (let j = bottom; j >= top; j--) {
                    resArr[j][left] = A[i];
                    i++;
                }
                left++;
                dir = 0;
            }
        }

        return resArr;
    }
};
