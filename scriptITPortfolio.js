// IMPORT: object include user indo data
import userInfo from "./userInfo.js";

// ELEMENT: main container
const mainContainer = document.getElementById("mainContainer");
const headerContainer = document.getElementById("headerContainer");

// ELEMENT: nav links
const navItems = document.querySelectorAll("nav li");

// OBJECT HEADINGS AND PARAGRAPH
const headerInfo = {
  home: {
    heading: `${userInfo.firstName} ${userInfo.lastName}`.toUpperCase(),
    paragraph: "WEB-DESIGNER",
  },
  projects: {
    heading: "MY PROJECTS",
    paragraph: "MADE WITH LOVE",
  },
  about: {
    heading: "ABOUT ME",
    paragraph: `IT'S A ME, ${userInfo.firstName}`.toUpperCase(),
  },
  contact: {
    heading: "CONTACT ME",
    paragraph: "SAY HELLO TO ME",
  },
  messages: {
    heading: "MESSAGES",
    paragraph: "MESSAGES FROM THE\n INTERESTED PERSON",
  },
};

// LOGIC: synchronize footer and header links
navItems.forEach((clickedItem) => {
  clickedItem.addEventListener("click", () => {
    navItems.forEach((item) => {
      item.classList.remove("activeListElement");
    });
    const targetName = clickedItem.dataset.target;
    const matchedItems = document.querySelectorAll(
      `li[data-target=${targetName}]`
    );
    renderSection(targetName);
    renderInfoHeader(
      headerInfo[targetName].heading,
      headerInfo[targetName].paragraph
    );
    matchedItems.forEach((item) => {
      item.classList.add("activeListElement");
    });
  });
});

// FUNCTION: dynnamically render basic structure info header
function renderInfoHeader(heading, paragraph) {
  const headerInfoContainer = document.createElement("div");
  headerContainer.innerHTML = "";
  headerInfoContainer.classList.add("heroTextContainer");
  const headingInfo = document.createElement("h2");
  headingInfo.innerText = heading;
  const paragraphInfo = document.createElement("p");
  paragraphInfo.innerText = paragraph;
  headerInfoContainer.appendChild(headingInfo);
  headerInfoContainer.appendChild(paragraphInfo);
  headerContainer.appendChild(headerInfoContainer);
}

// ABOUT ME

// FUNCTION: allow to create with description in section about me
function createArticle(heading, description, container) {
  const articleContainer = document.createElement("div");
  articleContainer.classList.add("articleContainer");
  const article = document.createElement("article");
  const headingArticle = document.createElement("h3");
  headingArticle.textContent = heading;
  const descriptionArticle = document.createElement("p");
  descriptionArticle.textContent = description;
  descriptionArticle.classList.add(
    "marginBetweenHeadingAndParagraph",
    "preLine"
  );
  articleContainer.appendChild(headingArticle);
  articleContainer.appendChild(descriptionArticle);
  container.appendChild(articleContainer);
}

// MESSAGES, CONTACT

// FUNCTION: allow to create new message in section message
function createMessage(name, email, message, container) {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  const messageContainer = document.createElement("div");

  const nameElement = document.createElement("p");
  nameElement.textContent = `Name: ${nameValue}`;
  nameElement.classList.add("primaryStyleText");
  messageContainer.appendChild(nameElement);

  const emailElement = document.createElement("p");
  emailElement.textContent = `Email: ${emailValue}`;
  emailElement.classList.add("primaryStyleText");
  messageContainer.appendChild(emailElement);

  const messageElement = document.createElement("p");
  messageElement.textContent = `Message: ${messageValue}`;
  messageElement.classList.add("primaryStyleText");
  messageContainer.appendChild(messageElement);

  container.appendChild(messageContainer);
}

// FUNCTION: dynamically render section in the main container
function renderSection(target) {
  // ABOUT ME
  if (target === "about") {
    mainContainer.innerHTML = "";
    const mainAboutMecontainer = document.createElement("div");
    mainAboutMecontainer.classList.add(
      "flexStyleColumn",
      "alignItemsFlexCenter",
      "paddinSectionAboutMe",
      "gapBetweenElements"
    );
    const imageMaleContainer = document.createElement("div");
    imageMaleContainer.classList.add("imageMaleContainer");
    mainAboutMecontainer.appendChild(imageMaleContainer);
    createArticle(
      "My background",
      userInfo.info.myBackground,
      mainAboutMecontainer
    );
    createArticle(
      "My hobbies and interests",
      userInfo.info.hobbies,
      mainAboutMecontainer
    );
    const buttoncontainer = document.createElement("div");
    buttoncontainer.classList.add(
      "displayFlexJustifyCenter",
      "buttonContactMeMargin"
    );
    const button = document.createElement("button");
    button.classList.add("flexStyleCenter", "gapInsideButton");
    button.textContent = "Contact me";
    button.addEventListener("click", () => {
      renderSection("contact");
      renderInfoHeader(
        headerInfo.contact.heading,
        headerInfo.contact.paragraph
      );
    });
    const imageButton = document.createElement("img");
    imageButton.classList.add("iconArrowButton");
    imageButton.src = "./images/Arrow right.svg";
    imageButton.alt = "icon arrow sign";
    button.appendChild(imageButton);
    buttoncontainer.appendChild(button);
    mainAboutMecontainer.appendChild(buttoncontainer);
    mainContainer.appendChild(mainAboutMecontainer);
  }
  // MESSAGES
  else if (target === "messages") {
    mainContainer.innerHTML = "";
    const mainMessageContainer = document.createElement("div");
    mainMessageContainer.id = "mainMessageContainer";

    mainMessageContainer.classList.add(
      "paddingSectionMessages",
      "flexStyleColumn",
      "gapBetweenMessages"
    );
    userInfo.messages.forEach((message) => {
      createMessage(
        { value: message.name },
        { value: message.email },
        { value: message.message },
        mainMessageContainer
      );
    });
    mainContainer.appendChild(mainMessageContainer);
  } else {
    mainContainer.innerHTML = "";
    const mainDiv = document.createElement("div");
    const mainText = document.createElement("h3");
    mainText.textContent = target;
    mainDiv.appendChild(mainText);
    mainContainer.appendChild(mainDiv);
  }
}

