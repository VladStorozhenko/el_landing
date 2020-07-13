// * sticky header

$(document).ready(function() {
    let header = $('#site-header');
    let pageScroll = $(window).scrollTop();
    if(pageScroll <= 100)
    {
        header.addClass('page-land-header');
    } else
    {
        header.addClass('page-header-fixed');
    }
    $(window).scroll(function(){
        let header = $('#site-header');
        let pageScroll = $(window).scrollTop();
        if(pageScroll > 100)
        {
            header.removeClass('page-land-header');
            header.addClass('page-header-fixed');
        } else 
        {
            header.removeClass('page-header-fixed');
            header.addClass('page-land-header');
        }
    });
})

// adding input masks for form
$(document).ready(function(){
    $('.reg-phone').inputmask("999-999-99-99");
});


// carousel
$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        prevArrow: $('.slider-prev-button'),
        nextArrow: $('.slider-next-button'),
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        easing: 'swing',
        pauseOnDotsHover: true,
        speed: 1000    
    });
  });

// global vars 
var body = document.getElementsByTagName('body')[0];
// register form
var registerFormModal = document.getElementById('register-form-modal');
var formButton_1 = document.getElementById('form-button_1');
var formButton_2 = document.getElementById('form-button_2');
var formButton_3 = document.getElementById('form-button_3');
var registerForm = document.getElementById('google-form')
formButton_1.addEventListener('click', showRegisterForm);
formButton_2.addEventListener('click', showRegisterForm);
formButton_3.addEventListener('click', showRegisterForm);

function showRegisterForm() {
    registerFormModal.style.display = 'flex';
    body.style.overflow = "hidden"
    let header = $('#site-header');
    header.css("opacity", "0");
}

var formCloseButton = document.getElementById('register-form-close');
formCloseButton.addEventListener('click', closeRegisterForm);

function closeRegisterForm() {
    registerFormModal.style.display = 'none';
    body.style.overflow = "auto"
    body.style.position = "static"
    let header = $('#site-header');
    header.css("opacity", "1");
}

window.onclick = function(event) {
    if (event.target == registerFormModal) {
        registerFormModal.style.display = "none";
        body.style.overflow = "auto";
        body.style.position = "static"
        let header = $('#site-header');
        header.css("opacity", "1");
        header.css("display", "flex");
    }
}

// for closing with ESC key

$(document).keydown(function(e) {
    var code = e.keyCode || e.which;
    if (code == 27) 
    {
        let header = $('#site-header');
        header.css("display", "flex");
        header.css("opacity", "1");
        registerFormModal.style.display = "none";
        body.style.overflow = "auto"
        body.style.position = "static"
    }
});

// ask form

var askFormButton = document.getElementById('ask-form-button');
var askFormModal = document.getElementById('ask-form-modal');
var askFormCloseButton = document.getElementsByClassName('ask-form-close-button')[0];

askFormButton.addEventListener('click', showAskForm);
askFormCloseButton.addEventListener('click', hideAskForm);

function showAskForm() {
    askFormModal.style.display = 'block';
    body.style.overflow = "hidden";
    let header = $('#site-header');
    header.addClass('page-land-header');
    header.css("display", "none");
}
function hideAskForm() {
    askFormModal.style.display = 'none';
    body.style.overflow = "auto";
    let header = $('#site-header');
    header.css("display", "flex");
    header.css("opacity", "1");
}

// for closing with ESC key

$(document).keydown(function(e) {
    var code = e.keyCode || e.which;
    if (code == 27) 
    {
        let header = $('#site-header');
        header.css("display", "flex");
        header.css("opacity", "1");
        askFormModal.style.display = 'none';
        body.style.overflow = "auto";
    }
});


// remaining question in register form

var remainingQuestionsButton = document.getElementById('register-form-question-button');

remainingQuestionsButton.addEventListener('click', hideRegisterShowAsk);

function hideRegisterShowAsk() {
    registerFormModal.style.display = 'none';
    askFormModal.style.display = 'block';
    body.style.overflow = "hidden";
    let header = $('#site-header');
    let pageScroll = $(window).scrollTop();
    header.addClass('page-land-header');
    if(pageScroll > 100)
    {
        header.css('display', 'none');
    }
}

// register form button in ask form

var getTripButton = document.getElementById('ask-form-get-trip');

getTripButton.addEventListener('click', hideAskFormShowRegisterForm);

function hideAskFormShowRegisterForm() {
    askFormModal.style.display = 'none';
    registerFormModal.style.display = 'flex';
    body.style.overflow = "hidden";
    header.css("display", "flex");
}