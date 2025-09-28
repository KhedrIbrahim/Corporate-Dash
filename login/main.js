// Show/Hide Password
const passwordField = document.getElementById('password');
const showPassBtn = document.getElementById('show-pass');

showPassBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        showPassBtn.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        showPassBtn.textContent = 'Show';
    }
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