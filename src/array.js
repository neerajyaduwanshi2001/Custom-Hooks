/*  console.log("dev")

var a = 10;
var b = 29;
var c = (a+b);
console.log(c) */

//const { kill } = require("nodemon/lib/monitor/run");

//---- sort -----//

// let a = ["dev","ram","abhi","baba"];
// let b = [1,4,43,2]
//  console.log(a);
//  a.reverse();
//  console.log(a) 


//----reverse----//

/* const b = [ "neeraj","dev","abhi","zoddy"];
console.log(b);
b.reverse();
console.log(b); */

//----pop----//-------  this is delete in last element value

// var a = ["shivani","jyoti","pooja","rani"];
// console.log(a);
// a.pop();                     
// console.log(a);

//----push----// this is add on element in last element

//var a = ["shivani","jyoti","pooja","rani"];
//console.log(a);
//a.push("kela","klala","ramkishan");
//console.log(a);

//---shift----// this is delete in 1no element value (pehle vali ko delete karta hai)

//var a = ["shivani","jyoti","pooja","rani"];
//console.log(a);
//a.shift();
//console.log(a);


//----unshift---// this is work is add on value in 1 no. element (pehle no par add karta hai )

//var a = ["shivani","jyoti","pooja","rani"];
//console.log(a);
//a.unshift("ramkali");
//console.log(a);

//----concat----//this is add in two array in but different table

/*var a = ["shivani","jyoti","pooja","rani"];
var b = [ "ranu","devid","good","raju"];
var c =a.concat(b)
console.log(c);*/

//----join----// this is add value same row
//var a = ["shivani","jyoti","pooja","rani"];
//var b = [1,4,56,05]
//console.log(a.join(b))


//-----slice---// 
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end ( end not included) where start and end represent the index of items in that array
//let a = [ "abhishek","babu","chucha","devend",1,2,3]
//console.log("slice",a.slice(4,7));

//splice---// this is delete value in starting array in splice in ar index help.

//let a = [ "abhishek","babu","chucha","devend"]
//console.log(a.splice(3));

// isarray -- The Array.isArray() static method determines whether the passed value is an Array.

//let a = [ "abhishek","babu","chucha","devend"];
//if (Array.isArray(a)) {
// console.log("this is array")
///} else {
// console.log("this is not array")
//}

//--indexOf search in index value in element 

// var a = ["abhishek","babu","chucha","devend"];
// var b = a.indexOf("chucha");
// console.log(b);

//lastindexof --- this is index show in last element in start
// var a = ["abhi","kahna","rana","ravi"];
// console.log(a);
// var b = a.lastIndexOf("ravi");
// console.log(b);

//--entries---The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
//const a = ["a", "b", "c"];

//for (const [index, element] of a.entries()) {
///console.log(index, element);
//}


//var ages = [9,45,33,11];
//console.log(ages);

//var b  = ages.some(checkadult);
//console.log(b); 

//function checkadult (ages) {
//}

//--- map-------------//
// var a = [ 29,10,12,39,03];
// var b = [ 20,90,03,32]
// b.map((item)=>{
//   console.log(item)
// })


//const a = ["dev","karan","rama"]

//a.map((item)=>{
//console.log(item)
//});

//--- filter ----//



//const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//words.filter((item )=>{
// console.log(item);
//})


//console.log('dev');

//var a =  ["dev","neeraj","rahul"]
//console.log(a);
//a.map((item)=>{
// console.log(item);
//})

//var a = ["pop",23,"frirnd"];
//console.log(a);


//do while loop 
//let a = 20
//let password ;
//do{ 
// password = console.log("what is the passcode")
//a--;
// }
//while( 10 < a);


//for loop
//for (let i = 0; i < 10;  i++ ){
//console.log(i)
//}


//let a = [4,2,67,43,322,21,]
//console.log(a);
//let a2 = a.filter((item)=>{
// return a < 10
//})
//console.log(a2 , a);


//if else condition //
//let ages = 12;
//if (ages>18) {
// console.log("you are eligible")

//} else {
// console.log("you are not eligible")
//}

