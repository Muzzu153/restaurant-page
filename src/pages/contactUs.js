import "../css/contactUs.css";
import createHeader from "../modules/header";
import locationIcon from "../images/location.png";
import timeIcon from "../images/clock.png";
import emailIcon from "../images/email.png";
import phoneIcon from "../images/phone.png";
import senshiImg from "../images/senshi.jpg";
import laiosImg from "../images/laios.jpg";
import marcilleImg from "../images/marcille.jpg";
import chilchuckImg from "../images/chilchuck.jpg";
import izutsumiImg from "../images/izutsumi.png";

const Staff = () => {
  const staffArray = [
    {
      name: "Senshi",
      src: senshiImg,
    },
    {
      name: "Laios",
      src: laiosImg,
    },
    {
      name: "Marcille",
      src: marcilleImg,
    },
    {
      name: "Chilchuck",
      src: chilchuckImg,
    },
    {
      name: "Izutsumi",
      src: izutsumiImg,
    },
  ];

  const getStaff = () => {
    return staffArray;
  };

  const createStaffList = (div) => {
    for (let el of staffArray) {
      const staffInfo = document.createElement("div");
      const staffName = document.createElement("div");
      const staffImg = new Image();

      staffInfo.classList.add("staff-info");
      staffName.classList.add("staff-name");

      staffName.textContent = el.name;
      staffImg.src = el.src;
      staffInfo.append(staffImg, staffName);

      div.appendChild(staffInfo);
    }
    return div;
  };

  return { getStaff, createStaffList };
};

const createContactUS = () => {
  const { createStaffList } = Staff();

  const infoArray = [
    { name: "The ever changing dungeon", icon: locationIcon },
    { name: "Open 24x7", icon: timeIcon },
    { name: "(222)-888 5555", icon: phoneIcon },
    { name: "Message us", icon: emailIcon },
  ];

  const contactUsDiv = document.createElement("main");
  contactUsDiv.setAttribute("id", "contact-us");

  const staffTitle = document.createElement("div");
  staffTitle.textContent = "Our staff members";

  const createInfoDiv = (div) => {
    for (let el of infoArray) {
      const infoDiv = document.createElement("div");
      const infoContent = document.createElement("div");
      const infoIcon = new Image();

      infoIcon.src = el.icon;
      infoContent.textContent = el.name;

      infoDiv.classList.add("info-div");
      infoDiv.append(infoIcon, infoContent);
      div.append(infoDiv);
    }
    return div;
  };

  const staffMembers = document.createElement("div");
  staffMembers.setAttribute("id", "staff-members");

  createInfoDiv(contactUsDiv);

  createStaffList(staffMembers);

  contactUsDiv.append(staffTitle, staffMembers);
  return contactUsDiv;
};

const loadContactUS = () => {
  const wrapper = document.getElementById("wrapper");

  wrapper.append(createContactUS());

  return wrapper;
};

export default loadContactUS;
