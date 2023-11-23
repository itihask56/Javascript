"use strict" // treat all js code as newer version
let id =1566;//number=>2 to the power 23
let name="Itihas";//string => ""
let married = false;//boolean =>true/false
let age; //undefined

let val =null//standalone value
// console.log(typeof val);

let stDetails={
    "id":1566,
    "name":"Itihas",
    employeed:false,

}
console.log(typeof stDetails);
console.log([stDetails.id,stDetails.name,stDetails.employeed]);




//=/=/=/=/=/=/=/=/=/=/=/=/=/=/==/=/=/=/=/=/=/==/=/=/==/=/=/=/=/==//=/==/=/=/=/==/=/==/==/==//==/

/* Data types
Primitive datatypes stored in (stack)
NonPrimitive datattypes(Heaps)
*/

//stack
let myName = "Itihas";
let myNickName = myName;
myNickName="itihas verma";
console.log([myName,myNickName]);
//output:Itihas,ithas Verma
// only copy of data is passed to the var...and there is no change in main var


//Heap
let st_details={
    id:"1566",
    name:"Itihas",
    age:21,

}
let st2_details=st_details
st2_details.age=22;
console.log([st_details.age,st2_details.age])
//output:22,22

//reference of main variable is passed to the copied variable and if there is change in copied var then this change will 
//reflect in main varibale also
