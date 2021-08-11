

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

function comprobar_encuesta(btn_validar,check_1,check_2,check_3,modal_mal,modal_bien,modal_encuesta){

  $(btn_validar).click(function(){

    if( $(check_1).is(':checked') && $(check_2).is(':checked') && $(check_3).is(':checked') ) {
      $(modal_bien).fadeIn();
      $(modal_encuesta).fadeOut();
    }
    else{
      $(modal_mal).fadeIn();
      $(modal_encuesta).fadeOut();
    }
  });
 
}

