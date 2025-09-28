// Custome Select Country Code Ex: +971
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

// Swiper Slides (IMG Box)
const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    effect: 'fade',
    speed: 300,
    mousewheel: {
        invert: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
});

// Allow Only Numbers
let inputPhoneNum = document.getElementById("phone")
inputPhoneNum.addEventListener("input", function(e){
    checkInputValType(e);
})
function checkInputValType(event){
    let input = event.target.value;
    let numericInput = input.replace(/\D/g, '');
    event.target.value = numericInput;
}
