const oddEven = (arr)=>{
    let even = [];
    let odd = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] %2 == 0){
            even.push(arr[i]);
        }
        else{
            odd.push(arr[i]);
        }
    }
    return odd;
}


let arr = [1,2,3,4,5,6,7,8,9,2,3,45,2,3,4,45,5,6,23,32,3453,23,4,3,23,5,3,75,7456,343,234,234,234,2345,23,4567,] 
console.log(oddEven(arr));