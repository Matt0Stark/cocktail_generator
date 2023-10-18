# Cocktail Generator 

## Webpage Description
This is a cocktail generator web application.

Upon loading the web application for the first time the user is asked to confirm that they are over the age of 21. If they are not, they will be sent to "baby jail" and blocked using the web application. If the user is 21, they are presented with the main web page that has a search form.

On the search form, the user has the option to either search by a drink's name or up to 3 ingredients. If a drink isn't found, a drinks name doesn't exist, OR one of the ingredients doesn't exist, the user is presented with an alert, notifying them that no drink was found.

If the search criteria is successful, the user is present with a list of up to 10 cocktails that match the user's search criteria. The search results show a clickable image and name of the drink. If no image was found for the drink, a stock image is used.

Upon clicking on a cocktail from the search results, the user is presented a modal that shows the drinks name, image, list of ingredients, and instructions on how to prepare the cocktail. The user then has the option to save that drink to their favorites list which is stored into the browser's local storage. If the same drink is favorited more than once, that drink will be moved to the front of the favorites list but not added again.

The user has the option to navigate to their favorites list from the main page via the top right. If they do so, they are presented with all the cocktails they've favorited. From here they have the ability to access each cocktails modal again OR to remove the cocktail from their favorites. The user can also navigate back to the search page to find more wonderful cocktails to add to their collection.


## Link to Website
The deployed website can be accessed [here](https://matt0stark.github.io/cocktail_generator/)


## Acknowledgements
- Gary Almes (Professor)
- Katy Vincent and Ben Martin (TAs)
- [W3School](https://www.w3schools.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Stack Overflow](https://stackoverflow.com)


## Site Preview
![screenshot showing 21+ verification of user](./assets/images/cocktail_screenshot1.png)
![screenshot of baby jail](./assets/images/cocktail_screenshot2.png)
![screenshot of main page with search results displayed](./assets/images/cocktail_screenshot3.png)
![screenshot a cocktails modal](./assets/images/cocktail_screenshot4.png)
![screenshot of favorites page](./assets/images/cocktail_screenshot5.png)
![screenshot of cocktail modal from favorites page](./assets/images/cocktail_screenshot6.png)
![screenshot of modal confirming that the user wants to remove a cocktail from favorites](./assets/images/cocktail_screenshot7.png)