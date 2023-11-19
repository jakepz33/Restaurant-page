export default function initializePage() {
  const contentDiv = document.getElementById("content");
  const listItemContent = ["Home", "Menu", "Contact"];
  const weekdays = [
    "Sunday: 10am - 6pm",
    "Monday: 10am - 8pm",
    "Tuesday: 10am - 8pm",
    "Wednesday: 10am - 8pm",
    "Thursday: 10am - 8pm",
    "Friday: 10am - 8pm",
    "Saturday: 10am - 8pm",
  ];

  const nav = document.createElement("nav");
  const navList = document.createElement("ul");

  for (const content of listItemContent) {
    const liElement = document.createElement("li");
    const liButton = document.createElement("button");
    liElement.appendChild(liButton);
    liButton.textContent = content;
    navList.appendChild(liElement);
  }
  //   for (const day of weekdays) {
  //     const dayPara = document.createElement("p");
  //     dayPara.textContent = day;

  //   }
  const backgroundDiv = document.createElement("div");
  backgroundDiv.id = "background";

  // Create elements for Flex One = leftBox
  const flexOne = document.createElement("div");
  const name = document.createElement("h1");

  name.textContent = "The Scoop Group";
  name.id = "name";
  flexOne.classList.add("flexbox");
  flexOne.appendChild(name);
  backgroundDiv.appendChild(flexOne).appendChild(name);

  // Create elements for Flextwo - right box
  const flexTwo = document.createElement("div");
  const whiteBox = document.createElement("div");
  const aboutUsFlex = document.createElement("div");
  const aboutUs = document.createElement("h3");
  const aboutUsPara = document.createElement("p");
  const hoursFlex = document.createElement("div");
  const hoursHeader = document.createElement("h3");
  const hours = document.createElement("p");
  const locationDiv = document.createElement("div");
  const locationHeader = document.createElement("h3");
  const locationPara = document.createElement("p");

  locationHeader.textContent = "Location";
  locationPara.textContent = "123 Mission Beach, San Diego";

  locationDiv.appendChild(locationHeader);
  locationDiv.appendChild(locationPara);

  flexTwo.classList.add("flexbox");
  flexTwo.classList.add("flexTwo");
  whiteBox.id = "whitebox";
  aboutUs.textContent = "About us";
  aboutUsPara.textContent =
    "Indulge in the vibrant flavors of our Poke Bowl paradise. With a commitment to excellence and a focus on fresh, high-quality ingredients, our eatery brings the essence of Hawaiian cuisine to San Diego since 2016. Discover a warm and welcoming atmosphere, making every visit a delightful journey into the world of delectable Poke Bowls.";
  hoursHeader.textContent = "Hours";
  hoursFlex.appendChild(hoursHeader);

  for (const day of weekdays) {
    const dayPara = document.createElement("p");
    dayPara.textContent = day;
    hoursFlex.appendChild(dayPara);
  }

  aboutUsFlex.appendChild(aboutUs);
  aboutUsFlex.appendChild(aboutUsPara);
  // hoursFlex.appendChild(hoursHeader);
  flexTwo.appendChild(whiteBox).appendChild(aboutUsFlex);
  whiteBox.appendChild(hoursFlex);
  whiteBox.appendChild(locationDiv);
  backgroundDiv.appendChild(flexTwo);

  nav.appendChild(navList);
  contentDiv.appendChild(nav);
  contentDiv.appendChild(backgroundDiv);
}
