var audio_1 = document.getElementById('audio_1');
var audio_2 = document.getElementById('audio_2');
var audio_3 = document.getElementById('audio_3');
var audio_4 = document.getElementById('audio_4');
var audio_5 = document.getElementById('audio_5');

var contador_audio_1 = 0;
var contador_audio_2 = 0;
var contador_audio_3 = 0;
var contador_audio_4 = 0;
var contador_audio_5 = 0;

var contador_audio_completo_1 = 0;
var contador_audio_completo_2 = 0;
var contador_audio_completo_3 = 0;
var contador_audio_completo_4 = 0;
var contador_audio_completo_5 = 0;

$('#btn_audio_1').click(function(){
    if(contador_audio_1 == 0){
        audio_1.play();
        $('#btn_audio_1').attr('src' , '../img/pablo/overview/play_hover.png');
        contador_audio_1 ++;

    }

    else{
        audio_1.pause();
        contador_audio_1 = 0;
        $('#btn_audio_1').attr('src' , '../img/pablo/overview/play.png');

     
    }

   audio_1.onpause = function() {
    $('#btn_audio_1').attr('src' , '../img/pablo/overview/play.png');
    contador_audio_completo_1 = 1;
    
    if(contador_audio_completo_1 == 1 && contador_audio_completo_2 == 1 && contador_audio_completo_3 == 1 && contador_audio_completo_4 == 1 && contador_audio_completo_5 == 1 ){
        $('.continue_play').fadeIn();
         
    }

   };

   
   audio_2.pause();
   $('#btn_audio_2').attr('src' , '../img/pablo/overview/play.png');

   audio_3.pause();
   $('#btn_audio_3').attr('src' , '../img/pablo/overview/play.png');

   audio_4.pause();
   $('#btn_audio_4').attr('src' , '../img/pablo/overview/play.png');

   audio_5.pause();
   $('#btn_audio_5').attr('src' , '../img/pablo/overview/play.png');
    

    
});


// audio 2

$('#btn_audio_2').click(function(){
    if(contador_audio_2 == 0){
        audio_2.play();
        $('#btn_audio_2').attr('src' , '../img/pablo/overview/play_hover.png');
        contador_audio_2 ++;

    }

    else{
        audio_2.pause();
        contador_audio_2 = 0;
        $('#btn_audio_2').attr('src' , '../img/pablo/overview/play.png');

     
    }

   audio_2.onpause = function() {
    $('#btn_audio_2').attr('src' , '../img/pablo/overview/play.png');
    contador_audio_completo_2 = 1;
    
    if(contador_audio_completo_1 == 1 && contador_audio_completo_2 == 1 && contador_audio_completo_3 == 1 && contador_audio_completo_4 == 1 && contador_audio_completo_5 == 1 ){
        $('.continue_play').fadeIn();
         
    }

   };

   
   audio_1.pause();
   $('#btn_audio_1').attr('src' , '../img/pablo/overview/play.png');

   audio_3.pause();
   $('#btn_audio_3').attr('src' , '../img/pablo/overview/play.png');

   audio_4.pause();
   $('#btn_audio_4').attr('src' , '../img/pablo/overview/play.png');

   audio_5.pause();
   $('#btn_audio_5').attr('src' , '../img/pablo/overview/play.png');
    

    
});

// audio 3

$('#btn_audio_3').click(function(){
    console.log("audio_3");
    if(contador_audio_3 == 0){
        audio_3.play();
        $('#btn_audio_3').attr('src' , '../img/pablo/overview/play_hover.png');
        contador_audio_3 ++;

    }

    else{
        audio_3.pause();
        contador_audio_3 = 0;
        $('#btn_audio_3').attr('src' , '../img/pablo/overview/play.png');

     
    }

   audio_3.onpause = function() {
    $('#btn_audio_3').attr('src' , '../img/pablo/overview/play.png');
    contador_audio_completo_3 = 1;
    
    if(contador_audio_completo_1 == 1 && contador_audio_completo_2 == 1 && contador_audio_completo_3 == 1 && contador_audio_completo_4 == 1 && contador_audio_completo_5 == 1 ){
        $('.continue_play').fadeIn();
         
    }

   };

   
   audio_1.pause();
   $('#btn_audio_1').attr('src' , '../img/pablo/overview/play.png');

   audio_2.pause();
   $('#btn_audio_2').attr('src' , '../img/pablo/overview/play.png');

   audio_4.pause();
   $('#btn_audio_4').attr('src' , '../img/pablo/overview/play.png');

   audio_5.pause();
   $('#btn_audio_5').attr('src' , '../img/pablo/overview/play.png');
    

    
});

// audio 4

$('#btn_audio_4').click(function(){
    if(contador_audio_4 == 0){
        audio_4.play();
        $('#btn_audio_4').attr('src' , '../img/pablo/overview/play_hover.png');
        contador_audio_4 ++;

    }

    else{
        audio_4.pause();
        contador_audio_4 = 0;
        $('#btn_audio_4').attr('src' , '../img/pablo/overview/play.png');

     
    }

   audio_4.onpause = function() {
    $('#btn_audio_4').attr('src' , '../img/pablo/overview/play.png');
    contador_audio_completo_4 = 1;
    
    if(contador_audio_completo_1 == 1 && contador_audio_completo_2 == 1 && contador_audio_completo_3 == 1 && contador_audio_completo_4 == 1 && contador_audio_completo_5 == 1 ){
        $('.continue_play').fadeIn();
         
    }

   };

   
   audio_1.pause();
   $('#btn_audio_1').attr('src' , '../img/pablo/overview/play.png');

   audio_3.pause();
   $('#btn_audio_3').attr('src' , '../img/pablo/overview/play.png');

   audio_2.pause();
   $('#btn_audio_2').attr('src' , '../img/pablo/overview/play.png');

   audio_5.pause();
   $('#btn_audio_5').attr('src' , '../img/pablo/overview/play.png');
    

    
});


// audio 5

$('#btn_audio_5').click(function(){
    if(contador_audio_5 == 0){
        audio_5.play();
        $('#btn_audio_5').attr('src' , '../img/pablo/overview/play_hover.png');
        contador_audio_5 ++;

    }

    else{
        audio_5.pause();
        contador_audio_5 = 0;
        $('#btn_audio_5').attr('src' , '../img/pablo/overview/play.png');

     
    }

   audio_5.onpause = function() {
    $('#btn_audio_5').attr('src' , '../img/pablo/overview/play.png');
    contador_audio_completo_5 = 1;
    
    if(contador_audio_completo_1 == 1 && contador_audio_completo_2 == 1 && contador_audio_completo_3 == 1 && contador_audio_completo_4 == 1 && contador_audio_completo_5 == 1 ){
        $('.continue_play').fadeIn();
         
    }

   };

   
   audio_1.pause();
   $('#btn_audio_1').attr('src' , '../img/pablo/overview/play.png');

   audio_3.pause();
   $('#btn_audio_3').attr('src' , '../img/pablo/overview/play.png');

   audio_2.pause();
   $('#btn_audio_2').attr('src' , '../img/pablo/overview/play.png');

   audio_4.pause();
   $('#btn_audio_4').attr('src' , '../img/pablo/overview/play.png');
    

    
});