//Reduce - iterates, callback function, reduces to a single value(number, array or object), 1st Parameter 'acc'-> total of all calculations
// 2nd Parameter 'curr'->current iteration/value

const staff = [
  { name: "bob", age: 20, position: "developer", salary: 200 },
  { name: "anna", age: 25, position: "designer", salary: 100 },
  { name: "john", age: 30, position: "manager", salary: 250 },
  { name: "stan", age: 35, position: "intern", salary: 30 },
];

const dailyTotal = staff.reduce((total, person) => {
  total += person.salary;
  return total;
}, 0);

console.log(dailyTotal);
