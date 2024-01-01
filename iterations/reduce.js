num = [1,2,3];


//normal function
// const my_num=num.reduce(function (acc,curr_val){
//     console.log(`acc:${acc} and curr_val:${curr_val}`)
//     return acc+curr_val;
// },0)
// console.log(my_num)


//arrow function
// const my_num=num.reduce((acc,curr_val)=> acc+curr_val,0)
// console.log(my_num)


const grocery=[
    {
      "itemname": "Gala Apples",
      "price": 50,  // Price in Indian Rupees (₹)
      "image": "https://example.com/images/gala-apples.jpg"
    },
    {
      "itemname": "Fresh Spinach",
      "price": 25,
      "image": "https://example.com/images/fresh-spinach.jpg"
    },
    {
      "itemname": "Whole Wheat Bread",
      "price": 40,
      "image": "https://example.com/images/whole-wheat-bread.jpg"
    },
    {
      "itemname": "Free-Range Eggs",
      "price": 60,
      "image": "https://example.com/images/free-range-eggs.jpg"
    },
    {
      "itemname": "Organic Milk",
      "price": 55,
      "image": "https://example.com/images/organic-milk.jpg"
    },
    {
      "itemname": "Strawberries",
      "price": 120,
      "image": "https://example.com/images/strawberries.jpg"
    },
    {
      "itemname": "Bell Peppers",
      "price": 65,
      "image": "https://example.com/images/bell-peppers.jpg"
    },
    {
      "itemname": "Basmati Rice",
      "price": 80,
      "image": "https://example.com/images/basmati-rice.jpg"
    },
    {
      "itemname": "Yogurt",
      "price": 40,
      "image": "https://example.com/images/yogurt.jpg"
    },
    {
      "itemname": "Olive Oil",
      "price": 250,
      "image": "https://example.com/images/olive-oil.jpg"
    }
  ]
  
  

  const priceToPay=grocery.reduce((acc,item)=>(acc+item.price),0)
  console.log(priceToPay);