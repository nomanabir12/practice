// console.time('my code took');
// console.log('hello');
// console.log('abir', 'noman');
// console.log(4+32);
// console.log(true);
// console.log([2,45,6,12]);
// // js object
// console.log({abir: 'this', marks:32});
// // js object table
// console.table({abir: 'this', marks:32});
// // js warning alert
// console.warn('this is a warning for you');
// // All clear
// // console.clear()
// console.timeEnd('my code took');
// console.assert(200<150, 'Age > 150 is not possible');
// console.error('this is an error');

// // VARIABLES

// var name = 'abir';
// console.log(name);
// var channel;
// channel = 'js'
// console.log(name,channel)

// var area = 'dhaka';
// console.log(area);

// const ownersName = 'javaScript';
// // ownersName = 'python'; const name not change
// console.log(ownersName);

// {
// let area = 'Feni';
// area = 'ctg';
// console.log(area);
// }
// console.log(area);

// const arr1 = [12,32,41,56,1,4];
// arr1.push(99);
// console.log(arr1); 

// {
//     let x = 1, y = 3;
//     alert(y-x);
// }
// {
// let apples = "2";
// let oranges = "3";

// // both values converted to numbers before the binary plus
// alert( +apples + +oranges );
// }
// // {
// // let a = 1;
// // let b = 2;

// // let c = 3 - (a = b + 1);
// // alert(a);
// // alert(c);
// // }
// // {
// // let counter = 2;
// // counter++;        // works the same as counter = counter + 1, but is shorter
// // alert( counter );
// // }
// alert( false == 0 );

// {
// let myVar;
// myVar = String(34);
// console.log(myVar, (typeof myVar));
// }
// {
// let booleanVar = true;
// console.log(booleanVar, (typeof booleanVar));
// }
// {
// let date = new Date();
// console.log(date, (typeof date));
// }
// Let str = Number("2525");
// str = Number("2525");
// console.log(str, (typeof str));

// let i = 0;
// while (i < 3) { 
//   alert( i );
//   i++;
// }

// let number = parseInt('34.8778');
// console.log(number, (typeof number));

// Function
//  let name = 'abir';
//  let name2 = 'mahmud'
//  console.log(`Welcome to our website ${name}`);
// console.log(`Welcome to our website ${name2}`);

// let userName = 'abir';

// function showMessage() {
//   userName = "abir"; 

//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// alert( userName ); 

// showMessage();

// alert( userName );

// let userName = 'xyz';

// function showMessage() {
//   let userName = "abc"; 

//   let message = 'Hello, ' + userName; 
//   alert(message);
// }
// showMessage();

// alert( userName );
// function greet(name,thanks){
//     console.log(`welcome to our webpage ${name} stay home stay safe. ${thanks}!`);

// }

// let name = 'abir';
// greet(name, 'thanks a lot');
// const mygreet = function (name, thanks) {
//     let msg = `welcome to our webpage ${name} stay home stay safe. ${thanks}!`;
//     return msg;

// }

// let name = 'abir';

// let val = mygreet(name, 'thanks a lot');
// console.log(val);

// // Functions == Comments

// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
  
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//       }
  
//       alert( i ); // a prime
//     }
//   }
//   function sayHi() {
//     alert( "Hello" );
//   }
  
//   alert( sayHi ); 

//   let sayHi = function() {
//     alert( "Hello" );
//   };
  
//   let func = sayHi;

//   function f() {
//     // no semicolon needed after function declaration
//   }
  
//   for(;;) {
//     // no semicolon needed after the loop
//   }
//   let userName = prompt("Your name?", "Alice");
//   let isTeaWanted = confirm("Do you want some tea?");
  
//   alert( "Visitor: " + userName ); let userName = prompt("Your name?", "Alice");
//   let isTeaWanted = confirm("Do you want some tea?");
  
//   alert( "Visitor: " + userName ); // Alice
//   alert( "Tea wanted: " + isTeaWanted );let userName = prompt("Your name?", "Alice");
//   let isTeaWanted = confirm("Do you want some tea?");
  
//   alert( "Visitor: " + userName ); // Alice
//   alert( "Tea wanted: " + isTeaWanted );
//   alert( "Tea wanted: " + isTeaWanted );

//   let userName = prompt("Who's there?", '');

// if (userName === 'Admin') {

//   let pass = prompt('Password?', '');

//   if (pass === 'TheMaster') {
//     alert( 'Welcome!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Canceled' );
//   } else {
//     alert( 'Wrong password' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Canceled' );
// } else {
//   alert( "I don't know you" );
// }


// 26-07-2021 Objects

// let userId = {     // an object
//     name: "John",  // by key "name" store value "John"
//     age: 30        // by key "age" store value 30
//   };

//   let user = {
//     name: "John"
//   };
//   let admin = user;

//   function marry(man, woman) {
//     woman.husband = man;
//     man.wife = woman;
  
//     return {
//       father: man,
//       mother: woman
//     }
//   }
  
//   let family = marry({
//     name: "John"
//   }, {
//     name: "Ann"
//   });
// delete family.father;
// delete family.mother.husband;

// let user = {
//     name: "John",
//     age: 30
//   };
  
//   user.sayHi = function() {
//     alert("Hello!");
//   };
  
//   user.sayHi();
// let user = {
//     // ...
//   };
  
//   // first, declare
//   function sayHi() {
//     alert("Hello!");
//   };
  
  // then add as a method

//   user.sayHi = sayHi;
  
//   user.sayHi(); // Hello!
// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     // "this" is the "current object"
//     alert(this.name);
//   }

// };

// user.sayHi()

// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       // "this" is the "current object"
//       alert(this.name);
//     }
  
//   };
  
//   user.sayHi()

// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       alert(user.name); // "user" instead of "this"
//     }
  
//   };

// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       alert( user.name ); // leads to an error
//     }
  
//   };
  
  
//   let admin = user;
//   user = null; // overwrite to make things obvious
  
//   admin.sayHi();

// let user = {
//     firstName: "Ilya",
//     sayHi() {
//       let arrow = () => alert(this.firstName);
//       arrow();
//     }
//   };
  
//   user.sayHi();

function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Jack");
  
  alert(user.name); // Jack
  alert(user.isAdmin); // false

  

  