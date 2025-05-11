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

buttonAddProjectModal.addEventListener("click", () => {
    validateNameInput(inputProjectName, errorMinProjectName, errorMaxProjectName, 4, 30, "inputProject");
    validateTechInput(inputTechnology, errorNoneTech, "inputTech");
    const isValidateInput = checkValidFormModal(inputProjectName,"inputProject",inputTechnology,"inputTech");
    if (isValidateInput) {
        resetForm(inputsModal);
        // closeModalView();
    }
});

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



