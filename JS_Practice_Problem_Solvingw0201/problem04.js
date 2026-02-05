const leapyear = (y) => {
    if(y%400 == 0){
        return "Leap Year";
    }
    else if(y%100 == 0 ){
        return "Not Leap Year";
    }
    else if(y%4 == 0){
        return "Leap Year";
    }
    else{
        return 'Not Leap Year';
    }
}

let Year = 2001;
console.log(`Year ${Year} is: ${leapyear(Year)}`);