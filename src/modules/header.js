import "../css/header.css"

function createHeader() {
  
    const headerDiv = document.createElement("header"); // header direct child to warpper containign name and navBar
    headerDiv.setAttribute("id", "header");
  
    const navBar = document.createElement("div"); //navBar containing navigation of home, menu and contactUs
    navBar.classList.add("navbar");
  
    headerDiv.append(navBar);
  
    const homeButton = document.createElement("button");
    const menuButton = document.createElement("button");
    const contactUsButtton = document.createElement("button");

    homeButton.setAttribute("id", "home-btn")
    menuButton.setAttribute("id","menu-btn")
    contactUsButtton.setAttribute("id","contactUs-btn")
  
    homeButton.textContent = "Home";
    menuButton.textContent = "Menu";
    contactUsButtton.textContent = "Contact Us";
  
    navBar.append(homeButton, menuButton, contactUsButtton);
  
    return headerDiv;
  }

  export default createHeader;

