// SHOW AND HIDE MOBILE MENU

const normalMenuMobile = document.getElementById("normalMenuMobile");
const goldMenuMobile = document.getElementById("goldMenuMobile");
const menuListMobile = document.getElementById("menuListMobile");

function showHideMobileMenu () {
    menuListMobile.classList.toggle("activeElement");
    normalMenuMobile.classList.toggle("activeElement");
    goldMenuMobile.classList.toggle('activeElement');
}

normalMenuMobile.addEventListener("click", showHideMobileMenu )

goldMenuMobile.addEventListener("click", showHideMobileMenu )

// SHOW SECTION

const activeNavListElement = document.querySelectorAll("nav li");
const logoHeader = document.querySelectorAll("[data-section-header]");
const mainSections = document.querySelectorAll("[data-section]");

activeNavListElement.forEach(element => {
    element.addEventListener("click", () => {
    activeNavListElement.forEach(navList => navList.classList.remove("activeListElement"));
    const targetList = element.dataset.target;
    const similarNavList = document.querySelectorAll(`[data-target="${targetList}"]`);
    similarNavList.forEach(navList => navList.classList.add("activeListElement"));

    logoHeader.forEach(logo => { 
    logo.classList.add("hiddenElement");
    if ( logo.dataset.sectionHeader === targetList) {
        logo.classList.remove("hiddenElement")
    }})
    
    mainSections.forEach(section => {
    section.classList.add("hiddenElement");
    if (section.dataset.section === targetList) {
        section.classList.remove("hiddenElement")
    }})
})
})

// CONTACT BUTTON 

const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", () => {
    activeNavListElement.forEach(navList => navList.classList.remove("activeListElement"));
    const contactNavList = document.querySelectorAll('[data-target="contact"]');
    contactNavList.forEach(contactList => contactList.classList.add("activeListElement"));

logoHeader.forEach(logo => logo.classList.add("hiddenElement"));
const logoMessages = document.querySelector('[data-section-header="contact"]');
logoMessages.classList.remove("hiddenElement");

mainSections.forEach(section => section.classList.add("hiddenElement"));
const sectionContact = document.querySelectorAll('[data-section="contact"]');
sectionContact.forEach(secContact => secContact.classList.remove("hiddenElement"))

})

// ADD PROJECT BUTTON AND MODALFORM

const buttonAddProject = document.getElementById("buttonAddProject");
const buttonAddProjectModal = document.getElementById("buttonAddProjectModal");

const modalForm = document.getElementById("modalForm");
const closeModal = document.getElementById("closeModal")
const inputProjectName = document.getElementById("inputProjectName");
const inputTechnology = document.getElementById("inputTechnology");
const errorMinProjectName = document.getElementById("errorMinProjectName");
const errorMaxProjectName = document.getElementById("errorMaxProjectName");
const errorNoneTech = document.getElementById("errorNoneTech");

const inputsModal = document.querySelectorAll('[data-input="modal"]');
const inputsContact = document.querySelectorAll('[data-input="contact"]');


buttonAddProject.addEventListener("click", () => {
    modalForm.classList.remove("hiddenElement");
    document.body.classList.add("noScroll");
})

function closeModalView () {
    modalForm.classList.add("hiddenElement");
    document.body.classList.remove("noScroll");
}

closeModal.addEventListener("click", closeModalView );

function validateNameInput (inputText,errorMin,errorMax,min,max,dataValue) {
    const inputValue = inputText.value.trim();
    const inputTooShort = inputValue.length < min;
    const inputTooLong = inputValue.length > max;

    inputText.classList.toggle("validInputLine",!inputTooShort && !inputTooLong);
    inputText.classList.toggle("errorInputLine",inputTooShort || inputTooLong);
    errorMin.classList.toggle("hiddenElement",!inputTooShort);
    errorMax.classList.toggle("hiddenElement",!inputTooLong);
    inputText.dataset[dataValue]=!inputTooShort && !inputTooLong ? "valid" : "error";
}

function validateTechInput (inputText,errorMessage,dataValue) {
    const valueInput = inputText.value.trim();
    const isValidInput = valueInput.length > 0;

    inputText.classList.toggle("validInputLine",isValidInput);
    inputText.classList.toggle("errorInputLine",!isValidInput);
    errorMessage.classList.toggle("hiddenElement",isValidInput);
    inputText.dataset[dataValue]=isValidInput ? "valid" : "error";
}

inputProjectName.addEventListener("input", () => {validateNameInput(inputProjectName,errorMinProjectName,errorMaxProjectName,4,30,"inputProject")});
inputTechnology.addEventListener("input", () => {validateTechInput(inputTechnology,errorNoneTech,"inputTech")});