// LOGIC: set first start subpage
renderSection("home");
renderInfoHeader(headerInfo.home.heading, headerInfo.home.paragraph);

// // ELEMENTS: mobile menu
// const normalMenuMobile = document.getElementById("normalMenuMobile");
// const goldMenuMobile = document.getElementById("goldMenuMobile");
// const menuListMobile = document.getElementById("menuListMobile");

// // ELEMENTS: show section
// const activeNavListElement = document.querySelectorAll("nav li");
// const logoHeader = document.querySelectorAll("[data-section-header]");
// const mainSections = document.querySelectorAll("[data-section]");
// const nameUser = document.getElementById("nameUser");
// const fullName = document.getElementById("fullName");
// const introduce = document.getElementById("introduce");
// const myBackground = document.getElementById("myBackground");
// const hobbies = document.getElementById("hobbies");

// // ELEMENTS: footer
// const email = document.getElementById("email");
// const tel = document.getElementById("tel");

// // ELEMENTS: contact button
// const contactButton = document.getElementById("contactButton");

// // ELEMENTS: add project button and modalform
// const buttonAddProject = document.getElementById("buttonAddProject");
// const buttonAddProjectModal = document.getElementById("buttonAddProjectModal");

// const modalForm = document.getElementById("modalForm");
// const closeModal = document.getElementById("closeModal");

// const inputProjectName = document.getElementById("inputProjectName");
// const inputTechnology = document.getElementById("inputTechnology");
// const errorMinProjectName = document.getElementById("errorMinProjectName");
// const errorMaxProjectName = document.getElementById("errorMaxProjectName");
// const errorNoneTech = document.getElementById("errorNoneTech");

// const inputsModal = document.querySelectorAll('[data-input="modal"]');
// const inputsContact = document.querySelectorAll('[data-input="contact"]');

// // ELEMENTS: icon trash button and delete project
// const mainProjectConteiner = document.getElementById("mainProjectConteiner");
// const projectContainer = document.querySelectorAll(".imageProjectContainer");
// const buttonDeleteProject = document.querySelectorAll(".imageDeleteContainer");
// const noProjectMessage = document.getElementById("noProjectsMessageContainer");

// // ELEMENTS: form contact me
// const inputNameMobile = document.getElementById("inputNameMobile");
// const errorMinNameMobile = document.getElementById("errorMinNameMobile");
// const errorMaxNameMobile = document.getElementById("errorMaxNameMobile");
// const inputEmailMobile = document.getElementById("inputEmailMobile");
// const errorEmailMobile = document.getElementById("errorEmailMobile");
// const inputMessageMobile = document.getElementById("inputMessageMobile");
// const errorMinMessageMobile = document.getElementById("errorMinMessageMobile");
// const errorMaxMessageMobile = document.getElementById("errorMaxMessageMobile");

// const inputName = document.getElementById("inputName");
// const errorMinName = document.getElementById("errorMinName");
// const errorMaxName = document.getElementById("errorMaxName");
// const inputEmail = document.getElementById("inputEmail");
// const errorEmail = document.getElementById("errorEmail");
// const inputMessage = document.getElementById("inputMessage");
// const errorMinMessage = document.getElementById("errorMinMessage");
// const errorMaxMessage = document.getElementById("errorMaxMessage");

// const buttonsSendMessage = document.querySelectorAll(
//   '[data-button="sendMessage"]'
// );
// const mainMessageContainer = document.getElementById("mainMessageContainer");

// // ELEMENTS: create tech skills from javascript data
// const mainSkillContainer = document.getElementById("mainSkillContainer");

// // ELEMENTS: navigation button carausel
// const carouselTrack = document.getElementById("carouselTrack");
// const imageProjectCarouselList = document.querySelectorAll(
//   ".imageProjectCarousel"
// );
// const iconLeftButton = document.getElementById("iconLeftButton");
// const iconRightButton = document.getElementById("iconRightButton");
// const iconDownButton = document.getElementById("iconDownButton");
// const iconUpButton = document.getElementById("iconUpButton");

// let carouselIndexVertical = 3;
// let carouselIndexHorizontal = 3;
// const heightOneCard = 460;
// const gapBetweenCards = 41;
// const totalCardHeight = heightOneCard + gapBetweenCards;
// function getCardTotalWidthtWithGap() {
//   const card = document.querySelector(".imageProjectCarousel");
//   if (card) {
//     const cardWidth = card.offsetWidth;
//     return cardWidth + gapBetweenCards;
//   }
//   return 0;
// }

