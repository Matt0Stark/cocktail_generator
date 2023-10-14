// Functions only needed for the main page (index.html)
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


// Searches Ninja's Cocktail Api for specified drink name
function searchNinjaApiByName(name) {
  var requestDrinkArray = `https://api.api-ninjas.com/v1/cocktail?name=${name}`;
  fetch(requestDrinkArray, {
    headers: { 'X-Api-Key': 'HDpeNyqtTjwHQjF5lVs1Zg==pOwZrE93LfASTjer', "Content-Type": 'application/json' },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        drinkArray.push(data[i])
      }
      // console.log(drinkArray)
    })


    .then(function () {

        var requestImgUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkArray[0].name}`;
        fetch(requestImgUrl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            var imgUrl = "";
            if (data.drinks === null) {
              imgUrl = "no-img";
            } else {
              // Will always want 0 index from img API
              imgUrl = data.drinks[0].strDrinkThumb;
            }
            drinkArray[0].url = imgUrl;
          })
          .then(function () {
            return;
          })


    })
    .then(function () {
      console.log(drinkArray);
    })
}
searchNinjaApiByName(searchedDrinkName)



// // Searches Ninja's Cocktail Api for specified drink name
// function searchNinjaApiByName(name) {
//   var requestUrl = `https://api.api-ninjas.com/v1/cocktail?name=${name}`;
//   fetch(requestUrl, {
//     headers: { 'X-Api-Key': 'HDpeNyqtTjwHQjF5lVs1Zg==pOwZrE93LfASTjer', "Content-Type": 'application/json' },
//   })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       // drinkArray.push(data[0])
//       // console.log("This is the data supplied by ninja")
//       // console.log(data);
//       addImgFromCocktailDB(data);
//     })
// }

// // Searches CocktailDB Api for an image of the drink and will output if an image was found or not
// function addImgFromCocktailDB(array) {
//   for (var i = 0; i < array.length; i++) {
//     var requestUrlTwo = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${array[i].name}`;
//     // console.log(`Drink name passed from ninja to cocktailDB ${array[2].name}`)
//     fetch(requestUrlTwo)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         // console.log(data)
//         if (data.drinks === null) {
//           console.log(`Error: Img not found`)
//         } else {
//           // Will always want 0 from this list
//           // console.log(`CocktailDB searched for an image of a ${data.drinks[0].strDrink}`)
//           console.log(`${data.drinks[0].strDrink} Img url:${data.drinks[0].strDrinkThumb}`)
//         }
//       })
//     }
//   }

// searchNinjaApiByName(searchedDrinkName)
