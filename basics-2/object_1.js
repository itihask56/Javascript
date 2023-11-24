//singleton

//object.create


//object literals

const JsUser={
    fname:"itihas",
    lname:"Verma",
    "fullname":"Itihas Verma",
    age:21,
    location:"chandigarh",
    isLoogedIn:false,
    lastLoginDays:["Monday","Tuesday"]


}
//ways of accessing objects data
// console.log(JsUser.fname);
// console.log(JsUser["fname"]);
// console.log(JsUser.fullname);

//updateing data in a object

JsUser.age=22;
// console.log(JsUser["age"]);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

console.log(JsUser.greeting()); //Hello Js User
console.log(JsUser.greeting); //Hello Js User


