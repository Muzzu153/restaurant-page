import "../css/menu.css";
import createHeader from "../modules/header";
import hotpotImg from "../images/hot_pot_img.png";
import roastBasilisk from "../images/Roast_Basilisk_anime.png";
import kakiage from "../images/kakiage.png";
import plantTart from "../images/Fruit_Pie_anime.png";
import armorFry from "../images/Living_Armor_Stir_Fry_anime.png";
import armorSoup from "../images/Living_Armor_Soup.png";
import armorGrilled from "../images/Living_Armor_Grilled_anime.png";
import armorSteamed from "../images/Steamed_Living_Armor.png";

const Dishes = () => {
  const dishArray = [
    {
      name: "SCORPION & MUSHROOM HOTPOT",
      src: hotpotImg,
      price: "5000¥",
    },
    {
      name: "ROAST BASILISK",
      src: roastBasilisk,
      price: "4500¥",
    },
    {
      name: "MANDRAKE KAKIAGE & BAT TEMPURA",
      src: kakiage,
      price: "6000¥",
    },
    {
      name: "MAN-EATING PLANT TART",
      src: plantTart,
      price: "2850¥",
    },
    {
      name: "LIVING ARMOR STIR-FRY",
      src: armorFry,
      price: "7200¥",
    },
    {
      name: "LIVIN ARMOR SOUP",
      src: armorSoup,
      price: "6750¥",
    },
    {
      name: "GRILLED LIVING ARMOR",
      src: armorGrilled,
      price: "7500¥",
    },
    {
      name: "STEAMED LIVING ARMOR",
      src: armorSteamed,
      price: "7800¥",
    },
  ];

  const getDishes = () => {
    return dishArray;
  };
  

  const addDishes = (dishName, dishSrc) => {
    return dishArray.push({ dishName, dishSrc });
  };

  // const clearMenuDiv = () => {
  //   while (menuDiv.hasChildNodes()) {
  //     menuDiv.removeChild(menuDiv.firstChild);
  //   }
  // };

  const makeSingleDishDiv = (arr, div) => {
    // clearMenuDiv();

    for(let el of arr){
      const singleDish = document.createElement("div");
      const dishImage = document.createElement("img");
      const dishInfo = document.createElement("div");
      const dishName = document.createElement("div");
      const dishPrice = document.createElement("div");

      dishImage.src = el.src;
      dishName.textContent = el.name;
      dishPrice.textContent = el.price;

      const wholeDish = document.createElement("div");
      wholeDish.classList.add("whole-dish");

      dishImage.classList.add("dish-image");
      dishInfo.classList.add("dish-info");
      dishPrice.classList.add("dish-price");
      const orderBtn = document.createElement("button")
      orderBtn.classList.add("order-btn");
      orderBtn.textContent = "ORDER NOW"

      singleDish.classList.add("single-dish");
      dishInfo.append(dishName, dishPrice);
      wholeDish.append(dishImage, dishInfo);
      singleDish.append(wholeDish,orderBtn)

      div.append(singleDish);
    };

    return div;
  };

  return { getDishes, addDishes, makeSingleDishDiv };
};

const createMenuMain = () => {

  const { getDishes, makeSingleDishDiv } = Dishes();
  const dishList =  getDishes();

  const menuDiv = document.createElement("main");
  menuDiv.setAttribute("id", "menu-div");

  makeSingleDishDiv(dishList, menuDiv);

  return menuDiv;
};

const loadMenu = () => {
  const wrapper = document.getElementById("wrapper");
  wrapper.append(createMenuMain());
  return wrapper;
};

export default loadMenu;
