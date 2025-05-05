// SHOW AND HIDE MOBILE MENU

const normalMenuMobile = document.getElementById("normalMenuMobile");
const goldMenuMobile = document.getElementById("goldMenuMobile");
const menuListMobile = document.getElementById("menuListMobile");

function showHideMobileMenu () {
    menuListMobile.classList.toggle("menuActiveElement");
    normalMenuMobile.classList.toggle("menuActiveElement");
    goldMenuMobile.classList.toggle('menuActiveElement');
}

normalMenuMobile.addEventListener("click", showHideMobileMenu )

goldMenuMobile.addEventListener("click", showHideMobileMenu )




