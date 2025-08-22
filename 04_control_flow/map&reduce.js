//map filterrr

//for each  dont return value, returns undefined

const nums =[4,15,8,7,4,10,5,9]
const filteredNums = nums.filter((num) => num > 8);

// const filteredNums = nums.filter((num) => { return num > 8 });



console.log(filteredNums);//[15, 10, 9]
    console.log(nums);//[4, 15, 8, 7,4, 10, 5, 9]

    // the filter() method does not change the original array. It returns a new array containing the filtered elements.






    const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', isActive: true },
   { id: 1, name: 'Alice', email: 'alice@example.com', isActive: true },
    { id: 1, name: 'Alice', email: 'alice@example.com', isActive: true },
  { id: 2, name: 'Bob', email: 'bob@example.com', isActive: false },
  { id: 3, name: 'Bob', email: 'charlie@example.com', isActive: true },
  { id: 4, name: 'David', email: 'david@example.com', isActive: false }
];


let usersList = users.filter( (value) => { return value["name"] == "Bob"    //value.name
     })//if theres return,  use {}

     console.log(usersList);
     /*[
  { id: 2, name: 'Bob', email: 'bob@example.com', isActive: false },
  { id: 3, name: 'Bob', email: 'charlie@example.com', isActive: true }
] */


  //filter() is designed for selection, not for transformation

  const superNew=[]

  const  readingList = users.filter((value) => {
     return value["id"]>2});

     console.log(readingList);
     /*[
  { id: 3, name: 'Bob', email: 'charlie@example.com', isActive: true },
  { id: 4, name: 'David', email: 'david@example.com', isActive: false }
] */

   const  readingList2 = users.filter((value) => 
      value.email == 'alice@example.com');

     console.log(readingList2);
     /*[
  { id: 1, name: 'Alice', email: 'alice@example.com', isActive: true },
  { id: 1, name: 'Alice', email: 'alice@example.com', isActive: true },
  { id: 1, name: 'Alice', email: 'alice@example.com', isActive: true }
]*/


//to check value of isActive for true
const  readingList3 = users.filter((value) => 
      value.isActive);

     console.log(readingList3);
     /*[
  { id: 1, name: 'Alice', email: 'alice@example.com', isActive: true },
  { id: 1, name: 'Alice', email: 'alice@example.com', isActive: true },
  { id: 1, name: 'Alice', email: 'alice@example.com', isActive: true },
  { id: 3, name: 'Bob', email: 'charlie@example.com', isActive: true }
]*/


const listedNum =[1,2,3,4,5,6,7,8,9,10]

// const newListedNum = listedNum.map((num) => num +10)
const newListedNum = listedNum.map((num) => { return num +10})

console.log(newListedNum)
/*[  11, 12, 13, 14, 15,  16, 17, 18, 19, 20]*/


const newListedNum2 = listedNum.map((num) => { return num *10})
                                       .map((num)=> num+1).filter((num) => num >40)

console.log(newListedNum2)

//[41, 51,  61, 71,81, 91, 101]

//values passes to next map



//--------------------reduce