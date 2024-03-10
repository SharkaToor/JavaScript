
// function sayMyName(){
//     console.log("S");
//     console.log("H");
//     console.log("A");
//     console.log("R");
//     console.log("K");
//     console.log("A");
// }
// sayMyName
// sayMyName()

// function addTwoNumbers(number1, number2) { //number1 and number2 are parameters
//     console.log(number1 +number2)
// }

// addTwoNumbers (4, 3)  //33 are arguments

function addTwoNumbers(number1, number2) { //number1 and number2 are parameters
    let result = number1 + number2
    return result
    console.log("sharka")

}
const result = addTwoNumbers (4, 3) 

//console.log("result: ", result);


function loginuserMassage(username){
    if (username === undefined){     
        console.log("Please enter a username");
        return
    }
    return `${username} is just logged in`
}
// console.log(loginuserMassage("sharka"));
// console.log(loginuserMassage());

//function calculateCartPrice(...num1){
function calculateCartPrice(val1, val2,...num1){
    return num1
}
//array in rest operator
//console.log(calculateCartPrice(10, 200, 300, 500));

const user = {
    username: "sharka",
    password: "<PASSWORD>"
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and password is ${anyobject.password}`);
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 399
});

    const myNewArray = [300, 290, 399, 499]
    function returnSecondValue(getArray){
        return getArray[2]
    }
    // console.log(returnSecondValue(myNewArray));
    console.log(returnSecondValue([200, 300, 499, 405]));
