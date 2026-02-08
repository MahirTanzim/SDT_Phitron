// alert('')

// getting elements
// const target = document.getElementsByTagName('h1');
// const target = document.getElementsByClassName('title');
const target = document.getElementById('title')
target.style.color = 'red';
console.log(target);

const all_Box = document.getElementsByClassName('box')
console.log(all_Box);


// loop in html contents
for (let i = 0; i < all_Box.length; i++) {
    const element = all_Box[i];
    console.log(element);
    element.style.backgroundColor = 'Red';
    if (element.innerText == 'Box-5') {
        element.style.backgroundColor = 'green';
    }
    if (i == 7) {
        element.style.backgroundColor = 'blue';
    }

}

document.getElementById('add_button').addEventListener('click', (event)=>{
    console.log('This Is Event Listner');
    const input_val = document.getElementById('search_box').value;
    console.log(input_val);
})


const handle_search = () => {
    console.log("Hello Boxxx");
    const input_val = document.getElementById('Search_box').value;
    console.log(input_val);
}

document.getElementById('Add').addEventListener('click', (event)=>{
    
    const input_val = document.getElementById('text_box').value;
    const p = document.createElement('p');
    p.classList.add('child')
    const comment =  document.getElementById('comment-container');
    p.innerText = input_val;
    comment.appendChild(p);
    document.getElementById('text_box').value = '';
})

