const coffee = function(){
    let ingredients=["coffee","sugar","milk"]
    for(let i=0;i<ingredients.length;i++){
        console.log(ingredients[i]);
    }
}
// coffee()

const Makecoffee = ()=>{
    let ingredients=["coffee","sugar","milk"]
    for(let i=0;i<ingredients.length;i++){
        console.log(ingredients[i]);
    }
    console.log("coffee is ready");
}
// Makecoffee()

const addTwoNum = (a,b)=>{
    return a+b;
}
// let result = addTwoNum(2,3)
// console.log("Add: ",result);

//In fact, if you have only one parameter, you can skip the parentheses as well:
const hello = name =>"Hello "+ name;
// console.log(hello("Itihas"));

const account ={
    name:"Itihas",
    email:"itihas@gmail.com",
    password:"12345",
    account: createAccount=()=>{
       console.log(`Account created with ${account.name}`);
    }
}

// account.account()

const user={
    username:"Itihas",
    price:111,
    welcomeMessage:function(){
        console.log(`${username}, Welcome to website`);
    }
     
}
user.welcomeMessage()