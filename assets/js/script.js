// JavaScript Functions that get called by all HTML pages

// Adds an drink object into the favorites array and saves
function addToFav(drinkObject) {
  // loads from local storage the favoritesArray
  var tempArray = JSON.parse(localStorage.getItem("cocktail-favorites"));
  if (tempArray === null) {
    tempArray = [];
  }
  // If drink is already in the array, remove it
  for (var i = 0; i < tempArray.length; i++){
    if (tempArray[i].name === drinkObject.name)
    tempArray.splice(tempArray.indexOf(drinkObject), 1)
  }

  // Add drink to the front of the array
  tempArray.unshift(drinkObject)
  // Save the array back into local storage
  localStorage.setItem("cocktail-favorites", JSON.stringify(tempArray))
}

// -----------------------------------
// DELETE ME LATER
// Used to test saving to favorites
// -----------------------------------
var testdrink = {
  ingredients: [
    "15 ml Tequila",
    "15 ml Vodka",
    "15 ml White rum",
    "15 ml Cointreau",
    "15 ml Gin",
    "30 ml Lemon juice",
    "20 ml simple syrup",
    "Top with Cola"
  ],
  instructions: "Add all ingredients into highball glass filled with ice. Stir gently. Optionally garnish with lemon slice.[1]",
  name: "long island iced tea",
  url: "https://www.thecocktaildb.com/images/media/drink/wx7hsg1504370510.jpg"
}
var testdrink2 = {
  ingredients: [
    "50 ml tequila 100% agave",
    "20 ml triple sec",
    "15 ml freshly squeezed lime juice"
  ],
  instructions: "Add all ingredients into a shaker with ice. Shake and strain into a chilled cocktail glass.",
  name: "margarita",
  url: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
}
var testdrink3 = {
  ingredients: [
    "1/2 oz Vodka, Aylesbury Duck",
    "1/2 oz Gin, Fords",
    "1/2 oz Tequila, Cabeza",
    "1/2 oz Light rum, Cana Brava",
    "3/4 oz Lemon juice",
    "3/4 oz Simple syrup (1:1)",
    "1 spl Cola, Coca Cola",
    "1 wdg Lemon (as garnish)"
  ],
  instructions: "Shake, strain over rocks in a Collins, splash Coke, garnish.",
  name: "86 long island iced tea",
  url: "../images/whiterussian.png"
}
// addToFav(testdrink)
// addToFav(testdrink2)
// addToFav(testdrink3)
// -----------------------------------
// END OF DELETE ME LATER
// -----------------------------------