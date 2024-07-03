import "../css/home.css";
import createHeader  from "../modules/header";
import dndCharacters from "../images/staffImg.png";

// function createHomeBackground() {
//   const backgroundHome = document.createElement("div");
//   backgroundHome.setAttribute("id", "background-home");

//   return backgroundHome;
// }

function createHomeMain() {
  const main = document.createElement("main");
  main.setAttribute("id", "main");

  const name = document.createElement("div"); //name element containign the name of restaurant
  name.setAttribute("id", "name");

  const japName = document.createElement("div"); //////////////////////
  japName.textContent = "Dungeon Meshi";        // name in japanese //
  japName.setAttribute("id", "japName");       //////////////////////

  const engName = document.createElement("div"); /////////////////////
  engName.textContent = "Delicious in Dungeon"; // name in english //
  engName.setAttribute("id", "engName");        /////////////////////

  name.append(japName, engName);

  const about = document.createElement("div");
  about.setAttribute("id", "about");
  about.textContent = "Moving restaurant for the dungeon dwellers!!";

  const staffImg = new Image();
  staffImg.src = dndCharacters;
  staffImg.classList.add("staffImg");
  main.append(name, staffImg, about);

  const description = document.createElement("div");
  description.textContent =
    "With Senshi's culinary expertuse, and we struggling through the dungeon learning about gourmet dining, come pay us and eat with us!";
  about.appendChild(description);
  description.setAttribute("id", "description");

  return main;
}

function loadHome() {
  const wrapper = document.getElementById("wrapper");
  wrapper.append(createHeader(), createHomeMain());
  return wrapper
}

export default loadHome;
