//Filter - returns a new array, can manipulate the size of an array (unlike map), returns based on condition
//Find - returns a single instance (object), returns first match, if no match then undefined
const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "anna", age: 25, position: "designer" },
  { name: "john", age: 30, position: "manager" },
  { name: "stan", age: 35, position: "intern" },
];

//filter
const youngPeople = people.filter((person) => {
  //   if (person.age < 30) return person;
  return person.age < 30;
});

// console.log(youngPeople);

//find
const anna = people.find((person) => person.name === "anna");
// console.log(anna);

//multiple matches by find = first match in the array
const randomPerson = people.find((person) => person.age < 35);
// console.log(randomPerson);

const annan = people.filter((person) => person.age < 35);
console.log(annan[0].age);
