//map() returns a new array, does not change the size of original array (unlike filter), uses values from original array when making new one
const people = [
  {
    name: "bob",
    age: 20,
    position: "developer",
  },
  {
    name: "anna",
    age: 25,
    position: "designer",
  },
  {
    name: "john",
    age: 45,
    position: "owner",
  },
];

const getAges = (person) => person.age * 2;

const ages = people.map(getAges);
console.log(ages);

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector(`#result`);

result.innerHTML = names.join("");

// console.log(newPeople);
