let car = {
  properties: [
    { label: 'Marka', value: 'Toyota' },
    { label: 'Model', value: 'Highlender' },
    { label: 'Color', value: 'Grey' },
    { label: 'Year', value: '2018' },
    { label: 'Horse Power', value: '370' },
    { label: 'Price', value: '31777' },
  ],
  marka: "Toyota",
  model: "Highlender",
  color: "Grey",
  year: 2018,
  horsePower: 370,
  price: 31777,
};

let car1 = {
  properties: [
    { label: 'Marka', value: 'Ford' },
    { label: 'Model', value: 'Mustang' },
    { label: 'Color', value: 'Black' },
    { label: 'Year', value: '1969' },
    { label: 'Horse Power', value: '340' },
    { label: 'Price', value: '37000' },
  ],
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

var popup = document.getElementById('popup');

function damachira(index) {
  var content = document.getElementById('content');
  content.innerHTML = '';

  if (allCars[index] && allCars[index].properties) {

    for (var i = 0; i < allCars[index].properties.length; i++) {
      var singleProperty = createDomElement(allCars[index].properties[i].label, allCars[index].properties[i].value);
      content.append(singleProperty);
    }

  }

  openPopup();
}

function createDomElement(label, value) {
  var singleProperty = document.createElement('div');
  singleProperty.setAttribute('class', 'popup__single-property');

  var labelSpan = document.createElement('span');
  labelSpan.setAttribute('class', 'popup__single-property-label');
  labelSpan.appendChild(document.createTextNode(label + ' - '));

  var valueSpan = document.createElement('span');
  valueSpan.setAttribute('class', 'popup__single-property-value');
  valueSpan.appendChild(document.createTextNode(value));

  singleProperty.append(labelSpan);
  singleProperty.append(valueSpan);

  return singleProperty;
}

function closePopup() {
  popup.classList.remove('popup--shown');
}

function showCars() {
  var input = document.getElementById('searchInput');
  var foundCars = findLessPriceThan(input.value);

  showSearchResultInHtml(foundCars, input.value);
  openPopup();
}

function findLessPriceThan(price) {

  var foundCars = [];

  for (i = 0; i < allCars.length; i++) {
    if (allCars[i].price < price) {
      foundCars.push(allCars[i]);
    }
  }

  return foundCars;
}

function showSearchResultInHtml(searchResult, price) {
  var content = document.getElementById('content');
  content.innerHTML = '';

  if (searchResult && searchResult.length) {
    // Show Result 
    for (var i = 0; i < searchResult.length; i++) {
      var searchResultNode = document.createElement('div');
      searchResultNode.setAttribute('class', 'popup__search-result');

      var text = searchResult[i].marka + " " + searchResult[i].model + " - " + searchResult[i].price + "$";
      var textNode = document.createTextNode(text);
      searchResultNode.appendChild(textNode);
      content.append(searchResultNode);
    }

  } else {

    // Show Error 
    var message = "Cars with price less than " + price + "$ was not found.";

    var notFoundNode = document.createElement('div');
    notFoundNode.setAttribute('class', 'popup__search-not-found');
    notFoundNode.appendChild(document.createTextNode(message));

    content.append(notFoundNode);
  }

}

function openPopup() {
  popup.classList.add('popup--shown');
}