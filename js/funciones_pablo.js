

function body_arriba(id_btn,body){
    $(id_btn).click(function(){
      $(body).animate({
        "background-position-y" : "-958px"
      },380);
    });
  }

  body_arriba('.btn_arriba' , '.body_arriba')


//   Does

function abrir_continue_does_1(id_btn,id_texto,id_continue,btn_1,btn_2,btn_3,btn_4,btn_5){
   
    
    $(id_btn).click(function(){
     
      $(id_btn).addClass('click');
      $(id_texto).fadeIn();

      if($(btn_1).hasClass('click') && $(btn_2).hasClass('click') && $(btn_3).hasClass('click') && $(btn_4).hasClass('click') && $(btn_5).hasClass('click')){
        $(id_continue).fadeIn();
      }
    });

     
}

function abrir_continue_does_2(id_btn,id_continue,btn_1,btn_2,btn_3){
   
    
  $(id_btn).click(function(){
   
    $(id_btn).addClass('click');

    if($(btn_1).hasClass('click') && $(btn_2).hasClass('click') && $(btn_3).hasClass('click')){
      $(id_continue).fadeIn();
    }
  });

   
}

// Disc

function mover_carros_disc_2(id_carro,top_1,right_1,top_2,right_2){

  $(id_carro).mouseenter(function(){
    $(this).animate({
      "top" : top_1,
      "right" : right_1
    },{queue:false});       
    
 

}).mouseleave(function(){
  $(this).animate({
    "top" : top_2,
    "right" : right_2
  },{queue:false}); 
});

}

function abrir_continue_disc_2(id_btn,id_continue,id_disc,btn_1,btn_2,btn_3,btn_4){
   
    
  $(id_btn).click(function(){
   
    $(id_btn).addClass('click');

    if($(btn_1).hasClass('click') && $(btn_2).hasClass('click') && $(btn_3).hasClass('click') && $(btn_4).hasClass('click')){
      $(id_continue).fadeIn();
      $(id_disc).fadeIn();
    }
  });
   
}

function abrir_continue_disc_2(id_btn,id_continue,id_disc,btn_1,btn_2,btn_3,btn_4){
   
    
  $(id_btn).click(function(){
   
    $(id_btn).addClass('click');

    if($(btn_1).hasClass('click') && $(btn_2).hasClass('click') && $(btn_3).hasClass('click') && $(btn_4).hasClass('click')){
      $(id_continue).fadeIn();
      $(id_disc).fadeIn();
    }
  });
   
}

function abrir_encuesta(id_continue,id_encuesta){
  $(id_continue).click(function(){
    $(id_encuesta).fadeIn();
    $(id_continue).fadeOut();
  });
}

function encuesta_mal(id_flecha,id_mal,id_encuesta){
  $(id_flecha).click(function(){
    $(id_mal).fadeOut();
    $(id_encuesta).fadeIn();
  });
}

function encuesta_correcto(id_flecha,id_bien,disc,btn_continue){
  $(id_flecha).click(function(){
    $(id_bien).fadeOut();
    $(disc).fadeIn();
    $(btn_continue).fadeIn();
  });
}

function comprobar_encuesta(btn_validar,check_1,check_2,check_3,check_4,modal_mal,modal_bien,modal_encuesta){

  $(btn_validar).click(function(){

    if( $(check_4).is(':checked') && !$(check_1).is(':checked') && !$(check_2).is(':checked') && !$(check_3).is(':checked')   ) {
      $(modal_bien).fadeIn();
      $(modal_encuesta).fadeOut();
    }
    else{
      $(modal_mal).fadeIn();
      $(modal_encuesta).fadeOut();
    }
  });
 
}

function cambiar_over_4(equis,btn_1,btn_2){
  $(equis).click(function(){
    $(btn_1).fadeOut();
    $(btn_2).fadeIn();
   
  });
}


function abrir_continue_over_7(id_btn,id_continue,btn_1,btn_2,btn_3){
   
    
  $(id_btn).click(function(){
   
    $(id_btn).addClass('click');

    if($(btn_1).hasClass('click') && $(btn_2).hasClass('click') && $(btn_3).hasClass('click') ){
      $(id_continue).fadeIn();

    }
  });
   
}

function numeros_over_8(id_btn_numero,id_numero){
  $(id_btn_numero).mouseenter(function(){
    $(id_numero).animate({
      "top" : "2.5vw"
    },{queue:false});       
    
}).mouseleave(function(){
  $(id_numero).animate({
    "top" : "4vw"
  },{queue:false}); 
});
}

