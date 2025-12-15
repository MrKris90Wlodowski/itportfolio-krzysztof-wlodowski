// IMPORT: object include user info data and structure application
import userInfo from "./userInfo.js";
import structureApp from "./structureITPortfolio.js";

// ELEMENT HTML STRUCTURE: main amd header container and nav links
const mainContainer = document.getElementById("mainContainer");
const headerContainer = document.getElementById("headerContainer");
const navItems = document.querySelectorAll("nav li");
const normalMenuMobile = document.getElementById("normalMenuMobile");
const goldMenuMobile = document.getElementById("goldMenuMobile");
const menuListMobile = document.getElementById("menuListMobile");

// FUNCTION: show and hide hamburger menu
function showHideMobileMenu() {
  menuListMobile.classList.toggle("activeElement");
  normalMenuMobile.classList.toggle("activeElement");
  goldMenuMobile.classList.toggle("activeElement");
}

// EVENT LISTENERS: controller steer gold and normal hamburger menu
normalMenuMobile.addEventListener("click", showHideMobileMenu);
goldMenuMobile.addEventListener("click", showHideMobileMenu);

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
      structureApp.headerInfo[targetName].heading,
      structureApp.headerInfo[targetName].paragraph
    );
    matchedItems.forEach((item) => {
      item.classList.add("activeListElement");
    });
  });
});

// BASIC FUNCTIONS: basic reusable function

// FUNCTION: clear and create basic frame section
function renderBasicElement({
  clearMain = false,
  element = "div",
  classElement = [],
  idElement = "",
  textElement = "",
  typeElement = "",
}) {
  if (clearMain === true) {
    mainContainer.innerHTML = "";
  }
  const casualElement = document.createElement(element);
  casualElement.classList.add(...classElement);
  casualElement.textContent = textElement;
  casualElement.id = idElement;
  casualElement.type = typeElement;
  return casualElement;
}

// FUNCTION: create basic label
function renderBasicLabel({ forlabel, classLabel = [], textLabel }) {
  const labelElement = document.createElement("label");
  labelElement.htmlFor = forlabel;
  labelElement.classList.add(...classLabel);
  labelElement.textContent = textLabel;
  return labelElement;
}

// FUNCTION: create basic input
function renderBasicInput({
  classInput = [],
  typeInput = "text",
  requiredInput = true,
  placeholderInput,
  idInput,
}) {
  const inputElement = document.createElement("input");
  inputElement.id = idInput;
  inputElement.classList.add(...classInput);
  inputElement.type = typeInput;
  inputElement.required = requiredInput;
  inputElement.placeholder = placeholderInput;
  return inputElement;
}

// FUNCTION: create basic form field
function renderFormField({
  fieldForm,
  labelForm,
  inputForm,
  inputFieldForm,
  errorForm,
}) {
  const formField = fieldForm;
  const label = labelForm;
  const inputField = inputFieldForm;
  const input = inputForm;
  const error = errorForm;
  inputField.append(input, error);
  formField.append(label, inputField);
  return formField;
}

// FUNCTION: create basic frame image
function renderBasicImage({
  classImage = [],
  sourceImage = "",
  alterImage = "",
}) {
  const image = document.createElement("img");
  image.classList.add(...classImage);
  image.src = sourceImage;
  image.alt = alterImage;
  return image;
}

//FUNCTION: update basic render element basic info condition to size screen
function updateElement({ imgDesktop, altDesktop, imgMobile, altMobile }) {
  const element = document.createElement("div");

  function renderConditionalElement() {
    element.innerHTML = "";
    if (window.innerWidth > 1024) {
      element.appendChild(
        renderBasicImage({
          sourceImage: imgDesktop,
          alterImage: altDesktop,
        })
      );
    } else {
      element.appendChild(
        renderBasicImage({
          sourceImage: imgMobile,
          alterImage: altMobile,
        })
      );
    }
  }

  window.addEventListener("resize", () => renderConditionalElement());
  renderConditionalElement();

  return element;
}

// FUNCTION: dynnamically render basic structure info header
function renderInfoHeader(heading, paragraph) {
  headerContainer.innerHTML = "";
  const headerInfoContainer = renderBasicElement({
    classElement: ["heroTextContainer"],
  });
  const headingInfo = renderBasicElement({
    element: "h2",
    textElement: heading,
  });
  const paragraphInfo = renderBasicElement({
    element: "p",
    textElement: paragraph,
  });
  headerInfoContainer.append(headingInfo, paragraphInfo);
  headerContainer.appendChild(headerInfoContainer);
}

// HOME

