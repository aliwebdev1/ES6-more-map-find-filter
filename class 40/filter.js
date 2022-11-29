

// numbers.forEach(number => console.log(number))

// const bigNumber = numbers.filter(number => number < 10);
// console.log(bigNumber);

const products = [
    { name: 'bottle', price: 50, color: 'green' },
    { name: 'mobile', price: 500000, color: 'lack' },
    { name: 'shirt', price: 500, color: 'red' },
    { name: 'notebook', price: 50, color: 'white' },
    { name: 'glass', price: 5, color: 'blck' },
]
// console.log(products);
const expensive = products.map(product => product.price > 100)
// console.log(expensive);
const blacItems = products.find(product => product.color == 'black');
// console.log(blacItems);

const numbers = [5, 7, 15, 8, 2, 3, 19];