$(document).ready(() => {
    /*mostrar y ocultar el boton volver arriba*/
    var volverArriba = $('#btnVolverArriba');

    $(window).on('scroll', () =>{

        let proyectosOffSetTop = $('#proyectos').offset().top;
        /*me calcula la distancia del objeto a la parte superior*/

        if ($(window).scrollTop() >= proyectosOffSetTop) {
            volverArriba.css('margin-right',0); //vuelva aparecer
        }else if($(window).scrollTop() <= (proyectosOffSetTop/2)){
            volverArriba.css('margin-right','-60px');
        }
    });

    /*mover el boton del whatsApp*/
    var whatsApp = $('#btnWhatsApp');

    $(window).on('scroll', () =>{

        let proyectosOffSetTop = $('#proyectos').offset().top;
        /*me calcula la distancia del objeto a la parte superior*/

        if ($(window).scrollTop() >= proyectosOffSetTop) {
            whatsApp.css('margin-right','-60px'); //se mueva
        }else if($(window).scrollTop() <= (proyectosOffSetTop/2)){
            whatsApp.css('margin-right','-100px');
        }
    });

    /*movimiento suave para vovel arriba secciones*/

    $('a.volver-arriba').on('click', (e)=> {
        e.preventDefault();
        if($(window).scrollTop != 0){
            $('html, body').animate({scrollTop:0}, 100);
        }
    })

    /*movimiento suave para las diferentes secciones*/

    $('a.scroll-suave').on('click', function (e) {
        e.preventDefault();
        var seccionOffsetTop = $($(this).attr('href')).offset().top + 10;
        $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 100);
    });

    $('a.scroll-acercaDe').on('click', function (e) {
        e.preventDefault();
        var seccionOffsetTop = $($(this).attr('href')).offset().top -116
        $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 100);
    });
    
    $('a.scroll-equipo').on('click', function (e) {
        e.preventDefault();
        var seccionOffsetTop = $($(this).attr('href')).offset().top - 90
        $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 100);
    });

});