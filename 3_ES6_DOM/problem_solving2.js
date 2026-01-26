
const bigname = (country) => {
    let biggest_name = country[0];
    for (let index = 0; index < country.length; index++) {
        const element = country[index];
        if(element.length > biggest_name.length){
            biggest_name = element;
        }
        
    }
    return biggest_name;
}

let name = ['Bangladesh', 'India', 'Canada', 'America', 'England', 'France', 'Japan', 'China', 'Mexico', 'Argentina', 'Brazil', 'South Africa'];
console.log(name);
console.log(bigname(name));