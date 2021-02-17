$(document).ready(function(){

    let numero = 1;

    $('#btnMenu').on('click', function(e){
        e.preventDefault();
        if (numero == 1) {
            $('.menu-movil .menu-principal').animate({
                left:0
            },300, function(){
                numero = 0;
            });
        }else{
            $('.menu-movil .menu-principal').animate({
                left:'-100%'
            },300,function(){
                numero = 1;
            });
        }
    });

    $('.menu-movil .menu-principal a').on('click',function(){
        $('.menu-movil .menu-principal').animate({
            left:'-100%'
        },300,function(){
            numero = 1;
        });
    })
});