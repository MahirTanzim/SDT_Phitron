
const grade = (n) => {
    if (n >= 80) {
        console.log("You Got A+");
    }
    else if (n < 80 && n >= 75) {
        console.log('You Got A');
    }
    else if (n < 75 && n >= 70) {
        console.log('You Got A-');
    }
    else if (n < 70 && n >= 65) {
        console.log('You Got B+');
    }
    else if (n < 65 && n >= 60) {
        console.log('You Got B');
    }
    else if (n < 60 && n >= 55) {
        console.log('You Got B-');
    }
    else if (n < 55 && n >= 50) {
        console.log('You Got C+');
    }
    else if (n < 50 && n >= 45) {
        console.log('You Got C');
    }
    else if (n < 45 && n >= 40) {
        console.log('You Got D');
    }
    else {
        console.log("You Faild");
    }
}

let number = 33;
grade(number)
