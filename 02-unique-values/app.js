//to get unique values, set can be used
//['all',...] used to change set to array

const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "burger",
    category: "lunch",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
  {
    name: "eggs",
    category: "breakfast",
  },
  {
    name: "pasta",
    category: "dinner",
  },
];

const categories = [...new Set(menu.map((item) => item.category))]; //spread operator

const result = document.querySelector(".result");
result.innerHTML = categories
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join("");

console.log(categories);
