const NAV = document.querySelector('#nav');
const NAV_TOGGLE = document.querySelector('#nav-toggle');
const NAV_LINKS = document.querySelectorAll('.nav-link');

NAV_TOGGLE.addEventListener('click', () => {
    if (!NAV.classList.contains('open')) {
        NAV.classList.add('open');
        NAV_TOGGLE.setAttribute('aria-expanded', 'true');
    }
    else {
        NAV.classList.remove('open');
        NAV_TOGGLE.setAttribute('aria-expanded', 'false');
    }
});