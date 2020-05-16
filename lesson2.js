//Lesson 02

/**
 * 02.js
 * authot: Meto
 * Date: 05,16,2020
 */

/////////////////////////////////////////////
//chalenge 3
///////////////////////////////////////////////
// let car = {
//   marka: "Toyota",
//   model: "Highlender",
//   color: "Grey",
//   year: 2018,
//   horseForce: 370,
//   price: "37777$",
// };

// console.log(`About this car : `);

// for (let x in car) {
//   console.log(`${x} - ${car[x]}`);
// }

// let car1 = {
//   marka: "Toyota",
//   model: "Prius",
//   color: "Grey",
//   year: 2018,
//   horseForce: 160,
//   price: "13333$",
// };

// console.log(`About this car : `);
// for (let x in car1) {
//   console.log(`${x} - ${car1[x]}`);
// }

// let car2 = {
//   marka: "BMW",
//   model: "E35",
//   color: "Grey",
//   year: 2012,
//   horseForce: 280,
//   price: "11111$",
// };

// console.log(`About this car : `);
// for (let x in car2) {
//   console.log(`${x} - ${car2[x]}`);
// }

// let car3 = {
//   marka: "Mercedes",
//   model: "GL",
//   color: "Grey",
//   year: 2016,
//   horseForce: 450,
//   price: "28000$",
// };

// console.log(`About this car : `);
// for (let x in car3) {
//   console.log(`${x} - ${car3[x]}`);
// }

let car = {
  marka: "Toyota",
  model: "Highlender",
  color: "Grey",
  year: 2018,
  horseForce: 370,
  price: "37777$",
};

let car1 = {
  marka: "Toyota",
  model: "Prius",
  color: "Grey",
  year: 2018,
  horseForce: 160,
  price: "13333$",
};

let car2 = {
  marka: "BMW",
  model: "E35",
  color: "Grey",
  year: 2012,
  horseForce: 280,
  price: "11111$",
};

let car3 = {
  marka: "Mercedes",
  model: "GL",
  color: "Grey",
  year: 2016,
  horseForce: 450,
  price: "28000$",
};

let allCars = [car, car1, car2, car3];

for (i = 0; i < allCars.length; i++) {
  if (allCars[i].price < "15000$") {
    console.log(`yes we have some car's :  ${allCars[i].model}`);
  } else {
    console.log("Sorry bu, we don't have a similar price car's ");
  }
}
