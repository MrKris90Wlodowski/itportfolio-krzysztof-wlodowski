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

activeNavListElement.forEach(element => {
    element.addEventListener("click", () => {
    activeNavListElement.forEach(navList => navList.classList.remove("activeListElement"));
    const targetList = element.dataset.target;
    const similarNavList = document.querySelectorAll(`[data-target="${targetList}"]`);
    similarNavList.forEach(navList => navList.classList.add("activeListElement"));

    const logoHeader = document.querySelectorAll("[data-section-header]");
    logoHeader.forEach(logo => { 
    logo.classList.add("hiddenElement");
    if ( logo.dataset.sectionHeader === targetList) {
        logo.classList.remove("hiddenElement")
    }})
    
    const mainSections = document.querySelectorAll("[data-section]");
    mainSections.forEach(section => {
    section.classList.add("hiddenElement");
    if (section.dataset.section === targetList) {
        section.classList.remove("hiddenElement")
    }})
})
})



