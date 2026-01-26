// function sum(a, b){
//     return a+b;
// }

// let a = 5;
// let b = 10

// console.log((sum(a,b)));

// const sum2 = (n1, n2) => n1+n2;
// console.log(sum2(a, b));

let mx_elem = (arr)=>{
    let mx = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > mx) {
            mx = arr[i];
        }
    }
    return mx;
};
let v = [3,4,65,2,34,4,6,76,4,5,34,22,2];
let great = mx_elem(v);
console.log(great);
console.log(typeof mx_elem);