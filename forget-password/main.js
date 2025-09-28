// OTP Inputs to auto-move Next Input
const otpInputs = document.querySelectorAll('.otp-inp');

otpInputs.forEach((input, index) => {
    input.addEventListener('input', (event) => {
        let numericInput = input.value.replace(/\D/g, '');
        input.value = numericInput;

        if (numericInput.length === 1 && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
    });
    
    input.addEventListener('keydown', (e) => {
        if (e.key === "Backspace" && index > 0 && input.value === '') {
            otpInputs[index - 1].focus();
        }
    });
});
// Show/Hide Password
const inputPassOne = document.getElementById('password');
const btnShowPassOne = document.getElementById('showNewPass');
btnShowPassOne.addEventListener('click', function(e) {
    e.preventDefault();
    if (inputPassOne.type === 'password') {
        inputPassOne.type = 'text';
        btnShowPassOne.textContent = 'Hide';
    } else {
        inputPassOne.type = 'password';
        btnShowPassOne.textContent = 'Show';
    }
});

const inputPassTwo = document.getElementById('confirmPassword');
const btnShowPassTwo = document.getElementById('showConfirmPass');
btnShowPassTwo.addEventListener('click', function(e) {
    e.preventDefault();
    if (inputPassTwo.type === 'password') {
        inputPassTwo.type = 'text';
        btnShowPassTwo.textContent = 'Hide';
    } else {
        inputPassTwo.type = 'password';
        btnShowPassTwo.textContent = 'Show';
    }
});


// Delete the Following (Display Boxes)
let btnTestForget = document.getElementById("testBtnForget")
let btnTestOtp = document.getElementById("testBtnOtp")
let btnTestSetPass = document.getElementById("testBtnSetPass")

let forgetPassBox = document.querySelector(".forget-pass")
let otpBox = document.querySelector(".otp-box")
let setNewPassBox = document.querySelector(".set-new-pass")
let successBox = document.querySelector(" .password-reset-success")

let arrBoxes = [forgetPassBox, otpBox, setNewPassBox, successBox]
function removeActClassFromBox() {
    arrBoxes.forEach(function(box) {
        box.classList.remove('act');
    });
}
btnTestForget.addEventListener("click", function(e){
    e.preventDefault()
    removeActClassFromBox()
    otpBox.classList.add("act")
})
btnTestOtp.addEventListener("click", function(e){
    e.preventDefault()
    removeActClassFromBox()
    setNewPassBox.classList.add("act")
})
btnTestSetPass.addEventListener("click", function(e){
    e.preventDefault()
    removeActClassFromBox()
    successBox.classList.add("act")
})