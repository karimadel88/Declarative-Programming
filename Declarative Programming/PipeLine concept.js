let myData = [7,4,5,6,3,8,10];

const addOne = x => x = x+1;
const square = x => x*x;
const subtractTen = x => x-10;

// imparative
console.log('Imparative, Three Successive Calls')
for(let i=0;i<myData.length;i++) console.log(subtractTen(square(addOne(myData[i]))))

// condition 1 : make step 3 if step one and step two return number < 20
console.log('Imparative, Three Successive Calls with condition 1')
let myDataIm = [];
for(let i=0;i<myData.length;i++){ 
        if(square(addOne(myData[i])) < 20){
            myDataIm.push(subtractTen(square(addOne(myData[i]))))
        }
}
for(let i=0;i<myDataIm.length;i++) console.log(myDataIm[i]);

// ------------------------------------------------------------------------- //

// Declartive
console.log('Declarative, Three Successive Calls')
let myData2 = myData.map(addOne).map(square).map(subtractTen); // New List After 3 calls
for(let i=0;i<myData2.length;i++) console.log(myData2[i]);

// condition 1 : make step 3 if step one and step two return number < 20
console.log('Declarative, Three Successive Calls with condition 1')
let myData3 = myData.map(addOne).map(square).filter(x => x<20).map(subtractTen); // New List After 3 or 2 Calls if(condition)
for(let i=0;i<myData3.length;i++) console.log(myData3[i]);

// condition 2 : make step 3 for first and second item frim list of items with step1, step2 and less than 70
console.log('Declarative, Three Successive Calls with condition 2')
let myData4 = myData.map(addOne).map(square).filter(x => x<70).sort((a, b) => a - b).splice(0,2).map(subtractTen);
for(let i=0;i<myData4.length;i++) console.log(myData4[i]);

