// singleton 
// objects ko literals ki trha declair kren gy to singleton nhi bny ga // constructor sy agr bny ga to fir singleton bny ga 

//object literals

// Object.create  //constructor method jis me singleton bnta hy
//  const JsUser = {
//     name: "sharka",
//     agr : 18,
//     email: "sharka@gmail.com",
//      location: "lahore",
//      isLoggenIn: false,
//      lastLoggedIn: ["monday", "saturday"]
//  }
// console.log(JsUser.email);
// console.log(JsUser["email"]);

//HOW TO TAKE A SYMBOL AND ADD IT INTO AN OBJECTS KEYS 

// const mySym = Symbol("key1")
// // Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
// //    console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
// //    console.log(`Hello JS user, ${this.name}`);
// }

// // console.log(JsUser.greeting());
// // console.log(JsUser.greetingTwo());

const tinderUser = new Object()

console.log(tinderUser);
