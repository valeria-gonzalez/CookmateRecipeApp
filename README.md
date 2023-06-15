<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />

<h3 align="center">Cookmate Recipe App</h3>

  <p align="center">
    Hello there, Cookmate is made to help you find recipes from all over the web based on your pantry!
    <br />
    <br />
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project
Cookmate is a cross-platform mobile app created to help users find recipes from various sources on the internet using web scraping, that match their available ingredients, making cooking easier then ever. This project was initially designed to help young people better their eating habits, however, it quickly turned into a project for anyone with a desire to cook. The app is designed to look youthful and creative, while still remaining easy to use and understandable.

### Built With

[![Node][Node.js]][Node-url] [![React Native][React-Native]][React-url] [![Javascript][Javascript]][Javascript-url] [![Python][Python]][Python-url] [![Flask][Flask]][Flask-url] [![Firestore][Firestore]][Firestore-url] [![Expo][Expo]][Expo-url]

### Features
- __Ingredient-based Recipe Search:__ Cookmate enables users to save all their available ingredients, and it collects recipes that can be created using those ingredients. By incorporating Nutritionix API to allow searching for hundreds of new ingredients.
- __Category Selection:__ Users can choose the category of recipes they want to explore, such as breakfast, lunch or dinner.
- __Save Favorite Recipes:__ Cookmate allows users to save their favorite recipes for future reference.
- __Web Scraping:__ The app incorporates a python web scraper to collect recipes from the internet (currently limited to one website).
- __Database Integration:__ Cookmate uses Google Firestore as its database, allowing for efficient storage and retrieval of user data, such as available ingredients and favorite recipes.
- __Personal API:__ The app includes a custom API built with Flask and hosted on Railway, that provides endpoints to support the app's functionality, such as executing the web scraper, retrieving user ingredients and filtering recipes based on them, as well as managing some database interactions.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Screenshots
![Cookmate Home Screen](https://github.com/valeria-gonzalez/recipeApp/assets/71797910/16535773-8252-4dc2-ab88-151f66e938b5)
![Pantry Screen](https://github.com/valeria-gonzalez/recipeApp/assets/71797910/de9bfb78-d0a5-49b7-8698-372a312f10b6)
![Ingredient Search Screen](https://github.com/valeria-gonzalez/recipeApp/assets/71797910/fbd3c484-8a09-4269-91f7-d12012f5c5c8)
![Breakfast Category Screen](https://github.com/valeria-gonzalez/recipeApp/assets/71797910/2ad4491c-1fa9-4a03-a416-ee5799983dd0)
![Recipe Screen (Header)](https://github.com/valeria-gonzalez/recipeApp/assets/71797910/7e80605c-702a-4f93-9765-5d76d798d482)
![Recipe Screen (Ingredients and Instructions)](https://github.com/valeria-gonzalez/recipeApp/assets/71797910/8fda4496-a304-410a-bd1e-152475c006b7)
![Recipe Screen (Save Button)](https://github.com/valeria-gonzalez/recipeApp/assets/71797910/43731a58-d40b-40af-bfc3-729fefc1ca30)
![Saved Recipes Screen](https://github.com/valeria-gonzalez/recipeApp/assets/71797910/4d4fd368-ef7f-4c2f-ac10-628dc43d68e1)
![Loading Screen (Before Showing Found Recipes)](https://github.com/valeria-gonzalez/recipeApp/assets/71797910/ca898389-680f-4c10-86ef-1d35d5248adb)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## UI Mockups
![1](https://github.com/valeria-gonzalez/recipeApp/assets/71797910/d50be408-aac6-4203-855c-85ea8cdc5b37)
![Recipe appppp-2](https://github.com/valeria-gonzalez/recipeApp/assets/71797910/13ab6536-1997-42f6-b364-b1e21f05c1da)
![Recipe appppp-3](https://github.com/valeria-gonzalez/recipeApp/assets/71797910/d139ea82-1122-40bf-9fa8-649f18b5b514)
![Recipe appppp-4](https://github.com/valeria-gonzalez/recipeApp/assets/71797910/640940f9-0f81-463f-b79b-ead9569e4343)
![Recipe appppp-5](https://github.com/valeria-gonzalez/recipeApp/assets/71797910/d9ba47eb-5c2d-400b-a149-c9bbd925a339)
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
* [bowlofdelicious.com](https://www.bowlofdelicious.com/)
* [icons8.com](https://icons8.com/illustrations)
* [Nutritionix API](https://www.nutritionix.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/valeria-gonzalez/recipeApp.svg?style=for-the-badge
[contributors-url]: https://github.com/valeria-gonzalez/recipeApp/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/valeria-gonzalez/recipeApp.svg?style=for-the-badge
[forks-url]: https://github.com/valeria-gonzalez/recipeApp/network/members
[stars-shield]: https://img.shields.io/github/stars/valeria-gonzalez/recipeApp.svg?style=for-the-badge
[stars-url]: https://github.com/valeria-gonzalez/recipeApp/stargazers
[issues-shield]: https://img.shields.io/github/issues/valeria-gonzalez/recipeApp.svg?style=for-the-badge
[issues-url]: https://github.com/valeria-gonzalez/recipeApp/issues
[license-shield]: https://img.shields.io/github/license/valeria-gonzalez/recipeApp.svg?style=for-the-badge
[license-url]: https://github.com/valeria-gonzalez/recipeApp/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/valeria-gonzalez-segura
[product-screenshot]: images/screenshot.png
[Node.js]: https://img.shields.io/badge/node.js-green?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[React-Native]: https://img.shields.io/badge/React-native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactnative.dev/
[Javascript]: https://img.shields.io/badge/Javascript-black?style=for-the-badge&logo=javascript&logoColor=yellow
[Javascript-url]: https://www.javascript.com/
[Python]: https://img.shields.io/badge/Python-blue?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org/
[Flask]: https://img.shields.io/badge/Flask-black?style=for-the-badge&logo=flask&logoColor=white
[Flask-url]: https://flask.palletsprojects.com/en/2.3.x/
[Firestore]: https://img.shields.io/badge/Firestore-blue?style=for-the-badge&logo=firebase&logoColor=yellow
[Firestore-url]: https://firebase.google.com/docs/firestore
[Expo]: https://img.shields.io/badge/Expo-black?style=for-the-badge&logo=expo&logoColor=white
[Expo-url]: https://docs.expo.dev/?utm_source=google&utm_medium=cpc&utm_content=performancemax&gclid=CjwKCAjwyqWkBhBMEiwAp2yUFlIy2iexdm_qLWLUfa4yVFpK1Vf48XGSmdgDCmZeUKzWcdYDTdM1yxoCpGAQAvD_BwE
