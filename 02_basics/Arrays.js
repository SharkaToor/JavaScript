// arrays

// const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
//const myHeros = ["sharka", "imran Khan", "Baba", "sharka", "imran Khan", "Bilal Abbas", "imran Khan", "Baba", "imran Khan", "Bilal Abbas", "imran Khan", "Baba"]
//console.log(myArr[5]); // 0 based indexing in arrays 

//console.log(myHeros [16]);


//arrays and its methods 

// myArr.push(6)
// myArr.push(7)
// myArr.pop ()

//myArr.unshift(9) // to add some numbers in start of arrays

// myArr.shift(7)
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

//const newArr = myArr.join() //converted in string and bined 

// console.log(myArr);
// console.log(newArr);
// console.log(typeof myArr);
// console.log(typeof newArr);

        // slice, splice 

const myArr = [0, 1, 2, 3, 4, 5]

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);