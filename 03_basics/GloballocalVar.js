
let a = 300  //global variable 



// {} is scope 
if(true){
    let a = 20
    const b = 30
    console.log("inner: ", a); // local variable 
}

// for(let i = 0; i < array.length; i++){
//     const element = array[i];
// }

// console.log(element);
console.log(a);
// console.log(b);
// console.log(c);