// // DYNAMIC RENDER: first name last name, info , email, and tel
// nameUser.textContent = (userInfo.firstName).toUpperCase();
// fullName.textContent = `${userInfo.firstName} ${userInfo.lastName}`.toUpperCase();
// introduce.textContent = userInfo.info.introduce;
// myBackground.textContent = userInfo.info.myBackground;
// hobbies.textContent = userInfo.info.hobbies;
email.textContent = userInfo.email;
tel.textContent = `+ ${userInfo.tel}`;

// // LOGIC: mobile menu

// // FUNCTION: show and hide hamburger menu
// function showHideMobileMenu() {
//   menuListMobile.classList.toggle("activeElement");
//   normalMenuMobile.classList.toggle("activeElement");
//   goldMenuMobile.classList.toggle("activeElement");
// }

// // EVENT LISTENERS: controller steer gold and normal hamburger menu
// normalMenuMobile.addEventListener("click", showHideMobileMenu);
// goldMenuMobile.addEventListener("click", showHideMobileMenu);

// // LOGIC: show section

// // EVENT LISTENERS: move between section and sync  nav, headers, and content
// activeNavListElement.forEach((element) => {
//   element.addEventListener("click", () => {
//     activeNavListElement.forEach((navList) =>
//       navList.classList.remove("activeListElement")
//     );
//     const targetList = element.dataset.target;
//     const similarNavList = document.querySelectorAll(
//       `[data-target="${targetList}"]`
//     );
//     similarNavList.forEach((navList) =>
//       navList.classList.add("activeListElement")
//     );

//     logoHeader.forEach((logo) => {
//       logo.classList.add("hiddenElement");
//       if (logo.dataset.sectionHeader === targetList) {
//         logo.classList.remove("hiddenElement");
//       }
//     });

//     mainSections.forEach((section) => {
//       section.classList.add("hiddenElement");
//       if (section.dataset.section === targetList) {
//         section.classList.remove("hiddenElement");
//       }
//       updateCarouselPosition();
//     });
//   });
// });

// // LOGIC: contact button

// // EVENT LISTENERS:  move to Contact section
// contactButton.addEventListener("click", () => {
//   activeNavListElement.forEach((navList) =>
//     navList.classList.remove("activeListElement")
//   );
//   const contactNavList = document.querySelectorAll('[data-target="contact"]');
//   contactNavList.forEach((contactList) =>
//     contactList.classList.add("activeListElement")
//   );

//   logoHeader.forEach((logo) => logo.classList.add("hiddenElement"));
//   const logoMessages = document.querySelector(
//     '[data-section-header="contact"]'
//   );
//   logoMessages.classList.remove("hiddenElement");

//   mainSections.forEach((section) => section.classList.add("hiddenElement"));
//   const sectionContact = document.querySelectorAll('[data-section="contact"]');
//   sectionContact.forEach((secContact) =>
//     secContact.classList.remove("hiddenElement")
//   );
// });

// // LOGIC: add project button and modalform

// // EVENT LISTENERS: open modal form
// buttonAddProject.addEventListener("click", () => {
//   modalForm.classList.remove("hiddenElement");
//   document.body.classList.add("noScroll");
// });

// // FUNCTION: allow close modal form and unlock scroll
// function closeModalView() {
//   modalForm.classList.add("hiddenElement");
//   document.body.classList.remove("noScroll");
//   inputProjectName.value = "";
//   inputTechnology.value = "";
//   inputProjectName.classList.remove("errorInputLine");
//   inputProjectName.classList.add("validInputLine");
//   inputTechnology.classList.remove("errorInputLine");
//   inputTechnology.classList.add("validInputLine");
//   errorMinProjectName.classList.add("hiddenElement");
//   errorMaxProjectName.classList.add("hiddenElement");
//   errorNoneTech.classList.add("hiddenElement");
//   stopValidationInputProjectName();
//   stopValidationinputTechnology();
// }

// // EVENT LISTENERS: allow close modal form only with icon X
// closeModal.addEventListener("click", closeModalView);

// // FUNCTION: check value input length
// function validateNameInput(inputText, errorMin, errorMax, min, max, dataValue) {
//   const inputValue = inputText.value.trim();
//   const inputTooShort = inputValue.length < min;
//   const inputTooLong = inputValue.length > max;

//   inputText.classList.toggle("validInputLine", !inputTooShort && !inputTooLong);
//   inputText.classList.toggle("errorInputLine", inputTooShort || inputTooLong);
//   errorMin.classList.toggle("hiddenElement", !inputTooShort);
//   errorMax.classList.toggle("hiddenElement", !inputTooLong);
//   inputText.dataset[dataValue] =
//     !inputTooShort && !inputTooLong ? "valid" : "error";
// }

// // FUNCTION: check value must not be empty
// function validateTechInput(inputText, errorMessage, dataValue) {
//   const valueInput = inputText.value.trim();
//   const isValidInput = valueInput.length > 0;

//   inputText.classList.toggle("validInputLine", isValidInput);
//   inputText.classList.toggle("errorInputLine", !isValidInput);
//   errorMessage.classList.toggle("hiddenElement", isValidInput);
//   inputText.dataset[dataValue] = isValidInput ? "valid" : "error";
// }

