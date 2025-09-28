// **************************** Vehicle Information
// Btns DropDown (Download + Upload)
let btnDropdownCorFlee = document.getElementById("btnDropdownCorFlee");
let dropdownBtnsCorFlee = document.getElementById("dropdownBtnsCorFlee");
btnDropdownCorFlee.addEventListener("click", function () {
    dropdownBtnsCorFlee.classList.toggle("act")
})
// Open PopUp Add New Vehicle
const btnAddNewVehicle = document.getElementById('btnAddNewVehicle');
let popUpAddNewVehicle = document.getElementById("popUpAddNewVehicle")
btnAddNewVehicle.addEventListener("click", function () {
    popUpAddNewVehicle.classList.add("act")
    boxShadow.classList.add("act");
});
// Open History Vehicle
let boxFleetDetails = document.getElementById("boxFleetDetails")
let boxHistoryVehicle = document.getElementById("boxHistoryVehicle")
const btnHistoryVehicle = document.querySelectorAll('.btnHistoryVehicle');

btnHistoryVehicle.forEach(button => {
    button.addEventListener('click', function () {
        boxFleetDetails.classList.remove("act");
        boxHistoryVehicle.classList.add("act");
    });
});

// Open PopUp Upload Files
const btnuploadVeicleFiles = document.getElementById('btnuploadVeicleFiles');
let popupUploadVeicleFiles = document.getElementById("popupUploadVeicleFiles")
btnuploadVeicleFiles.addEventListener("click", function () {
    popupUploadVeicleFiles.classList.add("act")
    boxShadow.classList.add("act");
});
// Open PopUp Corporate Driver Password
const btnVehiclePassowrd = document.querySelectorAll('.btnCorpDriverPass');
let popUpResetVehiclePass = document.getElementById("popUpCorpDriverPass")
btnVehiclePassowrd.forEach(button => {
    button.addEventListener('click', function () {
        popUpResetVehiclePass.classList.add("act")
        boxShadow.classList.add("act");
    });
});
// Open PopUp QR Code
const btnQrCodeVehivle = document.querySelectorAll('.btnQrCodeVehivle');
let popUpQrCodeVehivle = document.getElementById("popUpQrCodeVehivle")
btnQrCodeVehivle.forEach(button => {
    button.addEventListener('click', function () {
        popUpQrCodeVehivle.classList.add("act")
        boxShadow.classList.add("act");
    });
});
// Open PopUp Edit Corporate Vehicle
const btnEditVehiclet = document.querySelectorAll('.btnEditVehiclet');
let popUpEditVehicle = document.getElementById("popUpEditVehicle")
btnEditVehiclet.forEach(button => {
    button.addEventListener('click', function () {
        popUpEditVehicle.classList.add("act")
        boxShadow.classList.add("act");
    });
});