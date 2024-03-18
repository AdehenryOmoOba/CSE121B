// Declare a new object literal variable named myProfile
let myProfile = {};

// Add properties to the myProfile object
myProfile.name = "Adefemi Henry Adelaja"; // Set name property
myProfile.photo = "images/adefemi_pp.jpeg"; // Set photo property
myProfile.favoriteFoods = [
  "Eba and Egusi",
  "Jollof Rice",
  "Pepper Soup",
  "Plantain and Egg",
]; // Set favoriteFoods property as an array
myProfile.hobbies = ["Reading", "Coding", "Football"]; // Set hobbies property as an array
myProfile.placesLived = []; // Set placesLived property as an empty array

// Add items to the placesLived array
myProfile.placesLived.push({
  place: "Lagos, Nigeria",
  length: "1 year",
});
myProfile.placesLived.push({
  place: "Abuja, Nigeria",
  length: "2 years",
});

// DOM Manipulation (Output)

// Assign the value of the name property to the HTML element with an ID of name
document.querySelector("#name").textContent = myProfile.name;

// Assign the value of the photo property as the src attribute of the HTML <img> with an ID of photo
document.querySelector("#photo").src = myProfile.photo;

// Assign the value of the name property as the alt attribute of the HTML <img> with an ID of photo
document.querySelector("#photo").alt = myProfile.name + "'s photo";

// For each favorite food in the favoriteFoods property
myProfile.favoriteFoods.forEach((food) => {
  // Create an HTML <li> element
  let li = document.createElement("li");
  // Set the textContent of the <li> element to the value of the favorite food
  li.textContent = food;
  // Append the <li> element to the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").appendChild(li);
});

// Repeat the process for hobbies
myProfile.hobbies.forEach((hobby) => {
  let li = document.createElement("li");
  li.textContent = hobby;
  document.querySelector("#hobbies").appendChild(li);
});

// For each object in the placesLived property
myProfile.placesLived.forEach((place) => {
  // Create an HTML <dt> element
  let dt = document.createElement("dt");
  // Set the textContent of the <dt> element to the place property of the current object
  dt.textContent = place.place;
  // Create an HTML <dd> element
  let dd = document.createElement("dd");
  // Set the textContent of the <dd> element to the length property of the current object
  dd.textContent = place.length;
  // Append the <dt> and <dd> elements to the HTML <dl> element with an ID of places-lived
  document.querySelector("#places-lived").appendChild(dt);
  document.querySelector("#places-lived").appendChild(dd);
});
