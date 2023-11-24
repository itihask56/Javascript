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
console.log("User: ",user);