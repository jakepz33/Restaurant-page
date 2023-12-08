import "./home.css";
import clockImg from "./media/clock.svg";
import phoneIcon from "./media/phone1.svg";
import locationIcon from "./media/map-pin.svg";

function makeBGFlexbox() {
  const mainContentContainer = document.querySelector(".content");
  const background = document.querySelector(".background");

  mainContentContainer.id = "contactContent";
  background.id = "Contentbackground";
  background.textContent = "";

  const flexContainer = document.createElement("div");
  flexContainer.id = "flex-box";

  background.append(flexContainer);

  return flexContainer;
}

function leftBox() {
  const storeInfo = document.createElement("div");
  storeInfo.id = "storeInfo";

  const phonePara = document.createElement("p");
  const hoursPara = document.createElement("p");
  const addressPara = document.createElement("p");

  phonePara.classList.add("contactP");
  hoursPara.classList.add("contactP");
  addressPara.classList.add("contactP");

  const phoneImg = document.createElement("img");
  phoneImg.src = phoneIcon;
  phonePara.appendChild(phoneImg);
  phonePara.appendChild(document.createTextNode("209-488-5748"));

  const hoursImg = document.createElement("img");
  hoursImg.src = clockImg;
  hoursPara.appendChild(hoursImg);
  hoursPara.appendChild(
    document.createTextNode("Mon-Sat: 9am-9pm, Sun: 10am-6pm")
  );

  const addressImg = document.createElement("img");
  addressImg.src = locationIcon;
  addressPara.appendChild(addressImg);
  addressPara.appendChild(
    document.createTextNode("123 Mission Beach San Diego, CA")
  );

  storeInfo.append(phonePara, hoursPara, addressPara);

  return storeInfo;
}

function rightBox() {
  const storeMap = document.createElement("div");
  storeMap.id = "storeMap";

  const iframe = document.createElement("iframe");

  iframe.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13418.56927527911!2d-117.2594346297272!3d32.775224120337555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80deaa0a32eb9923%3A0x1eaa29c4f29dbcf8!2sMission%20Beach%2C%20San%20Diego%2C%20CA%2092109!5e0!3m2!1sen!2sus!4v1701818262264!5m2!1sen!2sus";

  iframe.width = "600";
  iframe.height = "450";
  iframe.style.border = "0";
  iframe.allowfullscreen = "";
  iframe.loading = "lazy";
  iframe.referrerpolicy = "no-referrer-when-downgrade";

  storeMap.appendChild(iframe);

  return storeMap;
}

function loadContact() {
  const background = makeBGFlexbox();
  background.append(leftBox());
  background.append(rightBox());
}

export default loadContact;