// // FUNCTION: create container with full and empty experience circles
function createCircleExpContainer(num) {
  const circleContainer = renderBasicElement({
    classElement: ["displayFlex", "gapBetweenCircles"],
  });

  if (num > 5) num = 5;

  for (let i = 0; i < num; i++) {
    const circleFull = renderBasicImage({
      sourceImage: "./images/CircleAndDisc/full circle.svg",
      classImage: ["dotExperienceDismension"],
    });
    circleContainer.appendChild(circleFull);
  }

  for (let i = 0; i < 5 - num; i++) {
    const circleEmpty = renderBasicImage({
      sourceImage: "./images/CircleAndDisc/empty circle.svg",
      classImage: ["dotExperienceDismension"],
    });
    circleContainer.appendChild(circleEmpty);
  }

  return circleContainer;
}

// // FUNCTION: create full skill container
function createTechSkill(skill, num, container) {
  const skillContainer = renderBasicElement({
    classElement: ["displayFlex", "gapInsideLogoSkill", "logoSkillContainer"],
  });
  const skillImgContainer = renderBasicElement({
    classElement: ["dimensionSkillLogo"],
  });
  const imageSkill = renderBasicImage({
    sourceImage: `./images/MySkills/${skill}.svg`,
    alterImage: `logo ${skill}`,
  });

  skillImgContainer.appendChild(imageSkill);
  skillContainer.appendChild(skillImgContainer);

  const skillExperienceContainer = renderBasicElement({
    classElement: ["flexStyleColumn", "justifyContentSpaceBetween"],
  });
  const nameSkill = renderBasicElement({
    element: "p",
    textElement: `${skill}`,
  });

  skillExperienceContainer.appendChild(nameSkill);

  const circleExpContainer = document.createElement("div");

  skillContainer.appendChild(skillExperienceContainer);
  circleExpContainer.appendChild(createCircleExpContainer(num));
  skillExperienceContainer.appendChild(circleExpContainer);

  const yearOfExperience = renderBasicElement({
    element: "p",
    classElement: ["yearsOfExperience"],
    textElement: num === 1 ? `${num} year` : `${num} years`,
  });
  skillExperienceContainer.appendChild(yearOfExperience);

  container.appendChild(skillContainer);
}

function createCarauselElement(array, container) {
  container.innerHTML = "";
  const oldArray = array;
  const firstThreeElements = [
    array[array.length - 3],
    array[array.length - 2],
    array[array.length - 1],
  ];
  const lastThreeElements = [array[0], array[1], array[2]];
  const newArray = [...firstThreeElements, ...array, ...lastThreeElements];
  // console.log(newCarausel);

  (array.length <= 3 ? oldArray : newArray).forEach((element) => {
    addNewProject({
      project: { value: element.project },
      technology: { value: element.technology },
      isDeleteButton: false,
      container: container,
    });
  });
}

// FUNCTION: move carousel
function moveCarousel(track, index) {
  const heightCard = 460;
  const widthCard = 360;
  const gapBetweenCards = 41;
  const totalCardHeight = heightCard + gapBetweenCards;
  const totalCardWidth = widthCard + gapBetweenCards;

  if (window.innerWidth > 1024) {
    track.style.transform = `translateY(-${0}px)`;
    track.style.transform = `translateX(-${index * totalCardWidth}px)`;
  } else {
    track.style.transform = `translateX(-${0}px)`;
    track.style.transform = `translateY(-${index * totalCardHeight}px)`;
  }
}

