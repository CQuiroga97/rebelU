var audio_1 = document.getElementById('audio_1');
var audio_2 = document.getElementById('audio_2');

var contador_audio_1 = 0;
var contador_audio_2 = 0;

var contador_audio_completo_1 = 0;
var contador_audio_completo_2 = 0;

$('#btn_audio_1').click(function(){
    if(contador_audio_1 == 0){
        audio_1.play();
        $('#btn_audio_1').attr('src' , '../../img/pablo/overview/play_hover.png');
        contador_audio_1 ++;

    }

    else{
        audio_1.pause();
        contador_audio_1 = 0;
        $('#btn_audio_1').attr('src' , '../../img/pablo/overview/play.png');

     
    }

   audio_1.onpause = function() {
    $('#btn_audio_1').attr('src' , '../../img/pablo/overview/play.png');
    contador_audio_completo_1 = 1;
    console.log(contador_audio_completo_1)
    if(contador_audio_completo_1 == 1 && contador_audio_completo_2 == 1 ){
        $('.continue_play').fadeIn();
         
    }

   };

   

   audio_2.pause();
   $('#btn_audio_2').attr('src' , '../../img/pablo/overview/play.png');
    

    
});

$('#btn_audio_2').click(function(){
    if(contador_audio_2 == 0){
        audio_2.play();
        $('#btn_audio_2').attr('src' , '../../img/pablo/overview/play_hover.png');
        contador_audio_2 ++;
       
    }

    else{
        audio_2.pause();
        contador_audio_2 = 0;
        $('#btn_audio_2').attr('src' , '../../img/pablo/overview/play.png');
        
    }

   audio_2.onpause = function() {
    $('#btn_audio_2').attr('src' , '../../img/pablo/overview/play.png');
    contador_audio_completo_2 = 1;
    console.log(contador_audio_completo_2)

    if(contador_audio_completo_1 == 1 && contador_audio_completo_2 == 1 ){
        $('.continue_play').fadeIn();
   };



 
}

audio_1.pause();
   $('#btn_audio_1').attr('src' , '../../img/pablo/overview/play.png');

  
});



