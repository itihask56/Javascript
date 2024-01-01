

const books = [
    {
      "title": "The Lord of the Rings: The Two Towers",
      "genre": "Dystopian",
      "publishDate": "1997",
      "edition": "9"
    },
    {
      "title": "Jane Eyre",
      "genre": "Dystopian",
      "publishDate": "1931",
      "edition": "1"
    },
    {
      "title": "The Handmaid's Tale",
      "genre": "Science Fiction",
      "publishDate": "2023",
      "edition": "2"
    },
    {
      "title": "The Martian",
      "genre": "Sci-Fi Thriller",
      "publishDate": "1904",
      "edition": "5"
    },
    {
      "title": "Pride and Prejudice",
      "genre": "Romance",
      "publishDate": "1935",
      "edition": "7"
    },
    {
      "title": "Harry Potter and the Sorcerer's Stone",
      "genre": "Fantasy",
      "publishDate": "1987",
      "edition": "7"
    },
    {
      "title": "The Handmaid's Tale",
      "genre": "Coming-of-Age",
      "publishDate": "2002",
      "edition": "4"
    },
    {
      "title": "Emma",
      "genre": "Mystery",
      "publishDate": "1977",
      "edition": "2"
    },
    {
      "title": "The Great Gatsby",
      "genre": "Political Satire",
      "publishDate": "1959",
      "edition": "4"
    },
    {
      "title": "The Great Gatsby",
      "genre": "Dystopian",
      "publishDate": "1971",
      "edition": "9"
    },
    {
      "title": "Wuthering Heights",
      "genre": "Coming-of-Age",
      "publishDate": "1966",
      "edition": "9"
    },
    {
      "title": "The Adventures of Sherlock Holmes",
      "genre": "Political Satire",
      "publishDate": "1975",
      "edition": "6"
    },
    {
      "title": "The Handmaid's Tale",
      "genre": "Sci-Fi Thriller",
      "publishDate": "2017",
      "edition": "7"
    },
    {
      "title": "The Catcher in the Rye",
      "genre": "Children's Literature",
      "publishDate": "2010",
      "edition": "8"
    },
    {
      "title": "The Secret Garden",
      "genre": "Coming-of-Age",
      "publishDate": "2019",
      "edition": "6"
    },
    {
      "title": "Wuthering Heights",
      "genre": "Fantasy",
      "publishDate": "1911",
      "edition": "4"
    },
    {
      "title": "Wuthering Heights",
      "genre": "Romance",
      "publishDate": "1989",
      "edition": "7"
    },
    {
      "title": "Pride and Prejudice",
      "genre": "Children's Literature",
      "publishDate": "1975",
      "edition": "7"
    },
    {
      "title": "Pride and Prejudice",
      "genre": "Romance",
      "publishDate": "1997",
      "edition": "8"
    },
];


//1st way
// const userBook=books.filter((bk)=>{
//     if(bk.genre==="Romance"){
//     console.log(bk);
    
//     }
// })
 


 //2nd way to return values
// const userBook=books.filter((bk)=>{
//     if(bk.genre==="Romance"){
//     // console.log(bk);
//     return bk;
//     }
// })
// console.log(userBook);


//multiple filters

const userBook = books.filter((bk)=>{
    if(bk.genre==="Romance"  && Number(bk.publishDate)>1935){
        return bk;
    }
})
console.log(userBook);


 