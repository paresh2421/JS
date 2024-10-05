//  Javascript Nuggets
//  Timestamps
console.log(new Date());

// Unix Time
// January 1, 1970
// 1s = 1000ms

// Date.now()
console.log(Date.now());
// new Date().getTime()
console.log(new Date().getTime());
// new Date().valueOf()
console.log(new Date().valueOf());

setTimeout(() => {
  console.log(Date.now());
}, 1000);

//create id's in learning apps
let people = [];
people = [...people, { id: Date.now(), name: "Peter" }];

setTimeout(() => {
  people = [...people, { id: Date.now(), name: "Anna" }];
  console.log(people);
}, 1000);
