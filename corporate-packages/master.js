// Open Payment
const btnOpenPayment = document.querySelectorAll('.btnOpenPayment');
const boxInfoPackages = document.getElementById('boxInfoPackages');
btnOpenPayment.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('open-ele-id');
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.classList.add('act');
            boxInfoPackages.classList.remove('act');
        }
    });
})


// click On Payment Type
const payType = document.querySelectorAll('.payType');
payType.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        console.log("test")
        const showId = this.getAttribute('show-pay-data');
        const showElement = document.getElementById(showId);
        const closeId = this.getAttribute('clos-pay-data');
        const closeElement = document.getElementById(closeId);
        if (closeElement) {
            showElement.classList.add('show');
            closeElement.classList.remove('show');
            payType.forEach(btn => btn.classList.remove("checked"));
            button.classList.add("checked")
        }
    });
})

// Input Card Number
const cardNumberInput = document.getElementById('cardNumber');

cardNumberInput.addEventListener('input', function (e) {
    let input = e.target.value.replace(/\D/g, '');
    let formattedInput = '';
    for (let i = 0; i < input.length; i += 4) {
        formattedInput += input.substring(i, i + 4) + ' ';
    }
    e.target.value = formattedInput.trim();
});

cardNumberInput.addEventListener('keydown', function (e) {
    const key = e.key;
    const value = e.target.value;
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'];
    if (!/[0-9]/.test(key) && !allowedKeys.includes(key)) {
        e.preventDefault();
    }
    if (value.replace(/\s/g, '').length >= 16 && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'].includes(key)) {
        e.preventDefault();
    }
});

// Input Card Expire Date
const expiryDateInput = document.getElementById('expiryDate');

expiryDateInput.addEventListener('input', function (e) {
    let input = e.target.value.replace(/\D/g, '');
    if (input.length >= 2) {
        input = input.substring(0, 2) + '/' + input.substring(2, 4);
    }
    e.target.value = input.slice(0, 5);
});

expiryDateInput.addEventListener('keydown', function (e) {
    const key = e.key;
    const value = e.target.value;
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'];
    if (!/[0-9]/.test(key) && !allowedKeys.includes(key)) {
        e.preventDefault();
    }

    if (key === 'Backspace' && value.length === 3) {
        e.target.value = value.slice(0, 2);
        e.preventDefault();
    }
});

// Open PopUp add Card
const btnAddCardDetails = document.getElementById("btnAddCardDetails");
let popUpAddCardDetails = document.getElementById("popUpAddCardDetails")
btnAddCardDetails.addEventListener("click", function (e) {
    e.preventDefault();
    popUpAddCardDetails.classList.add("act")
    boxShadow.classList.add("act");
});
// Open PopUp add Bank Account
const btnAddBankDetails = document.getElementById("btnAddBankDetails");
let popUpAddBankDetails = document.getElementById("popUpAddBankDetails")
btnAddBankDetails.addEventListener("click", function (e) {
    e.preventDefault();
    popUpAddBankDetails.classList.add("act")
    boxShadow.classList.add("act");
});
