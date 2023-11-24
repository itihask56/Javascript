const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heroes.concat(dc_heroes)); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// console.log([...marvel_heroes,...dc_heroes]) //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]



const array = [1,2,3,[4,5],6,[7,8,[9,10]]]
// console.log(array.flat(3))

//Loop through an array

// for (let index = 0; index < dc_heroes.length; index++) {
     
//     console.log(dc_heroes[index]);
// }


//join method

const join_element=dc_heroes.join("*")
// console.log(join_element);

//shift methodl
// console.log(marvel_heroes.shift());
// console.log(marvel_heroes.unshift("itihas"));
const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.unshift("Lemon"));