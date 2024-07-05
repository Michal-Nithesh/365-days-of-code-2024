module.exports = {
  solve: function (A) {
    const N = A.length;
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        [A[i][j], A[j][i]] = [A[j][i], A[i][j]];
      }
    }
    return A;
  },
};
