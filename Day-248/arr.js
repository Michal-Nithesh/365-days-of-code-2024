let array = function(arr, fn){
  return {
    let newArr = [];
  for(let i in arr){
    newArr.push(fn(arr[i], Number(i)));
  }
  return newArr
}
