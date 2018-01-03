// Article-box effect

var arr = document.querySelectorAll('.article-box');
for (var i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('active');
    })
}

// Slider

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.querySelectorAll(".main-slider-slide");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.opacity = "0";
    }
    x[slideIndex - 1].style.opacity = "1";
}

// Autoamtic slide-show (jeszcze nie działa)
/*
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.querySelectorAll(".main-slider-slide");
    for (i = 0; i < x.length; i++) {
        x[i].style.opacity = "0";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[slideIndex - 1].style.opacity = "1";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
*/