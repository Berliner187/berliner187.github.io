
const media = document.querySelectorAll('img');

document.body.classList.add('preloader--hide');

setTimeout(() => {
    preloader.classList.add('preloader--hide');
    document.body.classList.add('preloader--on');
}, 500)
