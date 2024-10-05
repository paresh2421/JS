// Javascript Nuggets - Promises

// async await
// consume/use promises

// Pending, Rejected, FulFilled
const value = 2;

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3);
  if (random === value) resolve("You guessed it correctly");
  else reject("Wrong number");
});

promise.then((data) => console.log(data)).catch((err) => console.log(err));
