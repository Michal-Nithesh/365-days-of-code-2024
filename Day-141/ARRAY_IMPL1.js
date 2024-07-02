function performOps(A){
    B = new Array(2 * A.length)

    for (var i = 0; i < A.length; i++) {
        B[i] = A[i];
        B[i + A.length] = A[(A.length - i) % A.length];
    }
    return B;
}
