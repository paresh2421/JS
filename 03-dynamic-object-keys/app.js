const person = {
  name: "john",
};

person.age = "24";

console.log(person);

//square brackett notation

const items = {
  "featured-items": ["item1", "item2"],
};

console.log(person["name"]);
console.log(items["featured-items"]);

let appState = "error";
let keyName = "batman";
const app = {
  [appState]: true,
};

app[keyName] = "apple";
console.log(app);

const state = {
  loading: true,
  name: "",
  job: "",
};

function updateState(key, val) {
  state[key] = val;
}

updateState("name", "john");
updateState("job", "dev");
updateState("age", "24");

console.log(state);
