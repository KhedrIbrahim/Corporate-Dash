// **************************** Compnay Detalis
const btnEditCorProfile = document.querySelectorAll('.btnEditCorProfile');
function removeActClassCompEdit() {
    const sections = document.querySelectorAll('.ed-section');
    sections.forEach(section => {
        section.classList.remove('act');
    });
    btnEditCorProfile.forEach(btn => {
        btn.classList.remove('act');
    });
}
btnEditCorProfile.forEach(button => {
    button.addEventListener('click', function () {
        const elementOpenId = this.getAttribute('open-el-data');
        const sectionElement = document.getElementById(elementOpenId);
        if (sectionElement) {
            removeActClassCompEdit();
            sectionElement.classList.add('act');
            button.classList.add('act');
        }
    });
})

const btnEditCorDtls = document.querySelectorAll(".btnEditCorDtls")
const boxEditCompany = document.getElementById("boxEditCompany")
const boxInfoCompany = document.getElementById("boxInfoCompany")
btnEditCorDtls.forEach(button => {
    button.addEventListener('click', function () {
        const elementBtnId = this.getAttribute('edit-btn-type');
        const elementSectionId = this.getAttribute('edit-type');
        const btnElement = document.getElementById(elementBtnId);
        const sectionElement = document.getElementById(elementSectionId);
        if (sectionElement) {
            removeActClassCompEdit();
            boxInfoCompany.classList.remove("act")
            boxEditCompany.classList.add("act")
            btnElement.classList.add('act');
            sectionElement.classList.add('act');
        }
    });
})
// Open PopUp Upload Profile Picture
let btnUploadCompanyPicture = document.getElementById("btnUploadCompanyPicture")
let popupUploadCompanyPicture = document.getElementById("popupUploadCompanyPicture")
btnUploadCompanyPicture.addEventListener("click", function(){
    popupUploadCompanyPicture.classList.add("act")
    boxShadow.classList.add("act")
})
// Custome Select Country Code +971 (For Edit Phone Input)
document.addEventListener("DOMContentLoaded", function() {
    const selectedOption = document.querySelector('.selected-option');
    const optionsContainer = document.querySelector('.options-container');
    const options = document.querySelectorAll('.option');
    selectedOption.addEventListener('click', () => {
        optionsContainer.classList.toggle('active');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selectedOption.innerHTML = option.innerHTML;
            selectedOption.setAttribute('data-code', option.getAttribute('data-code'));
            optionsContainer.classList.remove('active');
        });
    });
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.custom-select')) {
            optionsContainer.classList.remove('active');
        }
    });
});
