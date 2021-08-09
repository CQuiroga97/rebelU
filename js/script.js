$(".txtMenu").click(function(){
    const id = this.id;
    $(".animsition").animate({
        top: "100%"
    }, 600, function(){
        if(id == "back"){
            window.history.back();
        }else{
            window.location.href="../inicio.html"
        }
    });
    
    
});
$(document).ready(function () {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    setTimeout(function(){
        if($(".animsition").css("opacity")  == 0){
            $(".animsition").css("opacity", 1);
        }
    }, 800);
});
