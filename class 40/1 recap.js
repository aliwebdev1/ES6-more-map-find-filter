// let and const 
const name = 'Omor Faruk';
let phone = 179645;
phone = 'iphone 13';

// default parameters
// spread ...

function maxNumber(array = []) {
    const max = Math.max(...array)
    return max;
}
const biggestNumber = maxNumber();

const note = `I am Ali shorif, i have a  ${phone}`;

/* function squre(x) {
    return x * x;
}
 */
const square = x => x * x;