// // FUNCTION: handle real-time validation of project title input
// function handlerInputProjectName() {
//   validateNameInput(
//     inputProjectName,
//     errorMinProjectName,
//     errorMaxProjectName,
//     3,
//     30,
//     "inputProject"
//   );
// }

// // FUNCTION: start listening for project title input changes after pressing "Add Project"
// function startValidationInputProjectName() {
//   inputProjectName.addEventListener("input", handlerInputProjectName);
// }

// // FUNCTION: stop listening for project title input changes after closing the modal
// function stopValidationInputProjectName() {
//   inputProjectName.removeEventListener("input", handlerInputProjectName);
// }

// // FUNCTION: handle real-time validation value in Technologies input must not be empty
// function handlerinputTechnology() {
//   validateTechInput(inputTechnology, errorNoneTech, "inputTech");
// }

// // FUNCTION: start listening for project technology input changes after pressing "Add Project"
// function startValidationinputTechnology() {
//   inputTechnology.addEventListener("input", handlerinputTechnology);
// }

// // FUNCTION: stop listening for project technology input changes after closing the modal
// function stopValidationinputTechnology() {
//   inputTechnology.removeEventListener("input", handlerinputTechnology);
// }

// // FUNCTION: check all modal form inputs
// function checkValidFormModal(inpuText1, dataValue1, inputText2, dataValue2) {
//   const isValidInput1 = inpuText1.dataset[dataValue1];
//   const isValidInput2 = inputText2.dataset[dataValue2];
//   return isValidInput1 === "valid" && isValidInput2 === "valid";
// }

// // FUNCTION: reset all inputs
// function resetForm(inputText) {
//   inputText.forEach((text) => (text.value = ""));
// }

// // FUNCTION: add new project card in projects section
// function addNewProject(project, technology, uniqeDataset) {
//   const projectValue = project.value.trim();
//   const technologyValue = technology.value
//     .trim()
//     .split(",")
//     .map((tech) => tech.trim())
//     .filter((tech) => tech !== "");

//   const newProject = document.createElement("div");
//   newProject.dataset.uniqe = uniqeDataset;
//   newProject.classList.add("imageProjectContainer");
//   const nameProject = document.createElement("h4");
//   nameProject.textContent = `${projectValue}`;
//   newProject.appendChild(nameProject);

//   const listTech = document.createElement("ul");
//   listTech.classList.add("technologyUse");
//   technologyValue.forEach((tech) => {
//     const newTech = document.createElement("li");
//     newTech.textContent = `${tech}`;
//     listTech.appendChild(newTech);
//   });
//   newProject.appendChild(listTech);

//   const buttonDelete = document.createElement("button");
//   buttonDelete.classList.add("imageDeleteContainer");
//   newProject.appendChild(buttonDelete);
//   buttonDelete.addEventListener("click", () => {
//     deleteProject(buttonDelete, "imageProjectContainer");
//   });

//   mainProjectConteiner.appendChild(newProject);
//   checkAmountProjectCard();
// }

// // FUNCTION: add new project card in carousel
// function addNewProjectCarousel(project, technology, uniqeDataset) {
//   const projectCarouselValue = project.value.trim();
//   const technologyCarouselValue = technology.value
//     .trim()
//     .split(",")
//     .map((tech) => tech.trim())
//     .filter((tech) => tech !== "");

//   const newCarouselProject = document.createElement("div");
//   newCarouselProject.dataset.uniqe = uniqeDataset;
//   newCarouselProject.classList.add("imageProjectCarousel");
//   const nameCarouselProject = document.createElement("h4");
//   nameCarouselProject.textContent = `${projectCarouselValue}`;
//   newCarouselProject.appendChild(nameCarouselProject);

//   const listTech = document.createElement("ul");
//   listTech.classList.add("technologyUse");
//   technologyCarouselValue.forEach((tech) => {
//     const newTech = document.createElement("li");
//     newTech.textContent = `${tech}`;
//     listTech.appendChild(newTech);
//   });
//   newCarouselProject.appendChild(listTech);

//   carouselTrack.appendChild(newCarouselProject);
//   refreshCarouselClones();
//   resetCarouselPosition();
// }

// // FUNCTION: create project card and carousel card with same data
// function createProjectAndCarouselCard(project, technology) {
//   const uniqeDataset = crypto.randomUUID();

//   addNewProject(project, technology, uniqeDataset);
//   addNewProjectCarousel(project, technology, uniqeDataset);
// }

// // EVENT LISTENERS: allow to create new project card and carousel card
// buttonAddProjectModal.addEventListener("click", () => {
//   startValidationInputProjectName();
//   startValidationinputTechnology();
//   validateNameInput(
//     inputProjectName,
//     errorMinProjectName,
//     errorMaxProjectName,
//     3,
//     30,
//     "inputProject"
//   );
//   validateTechInput(inputTechnology, errorNoneTech, "inputTech");
//   const isValidateInput = checkValidFormModal(
//     inputProjectName,
//     "inputProject",
//     inputTechnology,
//     "inputTech"
//   );
//   if (isValidateInput) {
//     createProjectAndCarouselCard(inputProjectName, inputTechnology);
//     resetForm(inputsModal);
//     closeModalView();
//   }
// });

// // LOGIC: icon trash button and delete project