function checkValidFormModal (inpuText1,dataValue1,inputText2,dataValue2) {
    const isValidInput1 = inpuText1.dataset[dataValue1];
    const isValidInput2 = inputText2.dataset[dataValue2];
    return isValidInput1==="valid" && isValidInput2==="valid";
}

function resetForm(inputText) {
    inputText.forEach(text => text.value="");
}

function addNewProject(project,technology) {

    const projectValue = project.value.trim();
    const technologyValue = technology.value.trim().split(",").map(tech => tech.trim()).filter(tech => tech !=="");

    const newProject = document.createElement("div");
    newProject.classList.add("imageProjectContainer");
    const nameProject = document.createElement("h4");
    nameProject.textContent=`${projectValue}`;
    newProject.appendChild(nameProject)

    const listTech = document.createElement("ul");
    listTech.classList.add("technologyUse");
    technologyValue.forEach(tech => {
        const newTech = document.createElement("li");
        newTech.textContent=`${tech}`;
        listTech.appendChild(newTech);
    })
    newProject.appendChild(listTech);

    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("imageDeleteContainer");
    newProject.appendChild(buttonDelete);
    buttonDelete.addEventListener("click", () => {
        deleteProject(buttonDelete,"imageProjectContainer")
    })

    mainProjectConteiner.appendChild(newProject);
    checkAmountProjectCard();

    // const carouselTrackProject = newProject.cloneNode(true);
    // carouselTrack.appendChild(carouselTrackProject);
}

function addNewProjectCarousel(project,technology) {

    const projectCarouselValue = project.value.trim();
    const technologyCarouselValue = technology.value.trim().split(",").map(tech => tech.trim()).filter(tech => tech !=="");

    const newCarouselProject = document.createElement("div");
    newCarouselProject.classList.add("imageProjectCarousel");
    const nameCarouselProject = document.createElement("h4");
    nameCarouselProject.textContent=`${projectCarouselValue}`;
    newCarouselProject.appendChild(nameCarouselProject)

    const listTech = document.createElement("ul");
    listTech.classList.add("technologyUse");
    technologyCarouselValue.forEach(tech => {
        const newTech = document.createElement("li");
        newTech.textContent=`${tech}`;
        listTech.appendChild(newTech);
    })
    newCarouselProject.appendChild(listTech);

    carouselTrack.appendChild(newCarouselProject);
}

buttonAddProjectModal.addEventListener("click", () => {
    validateNameInput(inputProjectName, errorMinProjectName, errorMaxProjectName, 4, 30, "inputProject");
    validateTechInput(inputTechnology, errorNoneTech, "inputTech");
    const isValidateInput = checkValidFormModal(inputProjectName,"inputProject",inputTechnology,"inputTech");
    if (isValidateInput) {
        addNewProject(inputProjectName,inputTechnology);
        resetForm(inputsModal);
        closeModalView();
    }
});

// ICON TRASH BUTTON AND DELETE PROJECT

const carouselTrack = document.getElementById("carouselTrack");
const mainProjectConteiner = document.getElementById("mainProjectConteiner");
const projectContainer = document.querySelectorAll(".imageProjectContainer");
const buttonDeleteProject = document.querySelectorAll(".imageDeleteContainer");
const noProjectMessage = document.getElementById("noProjectsMessageContainer");

function deleteProject (buttonDelete,classValue) {
        const singleProject = buttonDelete.closest(`.${classValue}`);
        if (singleProject) {
        singleProject.remove();
        }
        checkAmountProjectCard()
    }


buttonDeleteProject.forEach(buttonDelete => buttonDelete.addEventListener("click", () => {
    const singleProject = buttonDelete.closest(".imageProjectContainer");
    if (singleProject) {
        singleProject.remove();
    } 
}))

// FORM CONTACT ME

const inputNameMobile = document.getElementById("inputNameMobile");
const errorMinNameMobile = document.getElementById("errorMinNameMobile");
const errorMaxNameMobile = document.getElementById("errorMaxNameMobile");
const inputEmailMobile = document.getElementById("inputEmailMobile");
const errorEmailMobile = document.getElementById("errorEmailMobile"); 
const inputMessageMobile = document.getElementById("inputMessageMobile");
const errorMinMessageMobile = document.getElementById("errorMinMessageMobile");
const errorMaxMessageMobile = document.getElementById("errorMaxMessageMobile");

const inputName = document.getElementById("inputName");
const errorMinName = document.getElementById("errorMinName");
const errorMaxName = document.getElementById("errorMaxName");
const inputEmail = document.getElementById("inputEmail");
const errorEmail = document.getElementById("errorEmail");
const inputMessage = document.getElementById("inputMessage");
const errorMinMessage = document.getElementById("errorMinMessage");
const errorMaxMessage = document.getElementById("errorMaxMessage");

