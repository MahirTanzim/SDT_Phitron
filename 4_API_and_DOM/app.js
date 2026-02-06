// alert('')
// const target = document.getElementsByTagName('h1');
// const target = document.getElementsByClassName('title');
const target = document.getElementById('title')
target.style.color = 'red';
console.log(target);

const all_Box = document.getElementsByClassName('box')
console.log(all_Box);

for (let i = 0; i < all_Box.length; i++) {
    const element = all_Box[i];
    console.log(element);
    element.style.backgroundColor = 'Red';
    if(element.innerText == 'Box-5'){
        element.style.backgroundColor = 'green';
    }
    if(i == 7){
        element.style.backgroundColor = 'blue';
    }
    
}
