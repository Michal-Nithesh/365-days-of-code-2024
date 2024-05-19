function performOps(A){
    m= A.length
    n=A[0].length
    B=[]
    for(i = 0; i < m;i++){
        B.push(new Array(n));
        for(j=0;j< n;j++){
            B[i][n-1-j] = A[i][j]
        }
    }
    return B
}
Lets say performOps was called with A : [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]] .
What would be the output of the following call :

B = performOps(A)
for (i = 0; i < B.length; i++) {
    for (j = 0; j < B[i].length; j++) 
        process.stdout.write(B[i][j]+" ");
}
