function navBar() {
  const navLinks = ["Home", "Menu", "Contact"];

  const nav = document.createElement("nav");
  const navList = document.createElement("ul");

  for (const links of navLinks) {
    const liElement = document.createElement("li");
    const liButton = document.createElement("button");
    liButton.id = links.toLowerCase();

    console.log("running");
    liButton.textContent = links;
    liElement.appendChild(liButton);
    navList.appendChild(liElement);
  }

  nav.appendChild(navList);

  console.log("returning nav");
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
  //append home webpage
}

export default loadWebpage;
