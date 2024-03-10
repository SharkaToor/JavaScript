//user information in any app like tinder etc 
// const tinderUser = new Object()  //singelton 
// // const tinderUser = {} //non-singelton 

// tinderUser.id = " 123abc "
// tinderUser.name = "sharka"
// tinderUser.isLoggedIn = false

//console.log(tinderUser);

//**********************nested Objects ********************

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname {
//             firstname: "sharka",
//             lastname: "Toor"
//         }
//     }
// }
// document.write(regularUser.fullname);


//**************merge Objects*************/

//  const obj1 = { 1: "a" , 2: "b"}
// const obj2 = { 3: "a" , 4: "b"}

// //const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} , obj1 , obj2)  // mdn documentaion for empty array //{} Optional 

// const obj3 = {...obj1, ...obj2} //spread syntex 
// console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "h@email.com"
//     },
//     {
//         id: 1,
//         email: "h@email.com"
//     },
//     {
//         id: 1,
//         email: "h@email.com"
//     },
// ]
// console.log(users[2].email)
// console.log(users[2].id)

//we use these in database 
// console.log(Objects.keys(tinderUsere));
// console.log(Objects.enteris(tinderUsere));
// console.log(Objects.values(tinderUsere));

//kya object k pas koi specific property hy ya nhi to hm us k liye ye syntax use krty hen 
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


