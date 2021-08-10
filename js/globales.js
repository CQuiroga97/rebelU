
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

// Abrir modals
  function abrir_modals(id_btn,id_modal,equis){
      $(id_btn).click(function(){
          $(id_modal).fadeIn();
      });

      $(equis).click(function(){
        $(id_modal).fadeOut();
      });
  }

  