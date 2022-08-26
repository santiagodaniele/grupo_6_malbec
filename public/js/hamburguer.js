window.onload = function () {
    document.getElementById("menu-bar").addEventListener('click', modificarMenu);

    var discriminador = true;

    window.addEventListener('scroll', ocultarMenu);

    function modificarMenu() {
        if (discriminador) {
            document.querySelector('nav').style.left = '-0px';
            discriminador = false
        }
        else {
            document.querySelector('nav').style.left = '-140px';
            discriminador = true;
        }

    }
    function ocultarMenu() {
        if (window.innerWidth <= 768) {
            document.querySelector('nav').style.left = '-140px';
            discriminador = true;
        }

    }


}