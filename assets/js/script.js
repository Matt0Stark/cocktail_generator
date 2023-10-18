// JavaScript Functions that get called by all HTML pages

// // Adds an drink object into the favorites array and saves
// function addToFav(drinkObject) {
//   console.log(drinkObject)
//   // loads from local storage the favoritesArray
//   var tempArray = JSON.parse(localStorage.getItem("cocktail-favorites"));
//   if (tempArray === null) {
//     tempArray = [];
//   }
//   // If drink is already in the array, remove it
//   for (var i = 0; i < tempArray.length; i++) {
//     if (tempArray[i].name === drinkObject.name) {
//       tempArray.splice(tempArray[i], 1)
//       // tempArray.splice(tempArray.indexOf(drinkObject), 1)
//       console.log("already in array")}
//   } 

//   // Add drink to the front of the array
//   tempArray.unshift(drinkObject)
//   // Save the array back into local storage
//   localStorage.setItem("cocktail-favorites", JSON.stringify(tempArray))
// }