// // FUNCTION: delete project cards from both the project section and the carousel
// function deleteProject(buttonDelete, classValue) {
//   const singleProject = buttonDelete.closest(`.${classValue}`);
//   const uniqeDataset = singleProject.dataset.uniqe;
//   const allUniqeCard = document.querySelectorAll(
//     `[data-uniqe="${uniqeDataset}"]`
//   );
//   if (singleProject) {
//     allUniqeCard.forEach((card) => card.remove());
//     refreshCarouselClones();
//     resetCarouselPosition();
//   }
//   checkAmountProjectCard();
// }

// // EVENT LISTENERS: manual delete both project card and carusel card
// buttonDeleteProject.forEach((buttonDelete) =>
//   buttonDelete.addEventListener("click", () => {
//     const singleProject = buttonDelete.closest(".imageProjectContainer");
//     const uniqeDataset = singleProject.dataset.uniqe;
//     const allUniqeCard = document.querySelectorAll(
//       `[data-uniqe="${uniqeDataset}"]`
//     );
//     if (singleProject) {
//       allUniqeCard.forEach((card) => card.remove());
//       refreshCarouselClones();
//       resetCarouselPosition();
//     }
//   })
// );

// // LOGIC: form contact me

// // FUNCTION: check email input value use regex
// function validateInputEmail(email, errorMessage, dataValue) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const isValidInput = emailRegex.test(email.value.trim());

//   email.classList.toggle("validInputLine", isValidInput);
//   email.classList.toggle("errorInputLine", !isValidInput);
//   errorMessage.classList.toggle("hiddenElement", isValidInput);
//   email.dataset[dataValue] = isValidInput ? "valid" : "error";
// }

// // FUNCTION:  synchronize the value between two input fields
// function sameValueInput(inpuText1, inpuText2) {
//   inpuText1.value = inpuText2.value;
// }

// // LOGIC: synchronize and check contact form name, email, and message

// // EVENT LISTENERS: set name value in input mobile
// inputNameMobile.addEventListener("input", () => {
//   sameValueInput(inputName, inputNameMobile);
// });

// // EVENT LISTENERS: set name value in input desktop
// inputName.addEventListener("input", () => {
//   sameValueInput(inputNameMobile, inputName);
// });

// // EVENT LISTENERS: set email value in input mobile
// inputEmailMobile.addEventListener("input", () => {
//   sameValueInput(inputEmail, inputEmailMobile);
// });

// // EVENT LISTENERS: set email value in input desktop
// inputEmail.addEventListener("input", () => {
//   sameValueInput(inputEmailMobile, inputEmail);
// });

// // EVENT LISTENERS: set message value in input mobile
// inputMessageMobile.addEventListener("input", () => {
//   sameValueInput(inputMessage, inputMessageMobile);
// });

// // EVENT LISTENERS: set message value in input desktop
// inputMessage.addEventListener("input", () => {
//   sameValueInput(inputMessageMobile, inputMessage);
// });

// // FUNCTION: handle real-time validation of input name mobile
// function handlerInputNameMobile() {
//   validateNameInput(
//     inputNameMobile,
//     errorMinNameMobile,
//     errorMaxNameMobile,
//     3,
//     20,
//     "inputNameMobile"
//   );
//   validateNameInput(inputName, errorMinName, errorMaxName, 3, 20, "inputName");
// }

// // FUNCTION: start listening for input name mobile changes after pressing "Send message"
// function startValidationInputNameMobile() {
//   inputNameMobile.addEventListener("input", handlerInputNameMobile);
// }

// // FUNCTION: stop listening for contact form input name mobile after navigating to another page
// function stopValidationInputNameMobile() {
//   inputNameMobile.removeEventListener("input", handlerInputNameMobile);
// }

// // FUNCTION: handle real-time validation of input name
// function handlerInputName() {
//   validateNameInput(
//     inputNameMobile,
//     errorMinNameMobile,
//     errorMaxNameMobile,
//     3,
//     20,
//     "inputNameMobile"
//   );
//   validateNameInput(inputName, errorMinName, errorMaxName, 3, 20, "inputName");
// }

// // FUNCTION: start listening for input name changes after pressing "Send message"
// function startValidationInputName() {
//   inputName.addEventListener("input", handlerInputName);
// }

// // FUNCTION: stop listening for contact form input name after navigating to another page
// function stopValidationInputName() {
//   inputName.removeEventListener("input", handlerInputName);
// }

// // FUNCTION: handle real-time validation of input email mobile
// function handlerInputEmailMobile() {
//   validateInputEmail(inputEmailMobile, errorEmailMobile, "inputEmailMobile");
//   validateInputEmail(inputEmail, errorEmail, "inputEmail");
// }

// // FUNCTION: start listening for input email mobile changes after pressing "Send message"
// function startValidationInputEmailMobile() {
//   inputEmailMobile.addEventListener("input", handlerInputEmailMobile);
// }

// // FUNCTION: stop listening for contact form input email mobile after navigating to another page
// function stopValidationInputEmailMobile() {
//   inputEmailMobile.removeEventListener("input", handlerInputEmailMobile);
// }

// // FUNCTION: handle real-time validation of input email
// function handlerInputEmail() {
//   validateInputEmail(inputEmail, errorEmail, "inputEmail");
//   validateInputEmail(inputEmailMobile, errorEmailMobile, "inputEmailMobile");
// }

