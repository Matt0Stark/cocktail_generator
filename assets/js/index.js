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
    console.log(item1.val());
    console.log(item2.val());
    console.log(item.val());

    if (item1.val() === "") {
      return "";
    } else if  (item1.val() !== "" && item2.val() === "" && item3.val() === ""){
      console.log("one ingredient")
      searchNinjaApiByName("ingredients=" + item1.val())
    } else if  (item1.val() !== "" && item2.val() !== "" && item3.val() === ""){
      console.log("two ingredient")
      searchNinjaApiByName("ingredients=" + item1.val() + "," + item2.val())
    } else if  (item1.val() !== "" && item2.val() !== "" && item3.val() !== ""){
      console.log("three ingredient")
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
    .then(function () {
      if (drinkArray.length === 0) {
        alert("No Drink Found")
      } else {
        drinkArray.forEach(requestImage)
      }
    })
    .then(function finalDrinksArray() {
      console.log(drinkArray)
      // displaySearch()
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
        drink.url = "../images/whiterussian.png";
      } else {
        var drinkUrl = data.drinks[0].strDrinkThumb;
        drink.url = drinkUrl;
      }
    })
}

// TODO: We will need to adjust it so that depending on which button is clicked,
// It either adds "name=" or "ingredients="
// If multiple ingredients, it'll need to add a comma between each ingredient
searchNinjaApiByName("name=long island");
// console.log(searchNinjaApiByName("name=$('searchName')"));
// searchNinjaApiByName("ingredients=vodka,cola,simple syrup")






// -------------------------------------------------------
// END OF API CODE
// -------------------------------------------------------


// var drinkArray = [
//   {
//   ingredients: [
//       "3 oz Bourbon (or rye)",
//       "1 cube Sugar (or 1 tsp simple syrup)",
//       "3 ds Bitters, Angostura",
//       "1 twst Lemon peel (as garnish)"
//   ],
//   instructions: "Wet sugar cube with bitters and a dash of soda or water in an old fashioned glass, muddle, add ice and whiskey, stir to dissolve thoroughly, garnish",
//   name: "old fashioned"
//   url: "https://www.liquor.com/thmb/wm9ICT4sskWaeUONYmoCqiTEjLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__08113350__bourbon-old-fashioned-720x720-recipe-ade6f7780c304999be3577e565c9bcdd.jpg"
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
//     name: "west indian old fashioned",
//     url: "https://hips.hearstapps.com/hmg-prod/images/delish-190816-white-russian-0119-landscape-pf-1568744178.jpg?crop=0.670xw:1.00xh;0.240xw,0&resize=1200:*"
//   }
// ];





// var displayElement = document.getElementById("drinkList");

// function displaySearch () {

  
//   for (var i = 0; i < drinkArray.length; i++) {
//     var drink = drinkArray[i];
    
//     var listItem = document.createElement("li");
    
//     var nameHeading = document.createElement("h2");
//     nameHeading.textContent = drink.name;
    
//     var pictureHere = document.getElementById("img");
//     pictureHere.src = drink.url;
    
//     listItem.appendChild(nameHeading);
//     listItem.appendChild(pictureHere);
    
//     displayElement.appendChild(listItem);
//   }
// }


