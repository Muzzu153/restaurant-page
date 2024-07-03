// import { createHomeMain } from "./pages/home";
import loadHome from "./pages/home";
import loadMenu from "./pages/menu";
import loadContactUS from "./pages/contactUs";
import firstLoad from "./modules/firstLoad";
import renderPage from "./modules/render";

firstLoad();

const getHeaderButttons = () => {
  const homeButton = document.querySelector("#home-btn");
  const menuButton = document.querySelector("#menu-btn");
  const contactUsButtton = document.querySelector("#contactUs-btn");

  return { homeButton, menuButton, contactUsButtton };
};

const { homeButton, menuButton, contactUsButtton } = getHeaderButttons();

homeButton.addEventListener("click", function () {
  console.log("home loaded");
  renderPage();
  loadHome();
});

menuButton.addEventListener("click", function () {
  console.log("menu loaded");
  renderPage();
  loadMenu();
});

contactUsButtton.addEventListener("click", function(){
  console.log("contactUs loaded")
  renderPage();
  loadContactUS();
})