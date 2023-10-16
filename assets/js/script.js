// JavaScript Functions that get called by all HTML pages


/* -------------------------------------------------------
Functions that manage the save and deletion of drinks
to the favorites array
-------------------------------------------------------*/ 
var favoritesArray = [];

function addToFav(drinkObject) {
  // If drink is already in favorites, 
  // Remove it so it can be readed to the front of the array
  if (favoritesArray.indexOf(drinkObject) > -1){
    removeFromFav(drinkObject)
  }
  // Add drink to the front of the array
  favoritesArray.unshift(drinkObject)
  saveFavArray()
}

function removeFromFav(drinkObject) {
  var removedDrink = favoritesArray.splice(favoritesArray.indexOf(drinkObject), 1)
  removedDrink = []
  saveFavArray()
}

function saveFavArray() {
  localStorage.setItem("cocktail-favorites", JSON.stringify(favoritesArray))
}

// Used to test saving to favorites

// var testdrink =   {
//   ingredients: [
//       "50 ml tequila 100% agave",
//       "20 ml triple sec",
//       "15 ml freshly squeezed lime juice"
//   ],
//   instructions: "Add all ingredients into a shaker with ice. Shake and strain into a chilled cocktail glass.",
//   name: "margarita",
//   url: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
// }

// addToFav(testdrink)


/* -------------------------------------------------------
End of functions that manager user's favorites
------------------------------------------------------- */