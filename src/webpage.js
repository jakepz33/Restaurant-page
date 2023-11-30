import loadHomepage from "./home";
import clear from "./menu";

function navBar() {
  const navLinks = ["Home", "Menu", "Contact"];

  const nav = document.createElement("nav");
  const navList = document.createElement("ul");

  // Define functions corresponding to each link
  const linkFunctions = {
    Home: function () {
      console.log("Home button is selected");
      loadHomepage();
    },
    Menu: function () {
      console.log("Menu button is selected");
      clear();
    },
    Contact: function () {
      console.log("Contact button is selected");
    },
  };

  for (const links of navLinks) {
    const liElement = document.createElement("li");
    const liButton = document.createElement("button");
    liButton.id = links.toLowerCase();

    console.log("running");
    liButton.textContent = links;
    liButton.addEventListener("click", function () {
      linkFunctions[links]();
    });

    liElement.appendChild(liButton);
    navList.appendChild(liElement);
  }

  nav.appendChild(navList);
  return nav;
}

function backgroundDiv() {
  const backgroundDiv = document.createElement("div");
  backgroundDiv.id = "background";

  return backgroundDiv;
}

function loadWebpage() {
  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(navBar());
  contentContainer.appendChild(backgroundDiv());
  loadHomepage();
  //append home webpage
}

export default loadWebpage;
