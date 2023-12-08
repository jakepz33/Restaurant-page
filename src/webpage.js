import loadHomepage from "./home";
import loadMenu from "./menu";
import gitHubIcon from "./media/github-mark-white.png";
import loadContact from "./contact";

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
      loadMenu();
    },
    Contact: function () {
      console.log("Contact button is selected");
      loadContact();
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
  backgroundDiv.classList.add("background");

  return backgroundDiv;
}

function footer() {
  const footer = document.createElement("div");
  const footerContainer = document.createElement("div");
  const madeBy = document.createElement("p");
  const inlineText = document.createElement("span");
  const imgDiv = document.createElement("img");
  imgDiv.src = gitHubIcon;
  imgDiv.style.width = "25px";
  imgDiv.style.height = "25px";

  const anchorLink = document.createElement("a");
  anchorLink.href = "https://github.com/jakepz33";
  anchorLink.target = "_blank";
  anchorLink.appendChild(imgDiv);

  footer.classList.add("footer");
  footerContainer.classList.add("footerContainer");
  inlineText.textContent = "developed by Jacob Perez";
  madeBy.append(inlineText, anchorLink);
  footerContainer.append(madeBy);
  footer.appendChild(footerContainer);

  return footer;
}

function loadWebpage() {
  const contentContainer = document.querySelector("#content");
  contentContainer.appendChild(navBar());
  contentContainer.appendChild(backgroundDiv());
  contentContainer.appendChild(footer());
  loadHomepage();
  //append home webpage
}

export default loadWebpage;
