function countBits(numb) {
  return Math.floor(Math.log2(numb)+1);
} 

function isPowerOf2(numb) {
  if(numb === 0) return false;
  let toCompare = 1;
  toCompare = toCompare << (countBits(numb) - 1);
  return (numb | toCompare) === toCompare;
}

function getPowerfulDivisors(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  for(let element of arr) {
    max = Math.max(element, max);
  }
  let divisorCnt = Array(max + 1).fill(0);
  let sqrt = Math.floor(Math.sqrt(max));
  for(let i = 1; i <= sqrt; i++) {
    for(let j = i; j <= max; j += i) {
      let sqrtJ = Math.floor(Math.sqrt(j));
      if(i <= sqrtJ) {
        divisorCnt[j]++;
        if(Math.floor(j / i) !== i) divisorCnt[j]++;
      }
    }
  }
  for(let i = 1; i <= max; i++) {
    divisorCnt[i] = divisorCnt[i - 1] + (isPowerOf2(divisorCnt[i]) ? 1 : 0);
  }

  let ans = [];
  for(let i = 0; i < arr.length; i++) {
    ans.push(divisorCnt[arr[i]]);
  }

  return ans;
}

module.exports = { 
 //param A : array of integers
 //return a array of integers
    powerfulDivisors : function(A){
        A = A.map(numb => parseInt(numb));
        return getPowerfulDivisors(A);
    }
};