// FUNCTION: conditional render carousel and navigation buttons
function renderCarousel(container, length) {
  // GUARD: no projects → no carousel
  if (length === 0) return;


  // CAROUSEL TRACK
  const carasuelTrackContainer = renderBasicElement({ idElement: "carouselTrack" });

  userInfo.cardsProjects.forEach((card) => {
    addNewProject({
      project: { value: card.project },
      technology: { value: card.technology },
      uniqeDataset: crypto.randomUUID(),
      container: carasuelTrackContainer,
      isDeleteButton: false,
    });
  });

  createCarauselElement(userInfo.cardsProjects, carasuelTrackContainer);

  // CAROUSEL CONTAINER
  const carasuelContainer = renderBasicElement({ idElement: "carousel" });
  const carasuelMainContainer = renderBasicElement({
    idElement: "carouselContainer",
    classElement: ["marginProjectsCarousel"],
  });

  carasuelContainer.appendChild(carasuelTrackContainer);
  carasuelMainContainer.appendChild(carasuelContainer);
  container.appendChild(carasuelMainContainer);

  // GUARD: max 3 items → no navigation buttons
  if (length <= 3) return;

  // NAVIGATION BUTTONS
  let index = 3;

  const buttonsMainContainer = renderBasicElement({
    idElement: "navButtonsDesktop",
  });

  const buttonsContainer = renderBasicElement({
    classElement: [
      "displayFlexJustifyCenter",
      "alignItemsFlexCenter",
      "marginAndGapButton",
      "buttonsDesktop",
    ],
  });

  const buttonNavigateFirst = renderBasicElement({
    element: "button",
    classElement: [
      "dismensionButtonArrow",
      "displayFlexJustifyCenter",
      "alignItemsFlexCenter",
    ],
  });

  const buttonNavigateSecond = renderBasicElement({
    element: "button",
    classElement: [
      "dismensionButtonArrow",
      "displayFlexJustifyCenter",
      "alignItemsFlexCenter",
    ],
  });

  // ICONS
  buttonNavigateFirst.appendChild(
    updateElement({
      imgDesktop: "./images/IconLeft.svg",
      altDesktop: "icon left arrow",
      imgMobile: "./images/IconDown.svg",
      altMobile: "icon down arrow",
    })
  );

  buttonNavigateSecond.appendChild(
    updateElement({
      imgDesktop: "./images/IconRight.svg",
      altDesktop: "icon right arrow",
      imgMobile: "./images/IconUp.svg",
      altMobile: "icon up arrow",
    })
  );

  // EVENTS
  buttonNavigateFirst.addEventListener("click", () => {
    index = index <= 0 ? carasuelTrackContainer.children.length - 4 : index - 1;
    moveCarousel(carasuelTrackContainer, index);
  });

  buttonNavigateSecond.addEventListener("click", () => {
    index = index >= carasuelTrackContainer.children.length - 4 ? 0 : index + 1;
    moveCarousel(carasuelTrackContainer, index);
  });

  // ASSEMBLE
  buttonsContainer.append(buttonNavigateFirst, buttonNavigateSecond);
  buttonsMainContainer.appendChild(buttonsContainer);
  container.appendChild(buttonsMainContainer);

  // RESPONSIVE UPDATE
  window.addEventListener("resize", () => moveCarousel(carasuelTrackContainer, index));
  moveCarousel(carasuelTrackContainer, index);
}



// PROJECTS

// FUNCTION: allow create info message
function updateLayoutAndMessage(container) {
  const message = container.querySelector("#noProjectsMessage");
  const length = userInfo.cardsProjects.length;

  // EMPTY STATE
  if (length === 0) {
    if (!message) {
      container.appendChild(
        renderBasicElement({
          idElement: "noProjectsMessage",
          element: "p",
          classElement: ["flexStyleCenter"],
          textElement: "There are no projects to display",
        })
      );
    }
    container.classList.remove("displayGrid", "gridColumnsProject");
    container.classList.add("flexStyleCenter");
    return;
  }
  message?.remove();

  // LAYOUT STATE
  if (length < 3) {
    container.classList.remove("displayGrid", "gridColumnsProject");
    container.classList.add("flexStyleCenter");
  } else {
    container.classList.add("displayGrid", "gridColumnsProject");
    container.classList.remove("flexStyleCenter");
  }
}

// FUNCTION: add new project card in projects section
function addNewProject({
  project,
  technology,
  uniqeDataset,
  container,
  index,
  isDeleteButton = true,
}) {
  const projectValue = project.value.trim();
  const technologyValue = technology.value
    .trim()
    .split(",")
    .map((tech) => tech.trim())
    .filter((tech) => tech !== "");

  const newProject = document.createElement("div");
  newProject.dataset.id = uniqeDataset;
  newProject.dataset.index = index;
  newProject.classList.add("imageProjectContainer");
  const nameProject = document.createElement("h4");
  nameProject.textContent = `${projectValue}`;
  newProject.appendChild(nameProject);

  const listTech = document.createElement("ul");
  listTech.classList.add("technologyUse");
  technologyValue.forEach((tech) => {
    const newTech = document.createElement("li");
    newTech.textContent = `${tech}`;
    listTech.appendChild(newTech);
  });
  newProject.appendChild(listTech);

  if (isDeleteButton) {
    const buttonDelete = renderBasicElement({
      element: "button",
      classElement: ["imageDeleteContainer"],
    });
    newProject.appendChild(buttonDelete);
    buttonDelete.addEventListener("click", (event) => {
      const project = event.currentTarget.closest(".imageProjectContainer");
      const index = Number(project.dataset.index);
      project.remove();
      userInfo.cardsProjects.splice(index, 1);
      container.innerHTML = "";
      userInfo.cardsProjects.forEach((card) => {
        const index = container.children.length;
        const uniqeDataset = crypto.randomUUID();
        addNewProject({
          project: { value: card.project },
          technology: { value: card.technology },
          uniqeDataset: uniqeDataset,
          container: container,
          index: index,
        });
      });
      updateLayoutAndMessage(projectsContainer);
    });
  }
  container.appendChild(newProject);
}

