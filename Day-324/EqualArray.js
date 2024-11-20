function numLenInBinary(numb) {
  if(numb === 0) return 1;
  return Math.floor(Math.log2(numb)) + 1;
}

function getDiff(num1, num2, len) {
  let res = 0;
  for(let i = 0; i < len; i++) {
    let isNum1BitSet = num1 & (1 << i) ? true : false;
    let isNum2BitSet = num2 & (1 << i) ? true : false;
    if(isNum1BitSet !== isNum2BitSet) {
      res++;
    }
  }
  return res;
}

function func(arr) {
  let maxBinLen = numLenInBinary(arr[0]);
  for(let i = 1; i < arr.length; i++) { 
    maxBinLen = Math.max(numLenInBinary(arr[i]), maxBinLen);
  }

  let numToMake = 0;
  for(let i = 0; i < maxBinLen; i++) {
    let oneCnt = 0;
    for(let j = 0; j < arr.length; j++) {
      if(arr[j] & (1 << i)) {
        oneCnt++;
      }
    }
    let zeroCnt = arr.length - oneCnt;
    if(oneCnt >= zeroCnt) {
      numToMake |= (1 << i);
    }
  }
  
  let ans = 0;
  for(let i = 0; i < arr.length; i++) {
    ans += getDiff(arr[i], numToMake, maxBinLen);
  }

  return ans;
}

module.exports = { 
 //param A : array of integers
 //return an integer
    solve : function(A){
        return func(A);
    }
};

