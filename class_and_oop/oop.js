const user={
    username:"itihas",
    email:"itihask56@gmail.com",
    password:"12345678",
    isLoggedIn:true,
    getUser:function(){
        console.log(this.username)
    }
}
// console.log(user1.getUser());

// const user2={
//     username:"mr_verma",
//     email:"dev.verma@gmail.com",
//     password:"12345678",
//     isLoggedIn:true,
//     getUser:function(){
//         console.log(this.username)
//     }

// }

function User(username,email,isLoggedIn){
    this.username=username;
    this.email=email;
    this.isLoggedIn=isLoggedIn;
    this.getUser=function(){
        console.log(`My name is ${this.username}`)
    }

     
}

// const user1=User("itihas","dev.verma@gmail.com",false)
// const user2 = User("dev.verma","itihask56@gmail.com",true)
// console.log(user1)



const user1=new User("itihas","dev.verma@gmail.com",false)
const user2 = new User("dev.verma","itihask56@gmail.com",true)
console.log(user1.getUser())
// console.log(user2)