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
const errorMinLetter = document.getElementById("errorMinLetter");
const errorMaxLetter = document.getElementById("errorMaxLetter");
const errorNoneTech = document.getElementById("errorNoneTech");

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

inputProjectName.addEventListener("input", () => {validateNameInput(inputProjectName,errorMinLetter,errorMaxLetter,4,30,"inputProject")});
inputTechnology.addEventListener("input", () => {validateTechInput(inputTechnology,errorNoneTech,"inputTech")});

function addNewProject (inpuText1,dataValue1,inputText2,dataValue2) {
    const isValidInput1 = inpuText1.dataset[dataValue1];
    const isValidInput2 = inputText2.dataset[dataValue2];
    return isValidInput1==="valid" && isValidInput2==="valid";
}

buttonAddProjectModal.addEventListener("click", () => {
    const isValidateInput = addNewProject(inputProjectName,"inputProject",inputTechnology,"inputTech");
    if (isValidateInput) {
        closeModalView();
    }
});

// FORM CONTACT ME