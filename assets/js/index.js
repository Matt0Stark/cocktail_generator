// Functions only needed for the main page (index.html)
var h2El = document.querySelector("h2")

// var drinkSearchArray;

// -------------------------------------------------------
// BEGINING OF 21+ CODE
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


var nameForm = $("#byName");
nameForm.html(
  '<form id="nameSearch">' + 'You can search by name'+ '<p><input type= "text" id= "nameInput" placeholder="type drink name">' + '<p><input type= "submit" value = "Submit">'
);
  function findName (event){
    event.preventDefault();
    searchNinjaApiByName("name=" +searchName.val());
    console.log(searchName.val());
  }; 
  
  var partsForm = $('#byIngredients')
  partsForm.html('<form id="byParts">'+ '<p> OR by the drink ingredients' + '<p><input type = "text" placeholder="ingredient one" id="ingredient1">' + '<p><input type = "text" placeholder="ingredient two" id="ingredient2">' + '<p><input type = "text" placeholder="ingredient three" id="ingredient3">' + '<p><input type= "submit" value = "Submit">');

  function findParts (event){
    event.preventDefault();


    if (item1.val() === "") {
      return "";
    } else if  (item1.val() !== "" && item2.val() === "" && item3.val() === ""){
      searchNinjaApiByName("ingredients=" + item1.val())
    } else if  (item1.val() !== "" && item2.val() !== "" && item3.val() === ""){
      searchNinjaApiByName("ingredients=" + item1.val() + "," + item2.val())
    } else if  (item1.val() !== "" && item2.val() !== "" && item3.val() !== ""){
      searchNinjaApiByName("ingredients=" + item1.val() + "," + item2.val() + "," + item3.val())
    } else {
      return "";
    }
  }
      // var wholeForm = $('#searching')
      var searchName = $('input[id="nameInput"]');
      var item1 = $('input[id="ingredient1"');
      var item2 = $('input[id="ingredient2"');
      var item3 = $('input[id="ingredient3"');
      nameForm.on('submit',findName);
      partsForm.on('submit',findParts);
    

// -------------------------------------------------------
// END OF 21+ CODE
// -------------------------------------------------------


// -------------------------------------------------------
// BEGINING OF API CODE
// -------------------------------------------------------
let drinkArray = []

// Searches Ninja's Cocktail Api for specified drink name
async function searchNinjaApiByName(searchParameters) {
  let requestDrinkArray = `https://api.api-ninjas.com/v1/cocktail?${searchParameters}`;
  let response = await fetch(requestDrinkArray, {
    headers: { 'X-Api-Key': 'HDpeNyqtTjwHQjF5lVs1Zg==pOwZrE93LfASTjer', "Content-Type": 'application/json' },
  })
   
  let data = await response.json();
  drinkArray = data
  if (drinkArray.length === 0) {
    alert("No Drink Found")
  } else {
    drinkArray = await Promise.all(drinkArray.map(requestImage))
  }
  displaySearch(drinkArray)
}


// Searches cocktailDB for a matching drink and if it finds one, it returns the url of that image
function requestImage(drink) {
  var requestImg = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink.name}`;
  return fetch(requestImg)
    .then(function (response) {
      return response.json();
    })
    .then(function grabImgUrl(data) {
      if (data.drinks === null) {
        drink.url = "./assets/images/whiterussian.png";
      } else {
        var drinkUrl = data.drinks[0].strDrinkThumb;
        drink.url = drinkUrl;
      }
      return drink
    })
}
// -------------------------------------------------------
// END OF API CODE
// -------------------------------------------------------



// -------------------------------------------------------
// BEGINNING OF SEARCH RESULTS
// -------------------------------------------------------

var drinkListEl = $("#drinkList")

function displaySearch(searchResults) {
  $(drinkListEl).empty();
  for (var i = 0; i < searchResults.length; i++)
  $(drinkListEl).append(
    $("<div></div>").addClass("eachDrink").append(
      $("<button></button>").addClass("searchButton").append(
        $("<img></img>").attr("src", searchResults[i].url),
        $("<p></p>").text(searchResults[i].name),
      ).attr("data-index", i)
    )
    )
}

//-------------------------------------
// END OF SEARCH RESULTS MAIN
//-------------------------------------

var resultsBoxEl = $("#results-box")
var drinkNameEl = $(".drink-name")
var drinkImgEl = $(".drink-image")
var ingredientsListEl = $(".ingredients")
var recipeEl = $(".recipe")

var saveButtonEl = $("#searched-drink-details")

$(resultsBoxEl).off("click").on("click", ".searchButton", function(){
  var searchDrinkIndex = (parseInt($(this).attr("data-index")))
  var selectedDrink = (drinkArray[searchDrinkIndex])

  // Populate Modal
  drinkNameEl.text(selectedDrink.name)
  drinkImgEl.attr("src", selectedDrink.url)
  recipeEl.text(selectedDrink.instructions)
  ingredientsListEl.empty()
  for (var i = 0; i < selectedDrink.ingredients.length; i++){
    ingredientsListEl.append(
      $("<li></li>").text(selectedDrink.ingredients[i])
    )
  }
  recipeEl.text(selectedDrink.instructions)

  // Call modal to show
  $("#searched-drink-details").modal("show")

  // Add to favorites button
  $(saveButtonEl).off().on("click", "#favBtn", function(event){
    event.preventDefault()
  
    var tempArray = JSON.parse(localStorage.getItem("cocktail-favorites"));
    if (tempArray === null) {
      tempArray = [];
    }
    for (var i = 0; i < tempArray.length; i++) {
      if (tempArray[i].name === selectedDrink.name) {
        tempArray.splice(i, 1)
        // tempArray.splice(tempArray.indexOf(selectedDrink), 1)
        console.log("already in array")}
    } 
    tempArray.unshift(selectedDrink)
    localStorage.setItem("cocktail-favorites", JSON.stringify(tempArray))
  })
  

})
