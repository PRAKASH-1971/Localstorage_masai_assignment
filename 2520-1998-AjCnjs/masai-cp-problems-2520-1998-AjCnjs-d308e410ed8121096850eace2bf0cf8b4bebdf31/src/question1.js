// Problem 1. `CreateProduct1` factory function
// you are not allowed to use the this keyword in the CreateProduct1 function.
function CreateProduct1(product_name, brand, reviews, price, rating) {
  const product = {
    product_name,
    brand,
    reviews,
    price,
    rating
  };

  const getPrice = () => product.price;

  // 1st point increasePrice 
  const increasePrice = (amount) => {
    product.price += amount;
    return getPrice();
  };

  //2nd point decreasePrice method
  const decreasePrice = (amount) => {
    product.price -= amount;
    return getPrice();
  };

  //3rd point
  const isExpensive = () => product.price >= 1000;

  product.getPrice = getPrice;
  product.increasePrice = increasePrice;
  product.decreasePrice = decreasePrice;
  product.isExpensive = isExpensive;

  return product;
};

// Problem 2. `CreateProduct2` constructor function
function CreateProduct2(product_name, brand, reviews, price, rating) {
  this.product_name = product_name;
  this.brand = brand;
  this.reviews = reviews;
  this.price = price;
  this.rating = rating;
}

CreateProduct2.prototype.decreasePrice = function (amount) {
  this.price -= amount;
  return this.getPrice();
};
CreateProduct2.prototype.isExpensive = function () {
  return this.price >= 1000;
};

// console.log(product3.increasePrice(301)) 
CreateProduct2.prototype.getPrice = function () {
  return this.price;
};
// console.log(product3.isExpensive()) 

CreateProduct2.prototype.increasePrice = function (amount) {
  this.price += amount;
  return this.getPrice();
};

// console.log(CreateProduct2.increasePrice(1200));

/* end  */

// //Example invocation
class CreateProduct3 {
  constructor(product_name, brand, reviews, price, rating) {
    this.product_name = product_name;
    this.brand = brand;
    this.reviews = reviews;
    this.price = price;
    this.rating = rating;
  }

  getPrice() { return this.price; }

  increasePrice(amount) {
    this.price += amount;
    return this.getPrice();
  }

  decreasePrice(amount) {
    this.price -= amount;
    return this.getPrice();
  }

  isExpensive() { return this.price >= 1000; }
}

//Problem 4
let arr = [
  {
    name: "student1",
    subjects: [
      { Maths: 60 },
      { History: 30 },
      { English: "50" },
      { Biology: "40" },
    ],
    total: "",
  },
  {
    name: "student2",
    subjects: [
      { Maths: "35" },
      { History: "66" },
      { English: "20" },
      { Biology: "30" },
    ],
    total: "",
  },
];



/*  4 */
function findTotal(aray) {
  for (let q = 0; q < aray.length; q++) {
    let total = 0;
    for (let j = 0; j < aray[q].subjects.length; j++) {

      const subjectMarks = Object.values(aray[q].subjects[j])[0];

      if (!isNaN(subjectMarks)) { total += Number(subjectMarks); }
    } aray[i].total = total;
  }
  return aray;
}
// //Example invocation
//console.log(findTotal(arr));
// [
//   {
//     name: 'student1',
//     subjects: [ [Object], [Object], [Object], [Object] ],
//     total: 180
//   },
//   {
//     name: 'student2',
//     subjects: [ [Object], [Object], [Object], [Object] ],
//     total: 151
//   }
// ]

//Problem 5 - Array destructuring and spread operator



const user = {
  name: "john",
  password: "john@11",
  id: "7468uwe",
  city: "New York",
};


function removeKeyValuePair(user, keyToRemove) {
  //spread op use kiya hai
  const { [keyToRemove]: removedKey, ...rest } = user;
  //retuyen
  return rest;
}
console.log(removeKeyValuePair(user, "city"));
//Example usage
//  console.log(removeKeyValuePair(user, "city"));//{ name: 'john', password: 'john@11', id: '7468uwe' }



// Problem 6

const categoriesDirectory = {
  3: "Dessert",
  1: "MainCourse",
  2: "Starter"
};

const areas = [
  { id: 1, name: "British" },
  { id: 2, name: "Malaysian" }
];
let areasDirectory = areas.reduce((acc, item) => {
  acc[item.id] = item.name;
  return acc;
}, {});

// let obj2 = massageArray(exampleInputArray);
// console.log(JSON.stringify(obj2));

const inputArray = [
  {
    idMeal: 123,
    strMeal: "Chicken Curry",
    Category: 1,
    Area: 2,
    strIngredients: { 1: "Chicken", 2: "Curry Powder" },
    strMeasures: { 1: "200g", 2: "2 tbsp" }
  },
];

// const result = massageArray(inputArray);
// console.log(result);


function massageArray(inputArray) {
  return inputArray.map((item) => {
    const { idMeal, strMeal, Category, Area, strIngredients, strMeasures } = item;
    const categoryName = categoriesDirectory[Category] || "";
    const areaName = areas.find((area) => area.id === Area)?.name || "";

    const ingredients = [];
    for (let s = 1; s <= 20; s++) {
      const ingredient = strIngredients[s];
      const measure = strMeasures[s];
      if (ingredient && measure) { ingredients.push({ ingredient, measure }) };
    }
    return {
      productId: idMeal,
      productTitle: strMeal,
      Category: categoryName,
      Area: areaName,
      Ingredients: ingredients,
    };
  });
}
//don't remove below export statement part
export {
  CreateProduct1,
  CreateProduct2,
  CreateProduct3,
  findTotal,
  removeKeyValuePair,
  // exampleInputArray,
  massageArray,
};
