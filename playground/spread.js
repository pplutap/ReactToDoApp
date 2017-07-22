// function add(a, b) {
//     return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, ...groupA];
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greetWithAge(name, age) {
    console.log('Hi ' + name + ', you are ' + age);
}
greetWithAge(...person);
greetWithAge(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Pawel', ...names];

final.forEach(function (name) {
    console.log('Hi ' + name);
});