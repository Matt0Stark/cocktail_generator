// Functions only needed for the favorites page (favorites.html)
var favoritesContainer = $("#favoritesList")
var favoritesArrayTwo;

// Loads from local storage and displays favorites on favorites webpage
function displayFavorites() {
  // Empty container (prevents showing double on refresh)
  favoritesContainer.empty();
  // Load from local storage
  favoritesArrayTwo = JSON.parse(localStorage.getItem("cocktail-favorites"));
  // If there is nothing in local storage, return an empty array
  if (favoritesArrayTwo === null) {
    favoritesArrayTwo = [];
  }
  // Cycle through array 
  // Add a drink card and remove button for each drink
  for (var i = 0; i < favoritesArrayTwo.length; i++)
    $(favoritesContainer).append(
      $("<div></div>").addClass("drink-container col-6 col-md-3 col-lg-2").append(
        $("<button></button>").addClass("drink-card").append(
          $("<img></img>").attr("src", favoritesArrayTwo[i].url),
          $("<p></p>").text(favoritesArrayTwo[i].name),
        )
      ).append(
        $("<button></button>").addClass("removeBtn").attr("data-index", i).text("remove")
      )
    )
}

// Listens for click on the remove buttons
$(favoritesContainer).on("click",".removeBtn", function () {
  // Find drink index of the drink associated with the remove button
  var favoritesIndex = parseInt($(this).attr("data-index"));
  // Call Modal and pass through index of button clicked
  $(removeModal).modal("show")

  // remove favorite button
  $(document).ready(function () {
    $("#answer-remove").click(function () {
    // Remove that index from the array
    favoritesArrayTwo.splice(favoritesIndex, 1)
    // Save array back to local storage
    localStorage.setItem("cocktail-favorites", JSON.stringify(favoritesArrayTwo))
    // Call the displayFavorites function to display the new favorites array
    displayFavorites()
    })
  })
})

displayFavorites();

// Listens for click of drink cards
$(favoritesContainer).on("click", ".drink-card", function () {
  console.log("card btn clicked")
})