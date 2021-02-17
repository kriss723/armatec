$(document).ready(function()  {
    //variables
    let mensajedistancia = $('#distance')[0];
    let objrepuesto = null;

    class Repuesto {
        constructor(xpunto, ypunto, w, h, name, url, precio){
          this.xpunto = xpunto;
          this.ypunto = ypunto;
          this.w = w;
          this.h = h;
          this.name = name;
          this.url = url;
          this.precio = precio;
          //return name;
        }
      
        clickRepuesto (xraton, yraton){
          
          /***comentario*** */
          /*
          const distancia = Math.sqrt(
            ((xraton - this.xpunto) * (xraton - this.xpunto))
            +
            ((yraton - this.ypunto) * (yraton - this.ypunto))
          );
            
          console.log('click en repuestos '+xranton);
          console.log(distancia)
           
          let distanceHint = getDistanceHint(distancia);
          mensajedistancia.innerHTML = `<h2>${distanceHint}</h2>`;
          
          if (distancia < 10) {
            
      
            $('#formC').slideUp(100)
      
            mensajedistancia.innerHTML = `<h2> Sigue asi te faltan `+(animales.length - 1)+`</h2>`;
      
            animales.splice(index,1);
            reloadAnimal(); 
            console.log('el segundo nivel es: '+nivel);
          
            
          }*/

          for (let index = 0; index < repuestos.length; index++) {
     
            const distancia = Math.sqrt(
              ((xraton - repuestos[index].xpunto) * (xraton - repuestos[index].xpunto))
              +
              ((yraton - repuestos[index].ypunto) * (yraton - repuestos[index].ypunto))
            );
            
            console.log(distancia);

            if (distancia < 10) {
              mensajedistancia.innerHTML = `<div class="repuestos" style ="border: #1146607a solid 1px; text-align: center;">
                                             <h2> el Repuesto es: `+ repuestos[index].name+`</h2>
                                             <hr><br>
                                             <h3 style= "color: red;"> el precio es: `+ repuestos[index].precio+` Iva Incluido </h3></div>`;
              console.log(repuestos[index].url);
              muestra.src = repuestos[index].url;

              canvasC.drawImage(muestra,0,0);

            }
          }
      
        }
      }
    
    /***Creacion del objeto */

    let repuestos = [ new Repuesto(330,20,5,5,'Armadura','img/repuestos/armadura.jpg','$95.000'),
                      new Repuesto(192,97,5,5,'Campo','img/repuestos/campo.jpg','$50.000'),
                      new Repuesto(76,95,5,5,'escobillas','img/repuestos/escobillas.jpg','$15.000'),
                      new Repuesto(75,305,5,5,'Interruptor','img/repuestos/interruptor.jpg','$60.000')              
    ];

    /**seccion canvas**/

     let canvasA = document.getElementById('despiece').getContext('2d');
     var canvasC = document.getElementById('visor').getContext('2d');
     let fondo = new Image();
     var muestra = new Image();

     var cW = canvasA.canvas.width;
     var cH = canvasA.canvas.height;
     var cW1 = canvasC.canvas.width;
     var cH1 = canvasC.canvas.height;
     
     muestra.src = 'img/repuestos/arma.png';
     fondo.src = "img/repuestos/despieceDewalt.jpg";

     function launcher(){

        this.render = function(){
      
            canvasA.fillStyle = this.bg;
            canvasC.fillStyle = this.bg;
            canvasA.drawImage(fondo,0,0);
            canvasC.drawImage(muestra,0,0);
        
        }
        
      }
      
      var launcher = new launcher();
      

      function animate(){
        canvasA.clearRect(0, 0, cW, cH);
        canvasC.clearRect(0,0, cW1, cH1);
        launcher.render();
        
      }

      var animateInterval = setInterval(animate,6);

      canvasA.canvas.addEventListener('click' , (event) => {
        const rect = canvasA.canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        console.log('este es x: '+ x);
        console.log('este es y: '+ y);
        //objrepuesto.clickRepuesto(x,y);

        for (let index = 0; index < repuestos.length; index++) {
          objrepuesto = repuestos[index];    
       }

        objrepuesto.clickRepuesto(x,y)
      
      })


      
});