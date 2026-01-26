const products = [
    { id: 1, name: 'Xiaomi', description: "This is Xiaomi", price: 15000, color: "black" },
    { id: 2, name: 'Samsung', description: "This is Samsung", price: 120000, color: "Grey" },
    { id: 3, name: 'Iphone', description: "This is Iphone", price: 150000, color: "White" },
    { id: 4, name: 'Xiaomi', description: "This is Xiaomi", price: 1000, color: "Yellow" },
    { id: 5, name: 'OnePlus', description: "This is Samsung", price: 120000, color: "Black" },
    { id: 6, name: 'OnePlus', description: "This is Samsung", price: 120000, color: "White" },
    { id: 7, name: 'Samsung', description: "This is Samsung", price: 120000, color: "Grey" },
    { id: 8, name: 'Iphone', description: "This is Samsung", price: 120000, color: "Grey" },
]


const result = products.map(mp => mp.id)

console.log(result);


const every = products.forEach(product => {
    console.log(product.id);
});