const buttonsSendMessage = document.querySelectorAll('[data-button="sendMessage"]');
const mainMessageContainer = document.getElementById("mainMessageContainer");

function validateInputEmail (email,errorMessage,dataValue) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidInput = emailRegex.test(email.value.trim());

    email.classList.toggle("validInputLine",isValidInput);
    email.classList.toggle("errorInputLine",!isValidInput);
    errorMessage.classList.toggle("hiddenElement",isValidInput);
    email.dataset[dataValue]=isValidInput ? "valid" : "error";
}

function sameValueInput(inpuText1,inpuText2) {
    inpuText1.value=inpuText2.value;
}

// SYNC AND VALID CONTACT FORM NAME, EMAIL AND MESSAGE

inputNameMobile.addEventListener("input", () => {
    sameValueInput(inputName,inputNameMobile);
    validateNameInput(inputNameMobile, errorMinNameMobile, errorMaxNameMobile, 4, 20, "inputNameMobile");
});
inputName.addEventListener("input", () => {
    sameValueInput(inputNameMobile,inputName);
    validateNameInput(inputName, errorMinName, errorMaxName, 4, 20, "inputName");
});

inputEmailMobile.addEventListener("input", () => {
    sameValueInput(inputEmail,inputEmailMobile);
    validateInputEmail (inputEmailMobile,errorEmailMobile,"inputEmailMobile");
});
inputEmail.addEventListener("input", () => {
    sameValueInput(inputEmailMobile,inputEmail);
    validateInputEmail (inputEmail,errorEmail,"inputEmail");
});

inputMessageMobile.addEventListener("input", () => {
    sameValueInput(inputMessage,inputMessageMobile);
    validateNameInput(inputMessageMobile, errorMinMessageMobile, errorMaxMessageMobile, 1, 100, "inputMessageMobile");
});
inputMessage.addEventListener("input", () => {
    sameValueInput(inputMessageMobile,inputMessage);
    validateNameInput(inputMessage, errorMinMessage, errorMaxMessage, 1, 100, "inputMessage");
});

function checkValidFormContact (inpuText1,dataValue1,inputText2,dataValue2,inputText3,dataValue3) {
    const isValidInput1 = inpuText1.dataset[dataValue1];
    const isValidInput2 = inputText2.dataset[dataValue2];
    const isValidInput3 = inputText3.dataset[dataValue3];
    return isValidInput1==="valid" && isValidInput2==="valid" && isValidInput3==="valid" ;
}

function validateMobilieDesktopForm() {
    validateNameInput(inputName, errorMinName, errorMaxName, 4, 20, "inputName");
    validateInputEmail (inputEmail,errorEmail,"inputEmail");
    validateNameInput(inputMessage, errorMinMessage, errorMaxMessage, 1, 100, "inputMessage");
    validateNameInput(inputNameMobile, errorMinNameMobile, errorMaxNameMobile, 4, 20, "inputNameMobile");
    validateInputEmail (inputEmailMobile,errorEmailMobile,"inputEmailMobile");
    validateNameInput(inputMessageMobile, errorMinMessageMobile, errorMaxMessageMobile, 1, 100, "inputMessageMobile");
}

function createMessage(name,email,message) {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    const messageContainer = document.createElement("div");

    const nameElement = document.createElement("p");
    nameElement.textContent=`Name: ${nameValue}`;
    nameElement.classList.add("primaryStyleText");
    messageContainer.appendChild(nameElement);

    const emailElement = document.createElement("p");
    emailElement.textContent=`Email: ${emailValue}`;
    emailElement.classList.add("primaryStyleText");
    messageContainer.appendChild(emailElement);

    const messageElement = document.createElement("p");
    messageElement.textContent=`Message: ${messageValue}`;
    messageElement.classList.add("primaryStyleText");
    messageContainer.appendChild(messageElement);

    mainMessageContainer.appendChild(messageContainer);
}

function addNewMessage () {
    validateMobilieDesktopForm()
    const isValidateInput = checkValidFormContact (inputName,"inputName",inputEmail,"inputEmail",inputMessage,"inputMessage");
    if (isValidateInput) {
        createMessage(inputName,inputEmail,inputMessage);
        resetForm(inputsContact);
    }
}

buttonsSendMessage.forEach(buttonSend => buttonSend.addEventListener("click", () => {
    addNewMessage ()
}))

// CREATE PROJECT CARDS FROM JAVASCRIPT DATA

