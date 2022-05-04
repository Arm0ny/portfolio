var hamburger = document.getElementById('hamburger');
var navbar = document.querySelector('nav');
var nav_ul = navbar.children[1];
var arrow = navbar.children[2];

if (window.matchMedia('(max-width: 1060px)')) {
    hamburger.onclick = function () {
        hamburger.style.display= 'none';
        navbar.classList.remove('navbar')
        navbar.classList.add('nav-responsive');
        navbar.children[0].classList.add('nav-logo-responsive');
        navbar.children[1].classList.add('nav-ul-responsive');
        arrow.style.display = 'block';
    }

    arrow.onclick = function(){
        navbar.classList.remove('nav-responsive');
        navbar.classList.add('navbar');
        navbar.children[0].classList.remove('nav-logo-responsive');
        navbar.children[1].classList.remove('nav-ul-responsive');
        arrow.style.display = 'none';
        hamburger.style.display= 'block';
    }
}