// // FUNCTION: start listening for input email changes after pressing "Send message"
// function startValidationInputEmail() {
//   inputEmail.addEventListener("input", handlerInputEmail);
// }

// // FUNCTION: stop listening for contact form input email after navigating to another page
// function stopValidationInputEmail() {
//   inputEmail.removeEventListener("input", handlerInputEmail);
// }

// // FUNCTION: handle real-time validation of input message mobile
// function handlerInputMessageMobile() {
//   validateNameInput(
//     inputMessageMobile,
//     errorMinMessageMobile,
//     errorMaxMessageMobile,
//     1,
//     100,
//     "inputMessageMobile"
//   );
//   validateNameInput(
//     inputMessage,
//     errorMinMessage,
//     errorMaxMessage,
//     1,
//     100,
//     "inputMessage"
//   );
// }

// // FUNCTION: start listening for input message mobile changes after pressing "Send message"
// function startValidationInputMessageMobile() {
//   inputMessageMobile.addEventListener("input", handlerInputMessageMobile);
// }

// // FUNCTION: stop listening for contact form input message mobile after navigating to another page
// function stopValidationInputMessageMobile() {
//   inputMessageMobile.removeEventListener("input", handlerInputMessageMobile);
// }

// // FUNCTION: handle real-time validation of input message
// function handlerInputMessage() {
//   validateNameInput(
//     inputMessage,
//     errorMinMessage,
//     errorMaxMessage,
//     1,
//     100,
//     "inputMessage"
//   );
//   validateNameInput(
//     inputMessageMobile,
//     errorMinMessageMobile,
//     errorMaxMessageMobile,
//     1,
//     100,
//     "inputMessageMobile"
//   );
// }

// // FUNCTION: start listening for input message changes after pressing "Send message"
// function startValidationInputMessage() {
//   inputMessage.addEventListener("input", handlerInputMessage);
// }

// // FUNCTION: stop listening for contact form input message after navigating to another page
// function stopValidationInputMessage() {
//   inputMessage.removeEventListener("input", handlerInputMessage);
// }

// // FUNCTION: gather all function checking start validation
// function startValidationInputMobileAndDesktop() {
//   startValidationInputNameMobile();
//   startValidationInputName();
//   startValidationInputEmailMobile();
//   startValidationInputEmail();
//   startValidationInputMessageMobile();
//   startValidationInputMessage();
// }

// // FUNCTION: gather all function checking stop validation
// function stopValidationInputMobileAndDesktop() {
//   stopValidationInputNameMobile();
//   stopValidationInputName();
//   stopValidationInputEmailMobile();
//   stopValidationInputEmail();
//   stopValidationInputMessageMobile();
//   stopValidationInputMessage();
// }

// // FUNCTION: allow to check all inputs fields name, email and message
// function checkValidFormContact(
//   inpuText1,
//   dataValue1,
//   inputText2,
//   dataValue2,
//   inputText3,
//   dataValue3
// ) {
//   const isValidInput1 = inpuText1.dataset[dataValue1];
//   const isValidInput2 = inputText2.dataset[dataValue2];
//   const isValidInput3 = inputText3.dataset[dataValue3];
//   return (
//     isValidInput1 === "valid" &&
//     isValidInput2 === "valid" &&
//     isValidInput3 === "valid"
//   );
// }

// // FUNCTION: allow to check all inputs fields name, email and message in mobile and desktop
// function validateMobilieDesktopForm() {
//   validateNameInput(inputName, errorMinName, errorMaxName, 3, 20, "inputName");
//   validateInputEmail(inputEmail, errorEmail, "inputEmail");
//   validateNameInput(
//     inputMessage,
//     errorMinMessage,
//     errorMaxMessage,
//     1,
//     100,
//     "inputMessage"
//   );
//   validateNameInput(
//     inputNameMobile,
//     errorMinNameMobile,
//     errorMaxNameMobile,
//     3,
//     20,
//     "inputNameMobile"
//   );
//   validateInputEmail(inputEmailMobile, errorEmailMobile, "inputEmailMobile");
//   validateNameInput(
//     inputMessageMobile,
//     errorMinMessageMobile,
//     errorMaxMessageMobile,
//     1,
//     100,
//     "inputMessageMobile"
//   );
// }

// // FUNCTION: allow to create new message in section message
// function createMessage(name, email, message) {
//   const nameValue = name.value.trim();
//   const emailValue = email.value.trim();
//   const messageValue = message.value.trim();
//   const messageContainer = document.createElement("div");

//   const nameElement = document.createElement("p");
//   nameElement.textContent = `Name: ${nameValue}`;
//   nameElement.classList.add("primaryStyleText");
//   messageContainer.appendChild(nameElement);

//   const emailElement = document.createElement("p");
//   emailElement.textContent = `Email: ${emailValue}`;
//   emailElement.classList.add("primaryStyleText");
//   messageContainer.appendChild(emailElement);

//   const messageElement = document.createElement("p");
//   messageElement.textContent = `Message: ${messageValue}`;
//   messageElement.classList.add("primaryStyleText");
//   messageContainer.appendChild(messageElement);

//   mainMessageContainer.appendChild(messageContainer);
// }

