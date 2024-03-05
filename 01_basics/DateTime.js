// dates

//let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString()); 
// console.log(myDate.toISOString()); 
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

//let myCreatedDate = new Date (2024 , 0, 3, 4, 5)
//let myCreatedDate = new Date (2024 , 0, 3, 4, 5, 6, 4) // to print time with date 
//let myCreatedDate = new Date ("2024-01-03");
//console.log(myCreatedDate.toString());

 // time stamps 

 //let myTimeStamp = Date.now() // used for poles or quizes if you create 
 //console.log(myTimeStamp);
 //console.log(myCreatedDate.getTime());
 //console.log(Math.floor(Date.now()/1000));
 //console.log(Math.round(Date.now()/1000));

 let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
console.log(newDate.getDay());

newDate.toLocaleString('default' {
    weekday: "long"
})