function abrir_continue_over_8(id_btn,id_continue,btn_1,btn_2,btn_3,btn_4,btn_5,btn_6,btn_7){
   
    
  $(id_btn).click(function(){
   
    $(id_btn).addClass('click');

    if($(btn_1).hasClass('click') && $(btn_2).hasClass('click') && $(btn_3).hasClass('click') && $(btn_4).hasClass('click')&& $(btn_5).hasClass('click') && $(btn_6).hasClass('click') && $(btn_7).hasClass('click') ){
      $(id_continue).fadeIn();

    }
  });
   
}


function comprobar_encuesta_over_9(btn_validar,check_1,check_2,check_3,modal_mal,modal_bien,modal_encuesta){

  $(btn_validar).click(function(){

    if( $(check_3).is(':checked') && !$(check_1).is(':checked') && !$(check_2).is(':checked')) {
      $(modal_bien).fadeIn();
      $(modal_encuesta).fadeOut();
    }
    else{
      $(modal_mal).fadeIn();
      $(modal_encuesta).fadeOut();
    }
  });
 
}

function abrir_continue_food(id_btn,id_continue,btn_1,btn_2){
   
    
  $(id_btn).click(function(){
   
    $(id_btn).addClass('click');

    if($(btn_1).hasClass('click') && $(btn_2).hasClass('click')){
      $(id_continue).fadeIn();

    }
  });
   
}

function abrir_clima(id_btn_pais,id_modal_pais,id_contenido_sube,id_contenedor_paises,modal_usa,modal_canada){
  $(id_btn_pais).click(function(){
    console.log("click");

    $(id_btn_pais).addClass('pais_2')
    $(id_contenido_sube).animate({
      "top" : "-31vw"
    });

    $(modal_usa).fadeOut();
    $(modal_canada).fadeIn();
    $(id_contenedor_paises).animate({
      "top" : "-23vw"
    },function(){
      $(id_modal_pais).animate({
        "top" : "12vw"
      })
    });


  });
}


function abrir_clima_2(id_btn_pais,id_modal_pais,id_contenido_sube,id_contenedor_paises,modal_usa,modal_canada){
  $(id_btn_pais).click(function(){
    console.log("click");

    $(id_btn_pais).addClass('pais_2')
    $(id_contenido_sube).animate({
      "top" : "-31vw"
    });

    $(modal_canada).fadeOut();
    $(modal_usa).fadeIn();
    $(id_contenedor_paises).animate({
      "top" : "-23vw"
    },function(){
      $(id_modal_pais).animate({
        "top" : "12vw"
      })
    });


  });
}


function abrir_continue_clima(id_btn,id_continue,btn_1,btn_2,btn_3,btn_4){
   
    
  $(id_btn).click(function(){
   
    $(id_btn).addClass('click');

    if($(btn_1).hasClass('click') && $(btn_2).hasClass('click') && $(btn_3).hasClass('click') && $(btn_4).hasClass('click')  ){
      $(id_continue).fadeIn();

    }
  });
   
}

function abrir_clima_ln(id_btn_pais,id_modal_pais,id_contenido_sube,id_contenedor_paises,modal_usa,modal_canada,modal_audio){
  $(id_btn_pais).click(function(){
    console.log("click");

    $(id_btn_pais).addClass('pais_2')
    $(id_contenido_sube).animate({
      "top" : "-31vw"
    });

    $(modal_usa).fadeOut();
    $(modal_audio).css({
      "opacity" : "0"
    });
    $(modal_canada).fadeIn();
    $(id_contenedor_paises).animate({
      "top" : "-23vw"
    },function(){
      $(id_modal_pais).animate({
        "top" : "12vw"
      })

      $(id_modal_pais).fadeIn();
    });


  });
}

function abrir_clima_2_ln(id_btn_pais,id_modal_pais,id_contenido_sube,id_contenedor_paises,modal_usa,modal_canada,modal_audios){
  $(id_btn_pais).click(function(){
    console.log("click");

    $(id_btn_pais).addClass('pais_2')
    $(id_contenido_sube).animate({
      "top" : "-31vw"
    });

    $(modal_canada).fadeOut();
    $(modal_audios).css({
      "opacity" : "0"
    });
    $(modal_usa).fadeIn();
    $(id_contenedor_paises).animate({
      "top" : "-23vw"
    },function(){
      $(id_modal_pais).animate({
        "top" : "12vw"
      });
      $(id_modal_pais).fadeIn();
    });


  });
}