//let a = 9
//if (a > 10 ) {
//console.log ("this is true")
//} else {
// console.log ("this is false")
//}

//filter method //
//let arr1 = [12,34,43,0,23,2,3,4,];
//console.log(arr1);
//let a2 = arr1.filter((a)=> {
//return a>10;
//}
//)
//console.log(a2); 


//let str="Bidyut"
//console.log( `Normal Output is ${str}` )
//for ( let i=0; i<str.length; i++ ){
//  console.log( str[ i ] )
//}
//console.log( " Done Sir!!! ")


//--table multiplication-- //

/*let value = 8
let next = 2
let nextTable = 0
const tablePrint = (value ,next) =>{
  for ( 
    let i = 1; i<11; i++ ){
    console.log( value, "X", i, "=", i * value);
    if(i == next){
     nextTable =  i * value * next
    } 
  }
}
tablePrint(value ,next )
tablePrint(nextTable) */


// function table( multiplication) {
//   i = 1; i<; i++ 
//   }
// table();

//pop/push
//var a = [ "aman","rohit","devid"];
//a.push("shri")
//console.log(a)
//a.push("devendra");
//console.log(a)

/*let a = "*"
for (i = "0"; i < 10; i++) {
  */

/*let number = prompt[]
if (number == 1) {
  console.log(`${number} is neither prime number`)
  } else if (number < 1) {
    console.log (`${number} is  not a prime number`)
  } else{
     for (var i = 2; i<11; i++);{
      if( number%i = 7)
     }
  } 
  console.log();*/


/*(const dev = ['spray', 'limit', 'elite', 'exuberant', ];

dev.map((dev)=> {
  console.log(dev);
})  */

/*var  p = 3.14
       radius =['3']
       a = p * radius * radius ;

       console.log(a); */



/*function circle(r) {
 console.log(Math.PI * r * r);
}
circle(7); */

// function day() {
//   var weekday = new Array(7);
//   weekday[0]="Monday";
//   weekday[1]="Tuesday";
//   weekday[2]="Wednesday";
//   weekday[3]="Thursday";
//   weekday[4]="Friday";
//   weekday[5]="Saturday";
//   weekday[6]="Sunday";
//   console.log("Today is " + weekday[6]);
// }
// day();


// const array = [1,5,6,7,9]

// for (var i = 0, sum = 0; i < array.length; sum += array[i++]);
//  console.log(sum)

// let num = 10;

// for (let i = 1; i <= num; i++){

//      let b = i * 2; 

//      console.log(b)

// };

//       slice------
//  let array = ["bhavna","chintu","dev","nilesh","adarsh"];      
//       b = array.slice(0,2,);
//       console.log(b);

//       splice--------
// let array = ["bhavna","chintu","dev","nilesh","adarsh"];
//    b = array.splice(1);
//    console.log(b);


// let a = ["bhavna","chintu","dev","nilesh"];
//     b = [45,74,98,93]
//     c = a.join(b)
//     console.log(c);

// isArray------
// var a = [2,3,3,]
// var b  = Array.isArray(a);
// console.log(b)

// let a = ["bhavna","chintu","dev","nilesh"];
//     b = a.lastIndexOf("nilesh")
// console.log(b)

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
//     b = fruits.includes();
// console.log(b);

// var ages = [13,12,21,45];
// var b = ages.some(checkAdult);

//       function checkAdult(age) {
//       return age >= 21;
//     }
// console.log(b);



// var ages = [1,2,3,4,5,12,13,15,18,91,01,83,45,32,1,57,86,79,94,70,83,50,87,];

// var b = ages.includes(5);
// console.log(b);
// function checkAdult(age) {

//   return ages >= 09 

// }

// const points = [40, 100, 1, 5, 25, 10];
// points.reverse(function(a, b){return a - b});
// console.log(points);\



// const hero = [
// {
//   name : "sanjay",
//   payment : 100
//   },
// {
// name : "govinda",
// payment : 200
// },
// {
//   name : "nanu",
//   payment :400
// }
// ];
// for (let i = 2; i < 3; i++) {
//  hero[i].payment = hero[i].payment - 10;
// }
// console.log(hero);




