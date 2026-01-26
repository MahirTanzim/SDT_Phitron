const product = [
    { id: 1, name: 'Xiaomi', description: "This is Xiaomi", price: 15000, color: "black" },
    { id: 2, name: 'Samsung', description: "This is Samsung", price: 120000, color: "Grey" },
    { id: 3, name: 'Iphone', description: "This is Iphone", price: 150000, color: "White" },
    { id: 4, name: 'Xiaomi', description: "This is Xiaomi", price: 1000, color: "Yellow" }
]

for (let i = 0; i < product.length; i++) {
    const element = product[i]
    if (element.id == 3)
        console.log(element);
}

let result = product.find(Pd => Pd.id == 2)
console.log(result);

result = product.find(Pd => Pd.id == 67)
console.log(result);

const arr = [1, 2, 3, 4, 5, 6, 5, 8, 7, 6, 8];
const r = arr.indexOf(6)
console.log(r);
