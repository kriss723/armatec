$(document).ready(function()  {

  /*variables*/
  var slider = $('#slider');
  var btnAnterior = $('#btn-anterior');
  var btnSiguiente = $('#btn-siguiente');

  //pasar el ultimo slider al primer lugar//

  $('#slider .slide:last').insertBefore('#slider .slide:first');

  // el margen negativo para centrar las imagenes del slider//

  slider.css('margin-left','-66%');

  // Funcion de mover el slider a la derecha//

  function moverDerecha(){
    //is para verificar que se cumple un filtro comprobacion//
    //si el slider esta siendo animado
    if (!slider.is(':animated')) {
        slider.animate({
            marginLeft : '-142%'
        },700, function(){
            $('#slider .slide:first').insertAfter('#slider .slide:last');
            $('#slider').css('margin-left','-66%');
            reiniciarIntervalo();
        });
    }
  }

  function moverizquierda(){
        if (!slider.is(':animated')) {
            $('#slider .slide:last').insertBefore('#slider .slide:first');
            $('#slider').css('margin-left','-142%');

            slider.animate({
                marginLeft : '-66%'
            },700, reiniciarIntervalo());
        }
    }

  btnSiguiente.on('click', moverDerecha);
  btnAnterior.on('click', moverizquierda)

  //movimiento automatico//
    //nesecitamos reiniciar el timepo del intervalo
   var intervalo = setInterval(moverDerecha,5000);

   function reiniciarIntervalo(){
       clearInterval(intervalo);
       intervalo = setInterval(moverDerecha,5000);
   }
  

});