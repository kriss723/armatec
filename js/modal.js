$(document).ready(function()  {

    /*sellecionar la clase de imagen*/
    $('.imagen-proyecto').on('click', function(){

        var rutaImagen = $(this).attr('src');
        var modal = '<div class="modal" id="modal">'+
                       '<img src="'+ rutaImagen +'" alt="Proyecto1">'+
                          '<div class="btncerrar">'+
                               '<i class="fas fa-window-close"></i>'+
                          '</div>'+
                    '</div>'

        $('#proyectos').after(modal) /*crear los elementos despues de las seccion proyectos*/            
        
        /*Eliminar el modal insertado con javascript*/

        $('.btncerrar').on('click', function(){
            $('#modal').remove();
        })
    });

    $(document).on('keyup', function(e){
        console.log(e.which);
        if(e.which == 27){
            /*which cual es la tecla presionada*/
            $('#modal').remove();
        }
    });

})