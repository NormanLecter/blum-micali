const BigNumber = require('big-number');
const  Big = require('big.js');
let p = 3001;
const toCompare = ((p-1)/2);
let x0 = Math.round((Math.random() * (p - 0) + 0));
let a = 37;
let i = 12; // length of series
let bigX = BigNumber(a).pow(x0);
let x = Big(bigX).mod(p);
let s =""; //TODO: to binary type - result series
let xi = Big();

s+= ((x > toCompare) ? "1" : "0");

for(let k = 1; k<=i; k++){
bigX = BigNumber(a).pow(x);
xi = Big(bigX).mod(p);
s += ((xi > toCompare) ? "1" : "0");
x = xi;
}

console.log(s);
