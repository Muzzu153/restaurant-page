import "../css/contactUs.css"
import createHeader from "../modules/header";
import locationIcon from "../images/location.png"
import clockIcon from "../images/clock.png"
import emailIcon from "../images/email.png"
import phoneIcon from "../images/phone.png"
import senshiImg from "../images/senshi.jpg";
import laiosImg from "../images/laios.jpg";
import marcilleImg from "../images/marcille.jpg";
import chilchuckImg from "../images/chilchuck.jpg";

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
  ];

  const getStaff = () => {
    return staffArray;
  };

  const createStaffList = (arr, div) => {
    for (let el of arr) {
      const staffInfo = document.createElement("div");
      const staffName = document.createElement("div");
      const staffImg = new Image();

      staffInfo.classList.add("staff-info")
      staffName.classList.add("staff-name");

      staffName.textContent = el.name;
      staffImg.src = el.src
      staffInfo.append(staffImg, staffName );

      div.appendChild(staffInfo);
    }
    return div;
  };

  return { getStaff, createStaffList };
};

const createContactUS = () => {
  const { getStaff, createStaffList } = Staff();
  const staffList = getStaff();

  const contactUsDiv = document.createElement("div");
  contactUsDiv.setAttribute("id", "contact-us");

  const location = document.createElement("div");
  location.textContent = "The ever changing Dungeon"

  const timings = document.createElement("div");
  timings.textContent = "Open 24x7"

  const contactNumber = document.createElement("div");
  contactNumber.textContent= "(222)-888 5555"

  const emailUs = document.createElement("div");
  emailUs.textContent = "Message Us";

  // contactUsDiv.append()
  const staffMembers = document.createElement("div");
  staffMembers.setAttribute("id", "staff-members")
  
  createStaffList(staffList, staffMembers);
  
  contactUsDiv.append(location, timings, contactNumber, emailUs, staffMembers)
  return contactUsDiv
};

const loadContactUS = () => {
  // createStaffList(staffList, contactUsDiv);
  const wrapper = document.getElementById("wrapper");

  wrapper.append(createHeader(), createContactUS());

  return wrapper
};

export default loadContactUS;
