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

/* -------------------------------------------------------
End of functions that manager user's favorites
------------------------------------------------------- */