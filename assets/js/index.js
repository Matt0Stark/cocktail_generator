// Functions only needed for the main page (index.html)
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

  var searchForm = $("#user-choice");
    searchForm.html(
      '<form id="searching">' + 'You can search by name' +  '<p><input type= "text" id= "nameInput" placeholder="type drink name">' + '<p> OR by the drink ingredients' + '<p><input type = "text" placeholder="ingredient one" id="ingredient1">' + '<p><input type = "text" placeholder="ingredient two" id="ingredient2">' +'<p><input type = "text" placeholder="ingredient three" id="ingredient3">' +  '<p><input type= "submit" value = "Submit">'
      );

      function handleSearchSubmit (event){
        event.preventDefault();
        console.log(searchName.val());
        console.log(searchNinjaApiByName("name=" +searchName.val()));
        console.log(item1.val());
        console.log(item2.val());
      }
      var wholeForm = $('#searching')
      var searchName = $('input[id="nameInput"]');
      var item1 = $('input[id="ingredient1"');
      var item2 = $('input[id="ingredient2"');
      var item3 = $('input[id="ingredient3"');
      wholeForm.on('submit',handleSearchSubmit);
    

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
searchNinjaApiByName("name=margarita");
// console.log(searchNinjaApiByName("name=$('searchName')"));
// searchNinjaApiByName("ingredients=vodka,cola,simple syrup")


// -------------------------------------------------------
// END OF API CODE
// -------------------------------------------------------