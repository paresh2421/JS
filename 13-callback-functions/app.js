function makeUppercase(value) {
  console.log(value.toUpperCase());
}
// makeUppercase("peter");

function reverseName(name) {
  console.log(name.split("").reverse().join(""));
}

function handleName(name, cb) {
  const fullname = `${name}`;
  cb(fullname);
}

// handleName("peter", makeUppercase);
// handleName("peter", reverseName);

handleName("suzy", (value) => {
  console.log(value);
});