// FUNCTION: check validate input
function errorMessage({
  min = null,
  max = null,
  isEmail = false,
  value,
  specialErrorText,
  textElement,
  inputElement,
  minErrorText,
  maxErrorText,
}) {
  const valueEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valueSearch = value;
  if (isEmail) {
    if (valueEmail.test(valueSearch)) {
      inputElement.classList.remove("errorInputLine");
      inputElement.classList.add("validInputLine");
      textElement.classList.add("hiddenElement");
      return true;
    } else {
      inputElement.classList.remove("validInputLine");
      inputElement.classList.add("errorInputLine");
      textElement.textContent = specialErrorText;
      textElement.classList.remove("hiddenElement");
      return false;
    }
  } else {
    if (min && max) {
      if (valueSearch < min) {
        inputElement.classList.remove("validInputLine");
        inputElement.classList.add("errorInputLine");
        textElement.textContent = minErrorText;
        textElement.classList.remove("hiddenElement");
        return false;
      } else if (valueSearch > max) {
        inputElement.classList.remove("validInputLine");
        inputElement.classList.add("errorInputLine");
        textElement.textContent = maxErrorText;
        textElement.classList.remove("hiddenElement");
        return false;
      } else {
        inputElement.classList.remove("errorInputLine");
        inputElement.classList.add("validInputLine");
        textElement.classList.add("hiddenElement");
        return true;
      }
    }
  }
}

// ABOUT ME

// FUNCTION: allow to create with description in section about me
function createArticle({
  heading = "",
  description = "",
  classArticleContainer = [],
  classHeadingArticle = [],
  classDescriptionArticle = [],
  container,
}) {
  const articleContainer = renderBasicElement({
    classElement: [...classArticleContainer],
  });
  const article = renderBasicElement({ element: "article" });
  const headingArticle = renderBasicElement({
    element: "h3",
    classElement: [...classHeadingArticle],
    textElement: heading,
  });
  const descriptionArticle = renderBasicElement({
    element: "p",
    classElement: [...classDescriptionArticle],
    textElement: description,
  });
  article.append(headingArticle, descriptionArticle);
  articleContainer.appendChild(article);
  container.appendChild(articleContainer);
}

// MESSAGES, CONTACT

// FUNCTION: allow to create new message in section message
function createMessage(name, email, message, container) {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  const messageContainer = document.createElement("div");

  const nameElement = renderBasicElement({
    element: "p",
    textElement: `Name: ${nameValue}`,
    classElement: ["primaryStyleText"],
  });
  const emailElement = renderBasicElement({
    element: "p",
    textElement: `Email: ${emailValue}`,
    classElement: ["primaryStyleText"],
  });
  const messageElement = renderBasicElement({
    element: "p",
    textElement: `Message: ${messageValue}`,
    classElement: ["primaryStyleText"],
  });

  messageContainer.append(nameElement, emailElement, messageElement);
  container.appendChild(messageContainer);
}

// FUNCTION: update element position and classes based on screen size
function updateElementsLayout(newParent, oldParent, child, casualElement) {
  const childNextSibling = oldParent.children[0];
  if (window.innerWidth < 1024) {
    child.style.backgroundColor = "#F9F9F9";
    child.classList.add("paddingSectionContact");
    newParent.insertBefore(child, newParent.firstChild);
    casualElement.classList.remove("paddingSectionContact");
  } else {
    oldParent.insertBefore(child, childNextSibling);
    child.classList.remove("paddingSectionContact");
    casualElement.classList.add("paddingSectionContact");
  }
}

// ======================
//          MODAL
// ======================

