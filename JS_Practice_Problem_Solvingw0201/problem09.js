let Savings = (payments, living_cost) =>{
    let total_income = 0;
    for(let i = 0; i < payments.length; i++){
        total_income+=payments[i];
        if(payments[i] >= 3000){
            total_income-=payments[i]*20/100;
        }
    }
    if(total_income <= living_cost){
        return "Earn More";
    }
    else{
        return total_income-living_cost;
    }

}



let payments = [1000, 3000, 5000, 2000, 3434, 1223, 74, 12374, 3723, 87387, 8821];
let living_cost = 40000; 

console.log(Savings(payments, living_cost));