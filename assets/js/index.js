// Functions only needed for the main page (index.html)
console.log("index.js loaded")
var searchedDrinkName = "margarita";
var h2El = document.querySelector("h2")

var drinkArray = [];
// var drinkSearchArray = [
//   {
//   ingredients: [
//       "3 oz Bourbon (or rye)",
//       "1 cube Sugar (or 1 tsp simple syrup)",
//       "3 ds Bitters, Angostura",
//       "1 twst Lemon peel (as garnish)"
//   ],
//   instructions: "Wet sugar cube with bitters and a dash of soda or water in an old fashioned glass, muddle, add ice and whiskey, stir to dissolve thoroughly, garnish",
//   name: "old fashioned"
//   },
//   {
//     ingredients: [
//         "1 oz Jamaican rum, Appleton 12",
//         "1 oz Bitters, Angostura",
//         "1/2 oz Demerara syrup (1:1)",
//         "1/4 oz Bitters, Angostura orange",
//         "1  Orange peel"
//     ],
//     instructions: "Stir, strain into an ice filled old fashioned glass.  Garnish with expressed orange peel.",
//     name: "west indian old fashioned"
//   }
// ];

var ageAppropriate = false;




//yes button --> stores are approp answer as true under the key ageAnswer
$(document).ready(function(){
  $("#answer-yes").click(function(){
    sessionStorage.setItem("ageAnswer", true);
  });
});
//launches modal 21+ upon page load. this would also be assigned to window,
//it should basically be all thats needed here, but we can adjust event timing around it if need be with show, shown, hide, hidden.  
$(document).ready(function(){

  console.log("21+?");
  console.log(ageAppropriate);
  var ageAnswer = sessionStorage.getItem("ageAnswer");

  if(ageAnswer === null){
    console.log("was null setting to false");
    ageAppropriate = false;
    $("#myModal").modal("show");
  } else {
    ageAppropriate = JSON.parse(ageAnswer)
    if(ageAppropriate === false){
      $("#myModal").modal("show");
    }
  }
});


// calls the babyjail modal (when no selected from 21+ modal)
$(document).ready(function(){
  $("#answer-no").click(function(){
    window.alert("Halt! You're goin' to Baby jail")
    $("#myOtherModal").modal("show");
  });
});



// Searches Ninja's Cocktail Api for specified drink name
function searchNinjaApi(name) {
  var requestUrl = `https://api.api-ninjas.com/v1/cocktail?name=${name}`;
  fetch(requestUrl, {
    headers: { 'X-Api-Key': 'HDpeNyqtTjwHQjF5lVs1Zg==pOwZrE93LfASTjer', "Content-Type": 'application/json'},
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      drinkArray.push(data)
      console.log(drinkArray)
    })
}
searchNinjaApi(searchedDrinkName)


// Searches CocktailDB Api for an image of the drink
// function addImgFromCocktailDB() {
//   var requestUrl = "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data)
//     })
// }

// media tags for modal
// @media only screen and (max-width: 700px){
//   .modal-content {
//     width: 100%;
//   }
// }

