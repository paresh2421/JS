const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

const {
  first: batman,
  last,
  city,
  siblings: { sister: favSibling },
} = bob;

// console.log(last, city, batman, favSibling);

function printPerson({ first, last, city, siblings: { sister } }) {
  //or we can pass the object itself instead of destructuring right away
  console.log(first, last, sister);
}

printPerson(bob);
