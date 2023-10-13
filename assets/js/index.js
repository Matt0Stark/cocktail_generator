// Functions only needed for the main page (index.html)


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


// Get the HTML element by its ID
var displayElement = document.getElementById("drinkList");

// Loop through the drinkSearchArray
for (var i = 0; i < drinkSearchArray.length; i++) {
  var drink = drinkSearchArray[i];

  // Create a new list item for each drink
  var listItem = document.createElement("li");

  // Create a heading for the name
  var nameHeading = document.createElement("h2");
  nameHeading.textContent = drink.name;

  // Create a paragraph for the instructions
  var instructionsParagraph = document.createElement("p");
  instructionsParagraph.textContent = drink.instructions;

  // Append the name heading and instructions paragraph to the list item
  listItem.appendChild(nameHeading);
  listItem.appendChild(instructionsParagraph);

   // Append the list item to the <ul> element
   displayElement.appendChild(listItem);
  }

  