// const hero = [
//   {
//     name : "sanjay",
//     payment : 100
//     },
//   {
//   name : "govinda",
//   payment : 200
//   },
//   {
//     name : "nanu",
//     payment :400
//   }
//   ];

// hero.forEach((item) => {
//   console.log( `payment` ,`has`,`been`, hero.payment - 10);
//   // item.payment = hero.payment - 10;
//  });

// class student {
//   constructor(name,age,classes)
//   {

//     this.myname = dev
//     this.ages = 28
//     this.classes = 13
//   }
//   biodata() {
//     console.log(`this is `)

//   }


// let welcome = function sum() {

//   return "tere samm";

// }
// console.log(welcome());



// var ages = [13, 12, 21, 45];
// var b = ages.reduce(checkAdult);

// function checkAdult(age) {
//   return age >= 21;
// }
// console.log(b);


// const a = ["dev","karan","rama"]

// a.map((item)=>{
//   console.log(item)
// });


// const b = [500, 36, 95, 46];
// b.reduce((item) => {
//   console.log(item);
// // });


// var a = [car1 = 199,
//          car2 = 299,
//          car3 = 624,
//          car4 = 400]

//    a.filter((price)=>{
//      age >= 21;
//     console.log(price);
//    });



// let arr = [2,3,4,81,94,74,56];
//  let n = arr.map((x1, x2)=>{
//      return  x1 + x2;
//  })
//  console.log(n);


// let arr = [2, 3, 4, 81, 94, 74, 56];
// n = adultage = 83;
// if (adultage < 18) {
//   console.log("you are eligible in facebook")
// }
// else {
//   console.log("you are not eligible in this syntex")
// }

// let arr = [
//   { producId: "123123", rating: "4" },
//   { producId: "123123", rating: "2" },
//   { producId: "123123", rating: "3" },
//   { producId: "123123", rating: "3" },
//   { producId: "456", rating: "3" },
//   { producId: "456", rating: "5" },
//   { serviceId: "789", rating: "3" },
//   { serviceId: "789", rating: "3" },
//   { serviceId: "789", rating: "1" },
// ]
// let arr = ["dev","deveee","raja"]
// let b = arr.fill();
// console.log(b);

// const newarray = arr.filter(({  producId }) =>
//   producId);
//   console.log(newarray);
// let sum = 0
// for (let i = 0; i < 4; i++) {
//   sum = sum + parseInt(arr[i].rating)
// }
// console.log(sum /4);

// for (let arr = 0; arr < 3; arr++){
     
//   console.log( arr += arr.rating);
  
//   };
  
  
  // arr.forEach(item =>{
  //   total += item.rating;  
  // })
  // console.log("TOTAL :" + total / 4);

// const newarray = arr.filter(({  producId }) =>
//   producId);
// //   console.log(newarray);
// 


// let a = ["dev","neeraj","govind","shriram"]
// a.map((name)=>{
  
//   console.log(a);

// })

// let a = [1,2,3,4,5,6,7,8,9,10]
// let a = [1,2]
// let b = [2,4,6,8]
// let c = []

// a.map((item1)=>{
//   let res = true
//   b.map((item2)=>{
//     console.log(item2)
//     if(item1 == item2 ){
//      res = false;
//     }
//   })
//   if(res == true){
//     c.push(item1)
//   }
// })

// console.log(c)


// ///////for loop/////
// // let a = [1,2,3,4,5,6,7,8,9,10]
// let a = [1,2]
// let b = [2,4,6,8]
// let c = []

// for(i=0; i < a.length; i++){
//   // console.log(a[i])
//   let res = true
//   for(x=0; x<b.length; x++){
//     console.log("she is ",b[x])
//     if(a[i] == b[x]){
//       res = false
//       break;
//     }
//   }
//   if(res == true){
//     c.push(a[i])
//   }
// }

// console.log(c);


let str = ""
for (let i = 1; i <= 5; i++){
    // console.log("*".repeat(i))

  for(let j = 1; j <=i; j++){
    str += "*"
  }
  str += "\n"
  // console.log("\n")
}

console.log(str)
