console.time('my code took');
console.log('hello');
console.log('abir', 'noman');
console.log(4+32);
console.log(true);
console.log([2,45,6,12]);
// js object
console.log({abir: 'this', marks:32});
// js object table
console.table({abir: 'this', marks:32});
// js warning alert
console.warn('this is a warning for you');
// All clear
// console.clear()
console.timeEnd('my code took');
console.assert(200<150, 'Age > 150 is not possible');
console.error('this is an error');

// VARIABLES

var name = 'abir';
console.log(name);
var channel;
channel = 'js'
console.log(name,channel)

var area = 'dhaka';
console.log(area);

const ownersName = 'javaScript';
// ownersName = 'python'; const name not change
console.log(ownersName);

{
let area = 'Feni';
area = 'ctg';
console.log(area);
}
console.log(area);

const arr1 = [12,32,41,56,1,4];
arr1.push(99);
console.log(arr1); 

{
    let x = 1, y = 3;
    alert(y-x);
}
{
let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges );
}
// {
// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);
// alert(a);
// alert(c);
// }
// {
// let counter = 2;
// counter++;        // works the same as counter = counter + 1, but is shorter
// alert( counter );
// }