// FUNCTION: create modal form
function createModal() {
  // MAIN STRUCTURE
  const modal = renderBasicElement({
    element: "div",
    classElement: ["modalMainContainer"],
    idElement: "modal",
  });
  const modalContainer = renderBasicElement({
    element: "div",
    classElement: ["dismensionModal", "positionRelative"],
    idElement: "modalContainer",
  });
  const modalForm = document.createElement("form");
  const modalFormContainer = renderBasicElement({
    classElement: [
      "flexStyleCenter",
      "directionFlexColumn",
      "alignItemsFlexStart",
    ],
  });

  // CLOSE BUTTON
  const closeButtonContainer = renderBasicElement({});
  const closeButton = renderBasicElement({
    element: "button",
    classElement: ["closeLogoX"],
  });
  const closeImage = renderBasicImage({
    classImage: ["dimensionCloseLogoX"],
    sourceImage: "./images/iconX.svg",
    alterImage: "icon close X",
  });
  closeButton.appendChild(closeImage);
  closeButton.addEventListener("click", () => {
    modal.remove();
    document.body.classList.remove("noScroll");
  });
  closeButtonContainer.appendChild(closeButton);

  // FORM FIELD: PROJECT NAME
  const inputProject = renderBasicInput({
    idInput: "inputProjectName",
    placeholderInput: structureApp.formInfo.inputPlaceholder.project,
    classInput: ["inputStyle", "validInputLine"],
  });
  const errorProject = renderBasicElement({
    element: "p",
    classElement: ["errorInfo", "hiddenElement", "absoluteModalError"],
  });
  const projectNamecontainer = renderFormField({
    fieldForm: renderBasicElement({
      classElement: ["flexStyleColumn", "fullWidth"],
    }),
    labelForm: renderBasicLabel({
      classLabel: ["primaryStyleText", "marginLabelModalProject"],
      forlabel: "inputProjectName",
      textLabel: structureApp.formInfo.label.project,
    }),
    inputFieldForm: renderBasicElement({
      classElement: ["flexStyleColumn", "fullWidth", "positionRelative"],
    }),
    inputForm: inputProject,
    errorForm: errorProject,
  });

  // FORM FIELD: TECHNOLOGY
  const inputTechnology = renderBasicInput({
    idInput: "inputTechnology",
    placeholderInput: structureApp.formInfo.inputPlaceholder.technology,
    classInput: ["inputStyle", "validInputLine"],
  });
  const errorTechnology = renderBasicElement({
    element: "p",
    classElement: ["errorInfo", "hiddenElement", "absoluteModalError"],
  });
  const projectTechContainer = renderFormField({
    fieldForm: renderBasicElement({
      classElement: ["flexStyleColumn", "fullWidth"],
    }),
    labelForm: renderBasicLabel({
      classLabel: ["primaryStyleText", "marginLabelModalTech"],
      forlabel: "inputTechnology",
      textLabel: structureApp.formInfo.label.technology,
    }),
    inputFieldForm: renderBasicElement({
      classElement: ["flexStyleColumn", "fullWidth", "positionRelative"],
    }),
    inputForm: inputTechnology,
    errorForm: errorTechnology,
  });

  // SUBMIT BUTTON
  const addProjectContainer = renderBasicElement({
    classElement: ["displayFlexJustifyCenter", "fullWidth"],
  });
  const buttonAddProject = renderBasicElement({
    element: "button",
    classElement: ["flexStyleCenter", "gapInsideButton", "marginButtonModal"],
    textElement: "Add project",
  });

  // FORM VALIDATION STATE
  let isValidate = false;
  let isProject = false;
  let isTech = false;

  buttonAddProject.addEventListener("click", (event) => {
    event.preventDefault();

    // INITIAL VALIDATION
    const projectValue = inputProject.value.trim().length;
    isProject = errorMessage({
      min: 3,
      max: 30,
      value: projectValue,
      textElement: errorProject,
      inputElement: inputProject,
      minErrorText: structureApp.formInfo.errorMessage.min("technology", 3),
      maxErrorText: structureApp.formInfo.errorMessage.max("title", 30),
    });
    const projectTechnology = inputTechnology.value.trim().length;
    isTech = errorMessage({
      min: 1,
      max: +Infinity,
      value: projectTechnology,
      textElement: errorTechnology,
      inputElement: inputTechnology,
      minErrorText: structureApp.formInfo.errorMessage.technology,
    });

    // REAL-TIME VALIDATION (after first click)
    if (!isValidate) {
      inputProject.addEventListener("input", () => {
        errorMessage({
          min: 3,
          max: 30,
          value: inputProject.value.trim().length,
          textElement: errorProject,
          inputElement: inputProject,
          minErrorText: structureApp.formInfo.errorMessage.min("technology", 3),
          maxErrorText: structureApp.formInfo.errorMessage.max("title", 30),
        });
      });
      inputTechnology.addEventListener("input", () => {
        errorMessage({
          min: 1,
          max: +Infinity,
          value: inputTechnology.value.trim().length,
          textElement: errorTechnology,
          inputElement: inputTechnology,
          minErrorText: structureApp.formInfo.errorMessage.technology,
        });
      });
    }
    isValidate = true;

    // SUCCESS HANDLER
    if (isProject && isTech) {
      const projectsContainer = document.getElementById("projectsContainer");
      const uniqeDataset = crypto.randomUUID();
      const index = projectsContainer.children.length;
      addNewProject({
        project: inputProject,
        technology: inputTechnology,
        uniqeDataset: uniqeDataset,
        container: projectsContainer,
        index: index,
      });
      userInfo.cardsProjects.push({
        project: inputProject.value.trim(),
        technology: inputTechnology.value.trim().split(",").join(","),
      });
      updateLayoutAndMessage(projectsContainer);
      modal.remove();
      document.body.classList.remove("noScroll");
    }
  });
  addProjectContainer.appendChild(buttonAddProject);

  // ASSEMBLE STRUCTURE
  modalForm.append(
    closeButtonContainer,
    projectNamecontainer,
    projectTechContainer,
    addProjectContainer
  );
  modalForm.appendChild(modalFormContainer);
  modalContainer.appendChild(modalForm);
  modal.appendChild(modalContainer);
  document.body.appendChild(modal);
}

// FUNCTION: allow to create new message in section message

