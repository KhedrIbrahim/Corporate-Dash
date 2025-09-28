// Get Elements
let boxShadow = document.querySelector(".bx-shadow")

// * * * * Aside Bar (Nav Bar) * * * *
let openCloseBtn = document.getElementById("op-cl-btn")
let navBar = document.getElementById("navBar")
let mainSection = document.getElementById("main")
let btnHeaderMenu = document.getElementById("btnHeaderMenu")
if (localStorage.getItem('navbarClosed') === 'true') {
    navBar.classList.add('closed');
  }

openCloseBtn.addEventListener("click", function () {
    mainSection.classList.toggle("open");
    navBar.classList.toggle("closed");
    navBar.classList.remove("open-mob");
    const isClosed = navBar.classList.contains('closed');
    localStorage.setItem('navbarClosed', isClosed);
});
btnHeaderMenu.addEventListener("click", function () {
    navBar.classList.add("open-mob");
});

// Header
let btnHeaderUserOpClose = document.getElementById("btnHeaderUserOpClose");
let boxHeaderUserOptions = document.getElementById("boxHeaderUserOptions");
btnHeaderUserOpClose.addEventListener("click", function () {
    boxHeaderUserOptions.classList.toggle("act")
})

// Profile Popup
let popUpCorporateProfile = document.getElementById("popUpCorporateProfile");
let btnHeaderUserProfile = document.getElementById("btnHeaderUserProfile");

btnHeaderUserProfile.addEventListener("click", function () {
    boxHeaderUserOptions.classList.remove("act")
    popUpCorporateProfile.classList.add("act")
    boxShadow.classList.add("act");
})

// Clos Btn PopUp
const closeButtons = document.querySelectorAll('.clos-ele');
closeButtons.forEach(button => {
    button.addEventListener('click', function () {
        const parentId = this.getAttribute('parent-data');
        const parentElement = document.getElementById(parentId);
        if (parentElement) {
            parentElement.classList.remove('act');
            boxShadow.classList.remove("act");
        }
    });
})
// Delete PopUps
const btnOpDeletePopup = document.querySelectorAll('.btnOpDeletePopup');
btnOpDeletePopup.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const parentId = this.getAttribute('open-el-id');
        const parentElement = document.getElementById(parentId);
        if (parentElement) {
            parentElement.classList.add('act');
            boxShadow.classList.add("act");
        }
    });
})
// Show/Hide Passwords
const btnsShowHidePass = document.querySelectorAll('.btn-show-hid');
btnsShowHidePass.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const parentId = this.getAttribute('show-inp-data');
        const inputEl = document.getElementById(parentId);
        if (inputEl) {
            if (inputEl.type === 'password') {
                inputEl.type = 'text';
                button.textContent = 'Hide';
            } else {
                inputEl.type = 'password';
                button.textContent = 'Show';
            }
        }
    });
})
// Sections Header Options (Search Bar, Btns...for Mobile)
const btnOpenOptions = document.querySelectorAll('.btnOpenOptions');
btnOpenOptions.forEach(button => {
    button.addEventListener('click', function () {
        const eleId = this.getAttribute('open-ele-id');
        const Element = document.getElementById(eleId);
        if (Element) {
            Element.classList.toggle('show');
        }
    });
})

// Allow Only Numbers
const InputsTypNum = document.querySelectorAll(".number-inp")
InputsTypNum.forEach(input => {
    input.addEventListener('input', (e) => {
        checkInputValType(e);
    });
});
function checkInputValType(event){
    let input = event.target.value;
    let numericInput = input.replace(/\D/g, '');
    event.target.value = numericInput;
}

// Back Btns
const btnBack = document.querySelectorAll('.btnBack');
btnBack.forEach(button => {
    button.addEventListener('click', function () {
        const currentEleId = this.getAttribute('current-el');
        const eleIdToActive = this.getAttribute('ele-to-back');
        const curentElement = document.getElementById(currentEleId);
        const elementToActive = document.getElementById(eleIdToActive);
        if (curentElement) {
            curentElement.classList.remove("act")
            elementToActive.classList.add("act")
        }
    });
})
// Cancel PopUps
const cancelBtn = document.querySelectorAll('.cancelBtn');
cancelBtn.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const popUpId = this.getAttribute('open-pop-id');
        const popUpElement = document.getElementById(popUpId);
        if (popUpElement) {
            popUpElement.classList.add('act');
            boxShadow.classList.add("act");
        }
    });
})