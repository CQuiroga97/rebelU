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
function moverCarro(topI, topF, leftI, leftF, degI, degF){
    cl = $(".ctr");
    cl.css("top", topI);
    cl.css("left", leftI);
    cl.css("transform", "rotate("+degI+")");
    cl.animate({
        top: topF,
        left: leftF
    }, 800, function(){
        cl.css("transform", "rotate("+degF+")");
    })
}
function cambiarEstrellas(wI, wF){
    $(".divEstrellas").css("width", wI);
    $(".divEstrellas").animate({
        width: wF
    }, 500)
}
$(".home").click(function(){
    
    $(".screen").animate({
        opacity: 0
    }, 500, function(){
        window.location.href = "../menu.html"
    })
})
$(".back").click(function(){
    
    $(".screen").animate({
        opacity: 0
    }, 500, function(){
        window.history.back();
    })
})