// FUNCTION: dynamically render section in the main container
function renderSection(target) {
  // ======================
  // HOME
  // ======================
  if (target === "home") {
    const projectLenght = userInfo.cardsProjects.length;
    const mainHomeContainer = renderBasicElement({
      clearMain: true,
      classElement: ["paddingSectionHome", "container"],
    });
    const imageMaleContainer = renderBasicElement({
      classElement: ["imageMaleContainer"],
    });
    const headingMySkills = renderBasicElement({
      element: "h3",
      classElement: ["marginHeadingMySkills"],
      textElement: "My Skills",
    });
    const techContainer = renderBasicElement({
      classElement: ["flexWrapLogoSkill", "gapInsideLogoSkillContainer"],
    });

    userInfo.techSkill.forEach((tech) => {
      createTechSkill(tech.skill, tech.experience, techContainer);
    });
    const homeContainer = renderBasicElement({
      classElement: [
        "flexStyleColumn",
        "justify-content",
        "alignItemsFlexCenter",
      ],
    });
    homeContainer.appendChild(imageMaleContainer);
    createArticle({
      heading: "About me",
      description: userInfo.info.introduce,
      classHeadingArticle: ["marginHeadingAboutMe"],
      classDescriptionArticle: ["preLine"],
      container: homeContainer,
    });
    mainHomeContainer.append(
      homeContainer,
      headingMySkills,
      techContainer,
    );
    renderCarousel(mainHomeContainer,projectLenght);

    mainContainer.appendChild(mainHomeContainer);
  }

  // ======================
  // PROJECTS
  // ======================
  else if (target === "projects") {
    // MAIN STRUCTURE
    const mainProjectsContainer = renderBasicElement({
      clearMain: true,
      element: "div",
      classElement: [
        "paddingSectionProjectMe",
        "flexStyleColumn",
        "alignItemsFlexCenter",
        "container",
      ],
    });
    // ADD PROJECT BUTTON
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add(
      "displayFlexJustifyCenter",
      "buttonAddProjectMargin"
    );
    const buttonAddProject = renderBasicElement({
      element: "button",
      classElement: ["flexStyleCenter", "gapInsideButton"],
      textElement: "Add project",
    });
    const imageButton = renderBasicImage({
      classImage: ["iconPlusButton"],
      sourceImage: "./images/Vector.svg",
      alterImage: "icon plus sign",
    });
    // OPEN MODAL HANDLER
    buttonAddProject.addEventListener("click", () => {
      createModal();
      document.body.classList.add("noScroll");
    });
    buttonAddProject.appendChild(imageButton);
    buttonContainer.appendChild(buttonAddProject);
    // PROJECTS LIST CONTAINER
    const projectsContainer = renderBasicElement({
      classElement: ["displayGrid", "gapInsideMyProject", "gridColumnsProject"],
      idElement: "projectsContainer",
    });
    // RENDER PROJECT CARDS
    userInfo.cardsProjects.forEach((card) => {
      const index = projectsContainer.children.length;
      const uniqeDataset = crypto.randomUUID();
      addNewProject({
        project: { value: card.project },
        technology: { value: card.technology },
        uniqeDataset: uniqeDataset,
        container: projectsContainer,
        index: index,
      });
    });
    // ASSEMBLE STRUCTURE
    mainProjectsContainer.appendChild(buttonContainer);
    mainProjectsContainer.appendChild(projectsContainer);
    mainContainer.appendChild(mainProjectsContainer);
  }

  // ======================
  // ABOUT ME
  // ======================
  else if (target === "about") {
    // MAIN STRUCTURE
    const mainAboutMecontainer = renderBasicElement({
      clearMain: true,
      element: "div",
      classElement: [
        "flexStyleColumn",
        "alignItemsFlexCenter",
        "paddinSectionAboutMe",
        "gapBetweenElements",
        "container",
      ],
    });
    const imageMaleContainer = renderBasicElement({
      classElement: ["imageMaleContainer"],
    });
    mainAboutMecontainer.appendChild(imageMaleContainer);
    // DYNAMIC CONTENT
    createArticle({
      heading: "My background",
      description: userInfo.info.myBackground,
      classArticleContainer: "articleContainer",
      container: mainAboutMecontainer,
    });
    createArticle({
      heading: "My hobbies and interests",
      description: userInfo.info.hobbies,
      classArticleContainer: "articleContainer",
      container: mainAboutMecontainer,
    });
    const buttoncontainer = document.createElement("div");
    buttoncontainer.classList.add(
      "displayFlexJustifyCenter",
      "buttonContactMeMargin"
    );
    const buttonContactMe = renderBasicElement({
      element: "button",
      classElement: ["flexStyleCenter", "gapInsideButton"],
      textElement: "Contact me",
    });
    const imageButton = renderBasicImage({
      classImage: ["iconArrowButton"],
      sourceImage: "./images/Arrow right.svg",
      alterImage: "icon arrow sign",
    });
    // NAVIGATION HANDLER
    buttonContactMe.addEventListener("click", () => {
      const contactItems = document.querySelectorAll(`[data-target="contact"]`);
      navItems.forEach((item) => {
        item.classList.remove("activeListElement");
      });
      contactItems.forEach((item) => {
        item.classList.add("activeListElement");
      });
      renderSection("contact");
      renderInfoHeader(
        headerInfo.contact.heading,
        headerInfo.contact.paragraph
      );
    });
    // ASSEMBLE STRUCTURE
    buttonContactMe.appendChild(imageButton);
    buttoncontainer.appendChild(buttonContactMe);
    mainAboutMecontainer.appendChild(buttoncontainer);
    mainContainer.appendChild(mainAboutMecontainer);
  }

  // ======================
  // CONTACT
  // ======================
  else if (target === "contact") {
    // MAIN STRUCTURE
    const mainContactContainer = renderBasicElement({
      clearMain: true,
      element: "div",
      classElement: ["paddingSectionContact", "container"],
    });
    const headingContactMe = renderBasicElement({
      element: "h3",
      textElement: "Contact me",
    });
    // FORM STRUCTURE
    const formContact = renderBasicElement({
      element: "form",
    });
    const formContactContainer = renderBasicElement({
      element: "div",
      classElement: ["flexStyleColumn", "gapBetweenColumnInInput"],
    });
    const inputsNameAndEmailContainer = renderBasicElement({
      element: "div",
      classElement: ["displayFlexInputNameAndEmail"],
    });
    const inputsContactContainer = renderBasicElement({
      element: "div",
      classElement: ["flexStyleColumn", "gapBetweenColumnInInput"],
    });

    // DYNAMIC FIELDS
    // name field
    const inputName = renderBasicInput({
      idInput: "inputName",
      placeholderInput: structureApp.formInfo.inputPlaceholder.name,
      classInput: ["inputStyle", "validInputLine"],
    });
    const errorName = renderBasicElement({
      element: "p",
      classElement: ["errorInfo", "hiddenElement", "absoluteContactError"],
      textElement: structureApp.formInfo.errorMessage.min("name", 4),
    });
    const nameFormField = renderFormField({
      fieldForm: renderBasicElement({
        classElement: [
          "flexStyleColumn",
          "gapBetweenLabelAndInput",
          "fullSpaceInput",
        ],
      }),
      labelForm: renderBasicLabel({
        classLabel: ["primaryStyleText"],
        forlabel: "inputName",
        textLabel: structureApp.formInfo.label.name,
      }),
      inputFieldForm: renderBasicElement({
        classElement: ["flexStyleColumn", "fullSpaceInput", "positionRelative"],
      }),
      inputForm: inputName,
      errorForm: errorName,
    });

    // email field
    const inputEmail = renderBasicInput({
      idInput: "inpuEmail",
      placeholderInput: structureApp.formInfo.inputPlaceholder.email,
      classInput: ["inputStyle", "validInputLine"],
    });
    const errorEmail = renderBasicElement({
      element: "p",
      classElement: ["errorInfo", "hiddenElement", "absoluteContactError"],
      textElement: structureApp.formInfo.errorMessage.email,
    });
    const emailFormField = renderFormField({
      fieldForm: renderBasicElement({
        classElement: [
          "flexStyleColumn",
          "gapBetweenLabelAndInput",
          "fullSpaceInput",
        ],
      }),
      labelForm: renderBasicLabel({
        classLabel: ["primaryStyleText"],
        forlabel: "inpuEmail",
        textLabel: structureApp.formInfo.label.email,
      }),
      inputFieldForm: renderBasicElement({
        classElement: ["flexStyleColumn", "fullSpaceInput", "positionRelative"],
      }),
      inputForm: inputEmail,
      errorForm: errorEmail,
    });

    // message/info field
    const inputInfo = renderBasicInput({
      idInput: "inputInfo",
      placeholderInput: structureApp.formInfo.inputPlaceholder.message,
      classInput: ["inputStyle", "validInputLine"],
    });
    const errorInfo = renderBasicElement({
      element: "p",
      classElement: ["errorInfo", "hiddenElement", "absoluteContactError"],
      textElement: structureApp.formInfo.errorMessage.message,
    });
    const messageFormField = renderFormField({
      fieldForm: renderBasicElement({
        classElement: [
          "flexStyleColumn",
          "gapBetweenLabelAndInput",
          "fullSpaceInput",
        ],
      }),
      labelForm: renderBasicLabel({
        classLabel: ["primaryStyleText"],
        forlabel: "inputInfo",
        textLabel: structureApp.formInfo.label.message,
      }),
      inputFieldForm: renderBasicElement({
        classElement: ["flexStyleColumn", "fullSpaceInput", "positionRelative"],
      }),
      inputForm: inputInfo,
      errorForm: errorInfo,
    });

    // BUTTON
    const buttonContainer = renderBasicElement({
      element: "div",
      classElement: [
        "displayFlexJustifyCenter",
        "buttonSendMessageMargin",
        "paddingSectionContactButton",
      ],
    });
    const buttonSendMessage = renderBasicElement({
      element: "button",
      textElement: "Send message",
    });

    // VALIDATION HANDLER
    let isValidate = false;
    let isName = false;
    let isEmail = false;
    let isInfo = false;
    buttonSendMessage.addEventListener("click", (event) => {
      const nameValue = inputName.value.trim().length;
      isName = errorMessage({
        min: 3,
        max: 20,
        value: nameValue,
        textElement: errorName,
        inputElement: inputName,
        minErrorText: structureApp.formInfo.errorMessage.min("name", 3),
        maxErrorText: structureApp.formInfo.errorMessage.max("name", 20),
      });
      const emailValue = inputEmail.value.trim();
      isEmail = errorMessage({
        isEmail: true,
        value: emailValue,
        textElement: errorEmail,
        inputElement: inputEmail,
        specialErrorText: structureApp.formInfo.errorMessage.email,
      });
      const infoValue = inputInfo.value.trim().length;
      isInfo = errorMessage({
        min: 1,
        max: 100,
        value: infoValue,
        textElement: errorInfo,
        inputElement: inputInfo,
        minErrorText: structureApp.formInfo.errorMessage.message,
        maxErrorText: structureApp.formInfo.errorMessage.max("message", 100),
      });

      if (!isValidate) {
        inputName.addEventListener("input", () => {
          const nameValue = inputName.value.trim().length;
          errorMessage({
            min: 3,
            max: 20,
            value: nameValue,
            textElement: errorName,
            inputElement: inputName,
            minErrorText: structureApp.formInfo.errorMessage.min("name", 3),
            maxErrorText: structureApp.formInfo.errorMessage.max("name", 20),
          });
          inputEmail.addEventListener("input", () => {
            const emailValue = inputEmail.value.trim();
            errorMessage({
              isEmail: true,
              value: emailValue,
              textElement: errorEmail,
              inputElement: inputEmail,
              specialErrorText: structureApp.formInfo.errorMessage.email,
            });
            inputInfo.addEventListener("input", () => {
              const infoValue = inputInfo.value.trim().length;
              errorMessage({
                min: 1,
                max: 100,
                value: infoValue,
                textElement: errorInfo,
                inputElement: inputInfo,
                minErrorText: structureApp.formInfo.errorMessage.message,
                maxErrorText: structureApp.formInfo.errorMessage.max(
                  "message",
                  100
                ),
              });
            });
          });
        });
      }

      isValidate = true;
      event.preventDefault();

      if (isName && isEmail && isInfo) {
        userInfo.messages.push({
          name: inputName.value.trim(),
          email: inputEmail.value.trim(),
          message: inputInfo.value.trim(),
        });
        (inputName.value = ""), (inputEmail.value = ""), (inputInfo.value = "");
      }
    });

    // ASSEMBLE STRUCTURE
    buttonContainer.appendChild(buttonSendMessage);
    inputsNameAndEmailContainer.append(nameFormField, emailFormField);
    inputsContactContainer.append(
      headingContactMe,
      inputsNameAndEmailContainer,
      messageFormField
    );
    formContactContainer.append(inputsContactContainer, buttonContainer);

    formContact.appendChild(formContactContainer);
    mainContactContainer.appendChild(formContact);
    mainContainer.appendChild(mainContactContainer);

    // RESPONSIVE LAYOUT ADJUSTMENT
    window.addEventListener("resize", () => {
      const bodyElelment = document.body;
      updateElementsLayout(
        bodyElelment,
        formContactContainer,
        inputsContactContainer,
        mainContactContainer
      );
    });
  }

  // ======================
  //        MESSAGES
  // ======================
  else if (target === "messages") {
    // MAIN STRUCTURE
    const mainMessageContainer = renderBasicElement({
      clearMain: true,
      element: "div",
      classElement: [
        "paddingSectionMessages",
        "flexStyleColumn",
        "gapBetweenMessages",
        "container",
      ],
      idElement: "mainMessageContainer",
    });
    // DYNAMIC CREATE MESSAGE
    userInfo.messages.forEach((message) => {
      createMessage(
        { value: message.name },
        { value: message.email },
        { value: message.message },
        mainMessageContainer
      );
    });
    // ASSEMBLE STRUCTURE
    mainContainer.appendChild(mainMessageContainer);
  }
}

// LOGIC: set first start subpage
renderSection("home");
renderInfoHeader(
  structureApp.headerInfo.home.heading,
  structureApp.headerInfo.home.paragraph
);
// FOOTER: set dynamic info
email.textContent = userInfo.email;
tel.textContent = `+ ${userInfo.tel}`;