// // FUNCTION: allow and check to create new message in section message
// function addNewMessage() {
//   validateMobilieDesktopForm();
//   const isValidateInput = checkValidFormContact(
//     inputName,
//     "inputName",
//     inputEmail,
//     "inputEmail",
//     inputMessage,
//     "inputMessage"
//   );
//   if (isValidateInput) {
//     createMessage(inputName, inputEmail, inputMessage);
//     resetForm(inputsContact);
//     stopValidationInputMobileAndDesktop();
//   }
// }

// // EVENT LISTENERS: start create and check new message
// buttonsSendMessage.forEach((buttonSend) =>
//   buttonSend.addEventListener("click", () => {
//     startValidationInputMobileAndDesktop();
//     addNewMessage();
//   })
// );

// // LOGIC: create project cards from javascript data

// // EVENT LISTENERS: automatically create project and carousel cards from array
// (userInfo.cardsProjects).forEach((card) => {
//   createProjectAndCarouselCard(
//     { value: card.project },
//     { value: card.technology }
//   );
// });

// // EVENT LISTENERS: automatically create message from array
// (userInfo.messages).forEach((message) => {
//   createMessage(
//     {value: message.name},
//     {value: message.email},
//     {value: message.message}
//   )
// })

// // LOGIC: create tech skills from javascript data

// // FUNCTION: create container with full and empty experience circles
// function createCircleExpContainer(num) {
//   const circleContainer = document.createElement("div");
//   circleContainer.classList.add("displayFlex", "gapBetweenCircles");

//   if (num > 5) num = 5;

//   for (let i = 0; i < num; i++) {
//     const circleFull = document.createElement("img");
//     circleFull.src = "./images/CircleAndDisc/full circle.svg";
//     circleFull.classList.add("dotExperienceDismension");
//     circleContainer.appendChild(circleFull);
//   }

//   for (let i = 0; i < 5 - num; i++) {
//     const circleEmpty = document.createElement("img");
//     circleEmpty.src = "./images/CircleAndDisc/empty circle.svg";
//     circleEmpty.classList.add("dotExperienceDismension");
//     circleContainer.appendChild(circleEmpty);
//   }

//   return circleContainer;
// }

// // FUNCTION: create full skill container
// function createTechSkill(skill, num) {
//   const skillContainer = document.createElement("div");
//   skillContainer.classList.add(
//     "displayFlex",
//     "gapInsideLogoSkill",
//     "logoSkillContainer"
//   );

//   const skillImgContainer = document.createElement("div");
//   skillImgContainer.classList.add("dimensionSkillLogo");

//   const imageSkill = document.createElement("img");
//   imageSkill.src = `./images/MySkills/${skill}.svg`;
//   imageSkill.alt = `logo ${skill}`;

//   skillImgContainer.appendChild(imageSkill);
//   skillContainer.appendChild(skillImgContainer);

//   const skillExperienceContainer = document.createElement("div");
//   skillExperienceContainer.classList.add(
//     "flexStyleColumn",
//     "justifyContentSpaceBetween"
//   );

//   const nameSkill = document.createElement("p");
//   nameSkill.textContent = `${skill}`;
//   skillExperienceContainer.appendChild(nameSkill);

//   const circleExpContainer = document.createElement("div");

//   skillContainer.appendChild(skillExperienceContainer);
//   circleExpContainer.appendChild(createCircleExpContainer(num));
//   skillExperienceContainer.appendChild(circleExpContainer);

//   const yearOfExperience = document.createElement("p");
//   yearOfExperience.classList.add("yearsOfExperience");
//   yearOfExperience.textContent = num === 1 ? `${num} year` : `${num} years`;
//   skillExperienceContainer.appendChild(yearOfExperience);

//   mainSkillContainer.appendChild(skillContainer);
// }

// // EVENT LISTENERS: create skill container from array
// (userInfo.techSkill).forEach((tech) => {
//   createTechSkill(tech.skill, tech.experience);
// });

// // LOGIC: check amount of project card

// // FUNCTION: control visibility of message and carousel navigation based on number of project cards
// function checkAmountProjectCard() {
//   const projectCard = document.querySelectorAll(".imageProjectContainer");
//   const noProjectsMessageContainer = document.getElementById(
//     "noProjectsMessageContainer"
//   );
//   const navButtonsDesktop = document.getElementById("navButtonsDesktop");
//   const navButtonsMobile = document.getElementById("navButtonsMobile");

//   if (projectCard.length > 3) {
//     navButtonsMobile.classList.remove("hiddenElement");
//     navButtonsDesktop.classList.remove("hiddenElement");
//   } else {
//     navButtonsMobile.classList.add("hiddenElement");
//     navButtonsDesktop.classList.add("hiddenElement");
//   }

//   if (projectCard.length === 0) {
//     noProjectsMessageContainer.classList.remove("hiddenElement");
//   } else {
//     noProjectsMessageContainer.classList.add("hiddenElement");
//   }
// }

// //   LOGIC: navigation button carausel

// // FUNCTION: update carousel position based on screen width (horizontal for desktop, vertical for mobile)
// function updateCarouselPosition() {
//   const isMobile = window.innerWidth <= 1024;
//   const totalCardWidth = getCardTotalWidthtWithGap();

//   const offsetY = carouselIndexVertical * totalCardHeight;
//   const offsetX = carouselIndexHorizontal * totalCardWidth;

//   carouselTrack.style.transform = isMobile
//     ? `translateY(-${offsetY}px)`
//     : `translateX(-${offsetX}px)`;
// }

