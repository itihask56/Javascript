function sayMyName(){
    console.log("I");
    console.log("t");
    console.log("i");
    console.log("h");
    console.log("a");
    console.log("s");
}
// sayMyName()

function addTwoNum(num1,num2){
    return num1+num2;
}

let result =(addTwoNum(2,3));
// console.log("Result:",result);

function loginUserMessage(username='no user'){
    if(!username){
        console.log("Please enter username");
    }
    return `${username} just logged in`;

}

const user = loginUserMessage("itihas")
// console.log("User: ",user);


function calculateCartPrice(...num){
    return num;
}
const price = calculateCartPrice(12,23,3,4,45)
// console.log(price);

const User={
    name:"Itihas",
    age:"21",
    location:"Chandigarh",


}

function handleObject(anyuser){
    console.log(`User is ${anyuser.name} and his age is ${anyuser.age}`);
}
// handleObject(User)