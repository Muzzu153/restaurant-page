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

// const createForm = () =>{
//     const form = document.createElement("form");

//     const formControls = document.createElement("div");

//     const fullNameDIv = document.createElement("div");
//     const fullNameLabel = document.createElement("label");
//     const customerFullName = document.createElement("input")
//     customerFullName.setAttribute("type", "input")

//     const emailDiv = document.createElement("div");
//     const emailLabel = document.createElement("label");
//     const customerEmail = document.createElement("input")
//     customerEmail.setAttribute("type", "email");
// }

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

      // staffInfo.setAttribute("id", `${el.name.}`)

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
  // const staffList = getStaff();

  const infoArray = [
    { name: "The ever changing dungeon", icon: locationIcon },
    { name: "Open 24x7", icon: timeIcon },
    { name: "(222)-888 5555", icon: phoneIcon },
    { name: "Message us", icon: emailIcon },
  ];

  const contactUsDiv = document.createElement("main");
  contactUsDiv.setAttribute("id", "contact-us");

  // const locationDiv = document.createElement("div");
  // locationDiv.setAttribute("id", "location-div");
  // locationDiv.classList.add("info-div");
  // const location = document.createElement("div");
  // location.textContent = "The ever changing Dungeon";
  // const locationIcon = new Image();
  // locationIcon.src = locationImg;
  // locationDiv.append(locationIcon, location);

  // const timingDiv = document.createElement("div");
  // timingDiv.setAttribute("id", "timing-div");
  // timingDiv.classList.add("info-div");
  // const timingIcon = new Image();
  // timingIcon.src = clockImg;
  // const timings = document.createElement("div");
  // timings.textContent = "Open 24x7";
  // timingDiv.append(timingIcon, timings);

  // const contactNbrDiv = document.createElement("div");
  // contactNbrDiv.setAttribute("id", "contact-nbr-div");
  // contactNbrDiv.classList.add("info-div");
  // const contactNbrIcon = new Image();
  // contactNbrIcon.src = phoneImg;
  // const contactNumber = document.createElement("div");
  // contactNumber.textContent = "(222)-888 5555";
  // contactNbrDiv.append(contactNbrIcon, contactNumber);

  // const emailUsDiv = document.createElement("div");
  // emailUsDiv.setAttribute("id", "email-us-div");
  // emailUsDiv.classList.add("info-div");
  // const emailUsIcon = new Image();
  // emailUsIcon.src = emailImg;
  // const emailUs = document.createElement("div");
  // emailUs.textContent = "Message Us";
  // emailUsDiv.append(emailUsIcon, emailUs);

  const createInfoDiv = (div) => {
    for (let el of infoArray) {
      const infoDiv = document.createElement("div");
      const infoContent = document.createElement("div");
      const infoIcon = new Image();
      // const eachElementDiv = document.createElement("div")

      infoIcon.src = el.icon;
      infoContent.textContent = el.name;

      infoDiv.classList.add("info-div");
      infoDiv.append(infoIcon, infoContent);
      div.append(infoDiv);
    }
    return div;
  };

  // contactUsDiv.append()
  const staffMembers = document.createElement("div");
  staffMembers.setAttribute("id", "staff-members");

  createInfoDiv(contactUsDiv);

  createStaffList(staffMembers);

  contactUsDiv.append(
    // locationDiv,
    // timingDiv,
    // contactNbrDiv,
    // emailUsDiv,
    staffMembers
  );
  return contactUsDiv;
};

const loadContactUS = () => {
  // createStaffList(staffList, contactUsDiv);
  const wrapper = document.getElementById("wrapper");

  wrapper.append(createHeader(), createContactUS());

  return wrapper;
};

export default loadContactUS;
