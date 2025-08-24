/*for 

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
    */

const fruits = ["apple", "banana", "cheri"];
for (let i = 0; i < fruits.length; i++) {
    console.log("I have a " + fruits[i]);
}
/*I have a apple
I have a banana
I have a cheri*/

for (let i = 0; i < 5; i++) {
    console.log(i);
}
/*0
1
2
3
4*/


//break and continue


for (let i=1;i<10;i++){

    if (i==8){
        console.log(`it the last ${i}`)
        break;
    }
    console.log(`its${i}`)

}
/*its1
its2
its3
its4
its5
its6
its7
its not the last8*/


for (let i=1;i<10;i++){

    if (i==8){
        console.log(`its not the last${i}`)
        continue;
    }
    console.log(`its${i}`)
}
/*its1
its2
its3
its4
its5
its6
its7
its not the last8
its9 */

//----------while loop---------

let count = 0;
while (count < 5) {
console.log("The current count is: " + count);
count++; }
console.log("The loop has finished.");


//------do w3hile

let score =1
do {
    console.log(`score is${score}`);
    score ++
} while (score <=10);

/*score is1
score is2
score is3
score is4
score is5
score is6
score is7
score is8
score is9
score is10 */


//it will print first ,check the conditin later

let scr =11
do {
    console.log(`score is${scr}`);
    scr ++
} while (scr <=10);

//score is11