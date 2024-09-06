let map = function(arr, fn){
  let newArr = [];
  for(let i in arr){
    newArr.push(fn(a[i] , i));
  } return newArr;
}

let arr = [1, 3, 7, 9, 2];

let fn = function(n){
  return n ** 1;
}

console.log(map(arr, fn));
