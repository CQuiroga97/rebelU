

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