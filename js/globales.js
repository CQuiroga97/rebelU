
// Cambiar ruta
function cambiar_src(id,src_1,src_2){
    $(id).mouseenter(function(){
         $(id).attr('src' , src_1)                                                                                     

    }).mouseleave(function(){
      $(id).attr('src' , src_2)  
    });
  }

//   flechas slider
  cambiar_src('#flecha_izquierda_slide' ,'../../slider/flecha_izquierda_hover.png' , '../../slider/flecha_izquierda.png');
  cambiar_src('#flecha_derecha_slide' ,'../../slider/flecha_derecha_hover.png' , '../../slider/flecha_derecha.png');
  cambiar_src('.equis' ,'../../slider/equis_hover.png' , '../../slider/equis.png');

  //Botones menu abajo
  cambiar_src('#btn_atras' ,'../../img/inicio/simbolos_generales/btn_atras_hover.png' , '../../img/inicio/simbolos_generales/btn_atras.png');
  cambiar_src('#btn_home' ,'../../img/inicio/simbolos_generales/btn_home_hover.png' , '../../img/inicio/simbolos_generales/btn_home.png');

// Abrir modals
  function abrir_modals(id_btn,id_modal,equis){
      $(id_btn).click(function(){
          $(id_modal).fadeIn();
      });

      $(equis).click(function(){
        $(id_modal).fadeOut();
      });
  }

  // funcion carro internas

  function carro_internas(id_carro,top_carro,top_carro_2,right_carro,right_carro_2,rotacion_carro,rotacion_carro_2,id_cuadro_estrellas,width_estrellas){
    $(id_carro).animate({
      "top" : top_carro,
      "right" : right_carro,
    },function(){

      $(this).delay(400).animate({
        "top" : top_carro_2,
        "right" : right_carro_2
      });

      $(id_carro).delay(400).css('transform', 'rotate(' + rotacion_carro_2 + ')');

    });

    $(id_carro).css('transform', 'rotate(' + rotacion_carro + ')');
     
    $(id_cuadro_estrellas).delay(800).animate({
      "width" : width_estrellas
    });
  }

  