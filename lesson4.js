let car = {
  marka: "Toyota",
  model: "Highlender",
  color: "Grey",
  year: 2018,
  horsePower: 370,
  price: 31777,
};

let car1 = {
  marka: "Ford",
  model: "Mustang",
  color: "Black",
  year: 1969,
  horsePower: 340,
  price: 37000,
};

let car2 = {
  marka: "Mercedes-Benz",
  model: "CLS-50",
  color: "Grey",
  year: 2014,
  horsePower: 280,
  price: 13500,
};

let car3 = {
  marka: "Mini",
  model: "Cooper",
  color: "Red",
  year: 2013,
  horsePower: 170,
  price: 12200,
};

let allCars = [car, car1, car2, car3];
let carFound = false;
for (i = 0; i < allCars.length; i++) {
  if (allCars[i].price < 15000) {
    carFound = true;
  }
}
if (carFound) {
  console.log("Yes, we have some car's.");
} else {
  console.log("No, sorry we dont have car's in this price.");
}