// // FUNCTION:
// function cloneStartEndCard() {
//   const allCards = document.querySelectorAll(
//     ".imageProjectCarousel:not(.clone)"
//   );
//   const cardsTrack = document.getElementById("carouselTrack");

//   if (allCards.length === 0) return;
//   // if (allCards.length <= 3) return;

//   const cloneCards = Math.min(3, allCards.length);

//   for (let i = 0; i < cloneCards; i++) {
//     const clone = allCards[i].cloneNode(true);
//     clone.classList.add("clone");
//     cardsTrack.appendChild(clone);
//   }

//   for (let i = 1; i <= cloneCards; i++) {
//     const clone = allCards[allCards.length - i].cloneNode(true);
//     clone.classList.add("clone");
//     cardsTrack.insertBefore(clone, cardsTrack.firstChild);
//     // cardsTrack.insertBefore(clone,cardsTrack);
//   }
// }

// // FUNCTION: allow delete all carousel cards with the "clone" class
// function deleteAllclone() {
//   const cloneElements = document.querySelectorAll(".clone");
//   cloneElements.forEach((clone) => clone.remove());
// }

// // FUNCTION: for everyone create and delete project card refresh clone status
// function refreshCarouselClones() {
//   deleteAllclone();
//   const originalCards = document.querySelectorAll(
//     ".imageProjectCarousel:not(.clone)"
//   ).length;
//   console.log(originalCards);

//   if (originalCards <= 3) {
//     carouselTrack.classList.add("cloneItem");
//     return;
//   }

//   carouselTrack.classList.remove("cloneItem");
//   cloneStartEndCard();
// }

// // FUNCTION: reset carousel position to initial state after updates
// function resetCarouselPosition() {
//   setTimeout(() => {
//     const originalCards = document.querySelectorAll(
//       ".imageProjectCarousel:not(.clone)"
//     ).length;
//     if (originalCards > 3) {
//       carouselIndexHorizontal = 3;
//       carouselIndexVertical = 3;
//     } else {
//       carouselIndexHorizontal = 0;
//       carouselIndexVertical = 0;
//     }
//     updateCarouselPosition();
//   }, 0);
// }

// // FUNCTION: temporarily disable carousel transition animation
// function disableTransition() {
//   carouselTrack.style.transition = "none";
// }

// // FUNCTION:  re-enable carousel transition animation
// function enableTransition() {
//   carouselTrack.style.transition = "";
// }

// // FUNCTION: allow scroll carasuel with infiniteloop style mode
// function checkAndResetInfiniteScroll() {
//   const allCards = document.querySelectorAll(
//     ".imageProjectCarousel:not(.clone)"
//   );
//   const totalOriginalCards = allCards.length;

//   if (carouselIndexHorizontal >= totalOriginalCards + 3) {
//     disableTransition();
//     carouselIndexHorizontal = 3;
//     carouselIndexVertical = 3;
//     updateCarouselPosition();
//     requestAnimationFrame(() => enableTransition());
//   }

//   if (carouselIndexHorizontal < 0) {
//     disableTransition();
//     carouselIndexHorizontal = totalOriginalCards;
//     carouselIndexVertical = totalOriginalCards;
//     updateCarouselPosition();
//     requestAnimationFrame(() => enableTransition());
//   }
// }

// // FUNCTION: allow to move down carausel project card
// function clickDown() {
//   const totalCards = document.querySelectorAll(".imageProjectCarousel").length;

//   if (carouselIndexVertical < totalCards - 3) {
//     carouselIndexVertical++;
//     carouselIndexHorizontal++;
//     updateCarouselPosition();
//   }
//   checkAndResetInfiniteScroll();
// }

// // FUNCTION: allow to move up carausel project card
// function clickUp() {
//   if (carouselIndexVertical >= 0) {
//     carouselIndexVertical--;
//     carouselIndexHorizontal--;
//     updateCarouselPosition();
//   }
//   checkAndResetInfiniteScroll();
// }

// // FUNCTION: allow to move right carausel project card
// function clickRight() {
//   const totalCards = document.querySelectorAll(".imageProjectCarousel").length;

//   if (carouselIndexHorizontal < totalCards - 3) {
//     carouselIndexVertical++;
//     carouselIndexHorizontal++;
//     updateCarouselPosition();
//   }
//   checkAndResetInfiniteScroll();
// }

// // FUNCTION: allow to move left carausel project card
// function clickLeft() {
//   const totalCards = document.querySelectorAll(".imageProjectCarousel").length;

//   if (carouselIndexHorizontal >= 0) {
//     carouselIndexVertical--;
//     carouselIndexHorizontal--;
//     updateCarouselPosition();
//   }
//   checkAndResetInfiniteScroll();
// }

// // EVENT LISTENERS: move down carausel
// iconDownButton.addEventListener("click", () => {
//   clickDown();
// });

// // EVENT LISTENERS: move up carausel
// iconUpButton.addEventListener("click", () => {
//   clickUp();
// });

// // EVENT LISTENERS: move right carausel
// iconRightButton.addEventListener("click", () => {
//   clickRight();
// });

// // EVENT LISTENERS: move left carausel
// iconLeftButton.addEventListener("click", () => {
//   clickLeft();
// });

// // EVENT LISTENERS: update carousel position on window resize
// window.addEventListener("resize", () => {
//   updateCarouselPosition();
// });
