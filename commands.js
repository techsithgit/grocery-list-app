const fs = require("fs");
const file = "groceryList.json"

const readFile = fileName => {
  try {
    return JSON.parse(fs.readFileSync(fileName));
  } catch (e) {
    return [];
  }
};

const writeFile = (fileName, content) => {
  try {
    fs.writeFileSync(fileName, JSON.stringify(content));
    console.log("success");
  } catch (e) {
    console.log(e);
  }
};

const add = (item, price) => {
  let groceryList = readFile(file);

  let index = groceryList.findIndex(x => x.item === item);

  if (index === -1) {
    groceryList.push({ item, price });
  } else {
    groceryList[index].price += price;
  }
  writeFile(file, groceryList);
};

const remove = item => {
  let groceryList = readFile(file);

  const filteredList = groceryList.filter(x => x.item !== item);

  writeFile(file, filteredList);
};

const print = () => {
  let groceryList = readFile(file);

  console.log(groceryList);
};

const priceOf = item => {
  let groceryList = readFile(file);

  let index = groceryList.findIndex(x => x.item === item);

  if (index !== -1) {
    console.log(`price of ${item} is ${groceryList[index].price}`);
  } else {
    console.log(`${item} not found`)
  }
};

module.exports = {
  add,
  remove,
  print,
  priceOf
};
