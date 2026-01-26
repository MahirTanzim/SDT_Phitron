let person = {
    name: 'Mahir',
    age: 24,
    friends: ['Billah', 'Rifat', 'Shimul']
}
let people = ['Mahir', 'Shimul', 'Rifat', 'Billah']

let { name, age, friends } = person

let [f1, f2, f3, f4] = people
console.log(name, age, friends);

console.log("Bambu " + f1 + ', Tasur Mal ' + f2 + ', Tempu ' + f3 + ', Voda ' + f4)  