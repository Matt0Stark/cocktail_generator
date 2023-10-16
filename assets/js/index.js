// Functions only needed for the main page (index.html)
<<<<<<< HEAD


var drinkSearchArray = [
  {
  ingredients: [
      "3 oz Bourbon (or rye)",
      "1 cube Sugar (or 1 tsp simple syrup)",
      "3 ds Bitters, Angostura",
      "1 twst Lemon peel (as garnish)"
  ],
  instructions: "Wet sugar cube with bitters and a dash of soda or water in an old fashioned glass, muddle, add ice and whiskey, stir to dissolve thoroughly, garnish",
  name: "old fashioned"
  },
  {
    ingredients: [
        "1 oz Jamaican rum, Appleton 12",
        "1 oz Bitters, Angostura",
        "1/2 oz Demerara syrup (1:1)",
        "1/4 oz Bitters, Angostura orange",
        "1  Orange peel"
    ],
    instructions: "Stir, strain into an ice filled old fashioned glass.  Garnish with expressed orange peel.",
    name: "west indian old fashioned"
  }
];


var displayElement = document.getElementById("drinkList");

for (var i = 0; i < drinkSearchArray.length; i++) {
  var drink = drinkSearchArray[i];

  var listItem = document.createElement("li");

  var nameHeading = document.createElement("h2");
  nameHeading.textContent = drink.name;

  var instructionsParagraph = document.createElement("p");
  instructionsParagraph.textContent = drink.instructions;

  listItem.appendChild(nameHeading);
  listItem.appendChild(instructionsParagraph);

  displayElement.appendChild(listItem);
  }

  
=======
var h2El = document.querySelector("h2")


// -------------------------------------------------------
// BEGINING OF 21+ CODE
// CODED BY STARK INDUSTRIES
// -------------------------------------------------------
var ageAppropriate = false;

//yes button --> stores are approp answer as true under the key ageAnswer
$(document).ready(function () {
  $("#answer-yes").click(function () {
    sessionStorage.setItem("ageAnswer", true);
  });
});
//launches modal 21+ upon page load. this would also be assigned to window,
//it should basically be all thats needed here, but we can adjust event timing around it if need be with show, shown, hide, hidden.  
$(document).ready(function () {

  // console.log("21+?");
  // console.log(ageAppropriate);
  var ageAnswer = sessionStorage.getItem("ageAnswer");

  if (ageAnswer === null) {
    // console.log("was null setting to false");
    ageAppropriate = false;
    $("#myModal").modal("show");
  } else {
    ageAppropriate = JSON.parse(ageAnswer)
    if (ageAppropriate === false) {
      $("#myModal").modal("show");
    }
  }
});

// calls the babyjail modal (when no selected from 21+ modal)
$(document).ready(function () {
  $("#answer-no").click(function () {
    window.alert("Halt! You're goin' to Baby jail")
    $("#myOtherModal").modal("show");
  });
});

// media tags for modal
// @media only screen and (max-width: 700px){
//   .modal-content {
//     width: 100%;
//   }
// }

// -------------------------------------------------------
// END OF 21+ CODE
// -------------------------------------------------------


// -------------------------------------------------------
// BEGINING OF API CODE
// CODED BY LUKE
// -------------------------------------------------------
let drinkArray = []

// Searches Ninja's Cocktail Api for specified drink name
function searchNinjaApiByName(searchParameters) {
  let requestDrinkArray = `https://api.api-ninjas.com/v1/cocktail?${searchParameters}`;
  fetch(requestDrinkArray, {
    headers: { 'X-Api-Key': 'HDpeNyqtTjwHQjF5lVs1Zg==pOwZrE93LfASTjer', "Content-Type": 'application/json' },
  })
    .then(function (response) {
      return response.json();
    })
    // Takes the search array and makes it the same as the array returned by the NinjaAPI
    .then(function (data) {
      drinkArray = data;
    })
    // Then "forEach" drink, request Img function
    // TODO: Move the empty array alert to display insted of the search array
    .then(function(){
      if (drinkArray.length === 0) {
        alert("No Drink Found")
      } else {
      drinkArray.forEach(requestImage)
      }
    })
    .then(function finalDrinksArray() {
      console.log(drinkArray)
    })
}

// Searches cocktailDB for a matching drink and if it finds one, it returns the url of that image
function requestImage(drink) {
  var requestImg = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink.name}`;
  fetch(requestImg)
    .then(function (response) {
      return response.json();
    })
    .then(function grabImgUrl(data) {
      if (data.drinks === null) {
        drink.url = "noImg";
      } else {
        var drinkUrl = data.drinks[0].strDrinkThumb;
        drink.url = drinkUrl;
      }
    })
}

// TODO: We will need to adjust it so that depending on which button is clicked,
// It either adds "name=" or "ingredients="
// If multiple ingredients, it'll need to add a comma between each ingredient
searchNinjaApiByName("name=margarita")
// searchNinjaApiByName("ingredients=vodka,cola,simple syrup")


// -------------------------------------------------------
// END OF API CODE
// -------------------------------------------------------
>>>>>>> main
