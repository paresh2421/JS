// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ["apple", "orange", "lemon", "banana", "pear"];
const [first, second, ...restOfFruits] = fruits;
// console.log(first, second, restOfFruits);
const specificFruit = restOfFruits.find((fruit) => fruit === "lemon");
// console.log(specificFruit);

// objects
const person = { name: "john", lastName: "smith", job: "developer" };

const { name, ...restOfDetails } = person;

console.log(name, restOfDetails);

//functions
const getAvg = (name, ...scores) => {
  const avg =
    scores.reduce((total, items) => {
      return (total += items);
    }, 0) / scores.length;

  console.log(avg);
};

// getAvg(person.name, 86, 84, 79, 50);
const testScores = [23, 45, 67, 89];
getAvg(person.name, ...testScores);
