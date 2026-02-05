const EvenOdd = (n) => {
    if (n % 2 == 0) {
        return n + " is and odd number.";
    }
    else {
        return n + " is an even number.";
    }
}

let n = 9;

console.log(EvenOdd(n));