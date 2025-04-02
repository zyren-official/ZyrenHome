let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const typed = new Typed('.multiple-text', {
    strings: ['Veb-dasturchi', 'UI/UX Dizayner', 'Blockchain Mutaxassisi'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
});
