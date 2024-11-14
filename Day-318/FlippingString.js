function func(str) {
  let counts = [];
  for(let i = 0; i < str.length; i++) {
    let cnt = 0;
    let j = i;
    while(j < str.length && str[i] === str[j]) {
      cnt++;
      j++;
    }
    counts.push(cnt);
    i = j - 1;
  }

  isZeroStarting = str[0] === '0' ? true : false;

  let ans = 1, start = 0;
  if(isZeroStarting) {
    start = 1;
  }
  let toCheck = counts[0];
  if(1 < counts.length) {
    toCheck += counts[1];
  }
  ans = Math.max(toCheck);
  for(let i = start; i < counts.length; i += 2) {
    toCheck = counts[i];
    if(i + 1 < counts.length) {
      toCheck += counts[i + 1];
    }
    if(i + 2 < counts.length) {
      toCheck += counts[i + 2];
    }
    ans = Math.max(ans, toCheck);
  }
  return ans;
}

module.exports = { 
 //param A : string
 //return an integer
    solve : function(A){
        return func(A);
    }
};