const cardsProjects = [
    {project: "Calculator", technology:"HTML"},
    {project: "Non-governmental organization", technology:"HTML,CSS"},
    {project: "Calculator program", technology:"Java Script"},
    {project: "Calculator", technology:"HTML"},
    {project: "Non-governmental organization", technology:"HTML,CSS"}
]

cardsProjects.forEach(card => {
    addNewProject({value: card.project},{value: card.technology}),
    addNewProjectCarousel({value: card.project},{value: card.technology})
})

// CREATE TECH SKILLS FROM JAVASCRIPT DATA

const mainSkillContainer = document.getElementById("mainSkillContainer");

function createCircleExpContainer (num) {

    const circleContainer = document.createElement("div");
    circleContainer.classList.add(
        "displayFlex",
        "gapBetweenCircles"
    )
    

    if ( num > 5) num = 5;

    for (let i = 0; i < num; i++) {
        const circleFull = document.createElement("img");
        circleFull.src="./images/CircleAndDisc/full circle.svg";
        circleFull.classList.add("dotExperienceDismension");
        circleContainer.appendChild(circleFull);
    }

    for (let i = 0; i < 5 - num; i++) {
        const circleEmpty = document.createElement("img");
        circleEmpty.src="./images/CircleAndDisc/empty circle.svg";
        circleEmpty.classList.add("dotExperienceDismension");
        circleContainer.appendChild(circleEmpty);
    }

    return circleContainer;
}



function createTechSkill (skill,num) {
    const skillContainer = document.createElement("div");
    skillContainer.classList.add(
        "displayFlex",
        "gapInsideLogoSkill",
        "logoSkillContainer");

    const skillImgContainer = document.createElement("div");
    skillImgContainer.classList.add("dimensionSkillLogo");

    const imageSkill = document.createElement("img");
    imageSkill.src = `./images/MySkills/${skill}.svg`;
    imageSkill.alt = `logo ${skill}`;
    
    skillImgContainer.appendChild(imageSkill);
    skillContainer.appendChild(skillImgContainer); 
    


    const skillExperienceContainer = document.createElement("div");
    skillExperienceContainer.classList.add(
        "flexStyleColumn",
        "justifyContentSpaceBetween");
    
    const nameSkill = document.createElement("p");
    nameSkill.textContent=`${skill}`;
    skillExperienceContainer.appendChild(nameSkill);

    const circleExpContainer = document.createElement("div");
   
    skillContainer.appendChild(skillExperienceContainer);
    circleExpContainer.appendChild(createCircleExpContainer(num));
    skillExperienceContainer.appendChild(circleExpContainer);

    const yearOfExperience = document.createElement("p");
    yearOfExperience.classList.add("yearsOfExperience");
    yearOfExperience.textContent = num === 1 ? `${num} year` : `${num} years`;
    skillExperienceContainer.appendChild(yearOfExperience);

    mainSkillContainer.appendChild(skillContainer);
}

const techSkill = [
   {skill: "HTML",experience:1},
   {skill: "CSS",experience:1},
   {skill: "Java Script",experience:1},
   {skill: "Git",experience:1},
   {skill: "Figma",experience:1},
   {skill: "Chrome",experience:2},
   {skill: "VSCode",experience:2},
   {skill: "GitHub",experience:1}
]

techSkill.forEach(tech => {
    createTechSkill(tech.skill,tech.experience);
})

// NAVIGATION BUTTON CAROUSEL

const imageProjectCarouselList = document.querySelectorAll(".imageProjectCarousel");

const iconLeftButton = document.getElementById("iconLeftButton");
const iconRightButton = document.getElementById("iconRightButton");
const iconDownButton = document.getElementById("iconDownButton");
const iconUpButton = document.getElementById("iconUpButton");

// CHECK AMOUNT OF PROJECT CARD

function checkAmountProjectCard() {

    const projectCard = document.querySelectorAll(".imageProjectContainer");
    const noProjectsMessageContainer = document.getElementById("noProjectsMessageContainer");
    const navButtonsDesktop = document.getElementById("navButtonsDesktop");
    const navButtonsMobile = document.getElementById("navButtonsMobile");

    if(projectCard.length > 3) {
        navButtonsMobile.classList.remove("hiddenElement");
        navButtonsDesktop.classList.remove("hiddenElement");
    } else {
        navButtonsMobile.classList.add("hiddenElement");
        navButtonsDesktop.classList.add("hiddenElement");
    }

    if (projectCard.length === 0) {
        noProjectsMessageContainer.classList.remove("hiddenElement");
    } else {
        noProjectsMessageContainer.classList.add("hiddenElement");
    }

}
