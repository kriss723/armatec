$(document).ready(() => {

    var fixedHeader = $('#fixedHeader');

    $(window).on('scroll', () =>{

        

        let proyectosOffSetTop = $('#proyectos').offset().top;
        /*me calcula la distancia del objeto a la parte superior*/

        if ($(window).scrollTop() >= proyectosOffSetTop) {
            console.log('verdad');
            fixedHeader.css('margin-top',0); //vuelva aparecer
        }else if($(window).scrollTop() <= (proyectosOffSetTop/2)){
            fixedHeader.css('margin-top','-80px')
        }
    });


})