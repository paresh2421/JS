const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

// console.log(fruit1, fruit2, fruit3);

const [batman, , bob, anna, kelly] = friends;
// console.log(batman, bob, anna, kelly);

let one = "john";
let two = "bob";
[two, one] = [one, two];
console.log(one, two);
