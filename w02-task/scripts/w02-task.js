/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Adefemi Henry Adelaja";
const currentYear = 2024;
const profilePicture = "images/adefemi_pp.jpeg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoods = [
  "Eba and Egusi",
  "Jollof Rice",
  "Pepper Soup",
  "Plantain and Egg",
];
foodElement.innerHTML = favoriteFoods.join(",");
const newFavoriteFood = "Yam and Egg";
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join(",")}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join(",")}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join(",")}`;
