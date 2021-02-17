$(document).ready(() => {

    //variables
    var banner = $('#banner');
    
    //funciones

    function alturaBanner(){
        var vpAltura = $(window).height();
        banner.css('height', vpAltura);
    }

    //inicializar en la pagina

    $(window).resize(alturaBanner());
})