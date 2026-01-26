let arr1 = [5,6,7,8,9,10,1,2,3,4]
let arr2 = [11,12,13,14,15,16,17,18,19,20]


console.log(arr1);
console.log(arr2);
console.log(arr1, arr2);
console.log(...arr1, ...arr2);
console.log(Math.max(...arr1));
console.log(arr1.indexOf(3));
console.log(arr1.includes(111));

arr1.sort(function(a,b){return b-a})
console.log(arr1);