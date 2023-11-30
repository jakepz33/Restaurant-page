// function clear() {
//   const background = document.querySelector("#background");
//   background.textContent = "";
//   makeBGgrid();
//   console.log("running clear");
// }
import "./home.css";
import anchorImg from "./noun-anchor.svg";
import fishImg from "./big-fish.png";
import smallFishImg from "./small-fish.png";

function makeBGgrid() {
  const background = document.querySelector("#background");
  const contentContainer = document.querySelector("#content");

  contentContainer.id = "menuContent";
  background.textContent = "";
  background.id = "centerflex";

  const gridContainer = document.createElement("div");
  gridContainer.id = "grid-container";
  background.appendChild(gridContainer);
}

function createMenuItems() {
  const menuItems = [
    {
      name: "wild ocean",
      description: "our daily seafood menu",
    },
    {
      name: "Tuna Sushi Bowl",
      description: "known as poke bowl",
      price: "2.90",
    },
    {
      name: "Dolce Latte Gnocchi",
      description: "butternut squash, pumpkin seeds",
      price: "3.40",
    },
    {
      name: "Soft Shell Crab Pakora",
      description: "homemade raita",
      price: "5.95",
    },
    {
      name: "Prawn Malabar Curry",
      description: "pollack, spinach, basmati rice",
      price: "2.50",
    },
    {
      name: "Tuna Sushi Bowl",
      description: "known as poke bowl",
      price: "2.90",
    },
    {
      name: "Dolce Latte Gnocchi",
      description: "butternut squash, pumpkin seeds",
      price: "3.40",
    },
    {
      name: "Soft Shell Crab Pakora",
      description: "homemade raita",
      price: "5.95",
    },
    {
      name: "Prawn Malabar Curry",
      description: "pollack, spinach, basmati rice",
      price: "2.50",
    },
  ];

  const gridContainer = document.querySelector("#grid-container");
  let counter = 1;

  menuItems.forEach((menuItem) => {
    const gridDiv = document.createElement("div");
    const gridClass = `item${counter}`;
    gridDiv.classList.add(gridClass);

    const h3 = document.createElement("h3");
    const para = document.createElement("p");

    h3.textContent = menuItem.price
      ? `${menuItem.name} - ${menuItem.price}`
      : menuItem.name;

    para.textContent = menuItem.description;

    gridDiv.append(h3, para);
    gridContainer.appendChild(gridDiv);

    counter += 1;
  });

  const item1Container = document.querySelector(".item1");
  const imgElement = document.createElement("img");
  imgElement.src = anchorImg;

  imgElement.style.width = "50px";
  imgElement.style.height = "50px";
  item1Container.insertBefore(imgElement, item1Container.firstChild);

  return gridContainer;
}
function addBigFishImage() {
  const centerflex = document.querySelector("#centerflex");
  const fishElement = document.createElement("img");
  fishElement.src = fishImg;

  console.log(centerflex);
  centerflex.insertBefore(fishElement, centerflex.firstChild);
}
function addSmallFish() {
  const gridContainer = document.querySelector("#grid-container");
  const smallFishContainer = document.createElement("div");
  const smallFishElement = document.createElement("img");

  smallFishContainer.classList.add("item10");
  smallFishElement.src = smallFishImg;

  smallFishElement.style.width = "400px";
  smallFishElement.style.height = "182.7";
  smallFishContainer.appendChild(smallFishElement);
  gridContainer.appendChild(smallFishContainer);
}

function loadMenu() {
  makeBGgrid();
  addBigFishImage();
  createMenuItems();
  addSmallFish();
  //   const item1Container = document.querySelector("#item1");
  //   const imgElement = document.createElement("img");
  //   imgElement.src = "noun-anchor.svg";
  //   item1Container.insertBefore(imgElement, item1Container.firstChild);
}

export default loadMenu;
