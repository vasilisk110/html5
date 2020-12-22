import './js/card.js';
import './js/getJson.js';
import './js/order.js';
import './js/pizza.js';
import './js/script.js';
import './js/sendData.js';
import './js/service.js';

document.addEventListener('DOMContentLoaded', function () {
    let sidenav = document.querySelectorAll('.sidenav');
    // eslint-disable-next-line no-undef
    M.Sidenav.init(sidenav, { edge: 'left', draggable: true });
    let slider = document.querySelectorAll('.slider');
    // eslint-disable-next-line no-undef
    M.Slider.init(slider, {
        height: 400,
        indicators: false,
        interval: 4000,
    });
    let MBox = document.querySelectorAll('.materialboxed');
    // eslint-disable-next-line no-undef
    M.Materialbox.init(MBox);
    let parallax = document.querySelectorAll('.parallax');
    // eslint-disable-next-line no-undef
    M.Parallax.init(parallax);
});

function load() {
    let urlToCheck = window.location.href;
    if (urlToCheck.indexOf('?') === -1) {
        window.location.href += '?#';
    }
}

document.getElementsByTagName('body')[0].addEventListener('load', load);