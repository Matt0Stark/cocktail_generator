// Functions only needed for the favorites page (favorites.html)

var favoritesContainer = $("#favoritesList")


function loadFavorites() {
  favoritesContainer.empty();
  favoritesArray = JSON.parse(localStorage.getItem("cocktail-favorites"));
  if (favoritesArray === null) {
    favoritesArray = [];
  }

  for (var i=0; i< favoritesArray.length; i++)
    $(favoritesContainer).append(
      $("<div></div>").append(
        $("<img></img>").attr("src", favoritesArray[i].url),
        $("<p></p>").text(favoritesArray[i].name)
      )
    )
}

loadFavorites();