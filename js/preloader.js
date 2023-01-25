
window.onload = function loader () {
    let preloader = document.getElementById('preloader');
    let content = document.getElementById("content");
    let hide = document.getElementById("hide");
    let contacts = document.getElementById("contacts");

    content.style.opacity = '0';
    // hide.style.opacity = '0';
    contacts.style.opacity = '0';
    // content.style.display = 'none';

    document.body.style.overflow = 'hidden';

    setInterval(function() {
        preloader.classList.add('hide-preloader');
        document.body.style.overflow = 'visible';
    }, 200);

    setInterval(function() {
        preloader.classList.add('preloader-hidden');
        content.classList.add('startBlock');
        content.style.opacity = '1';
        // content.style.display = 'block';
        // hide.classList.add('startBlock');
        // hide.style.opacity = '1';
        contacts.style.opacity = '1';
    }, 1000);
}
