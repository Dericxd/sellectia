const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // automatically display images
    autoplay: {
        delay: 5000,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

});

/* para mostrar la alerta del formulario */
document.querySelector('.boton-enviar').addEventListener('click', function () {
    /* alert('¡Hola! Has hecho clic en el botón.'); */
    Swal.fire({
        title: "Enviado",
        text: "Gracias por contactarnos",
        icon: "success"
    });
    setTimeout(() => {
        history.scrollRestoration = "manual";
        location.reload();
    }, 1500);
});

/* iniciar la animacion */
AOS.init();
