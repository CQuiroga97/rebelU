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
});

$(".home_2").click(function(){
    
    $(".screen").animate({
        opacity: 0
    }, 500, function(){
        window.location.href = "../../menu.html"
    })
});
$(".back").click(function(){
    
    $(".screen").animate({
        opacity: 0
    }, 500, function(){
        window.history.back();
    })
})
var datos = [
    ["1", "0", "1", "1", "1", "1", "1", "1", "0", "1", "1", "1"],
    ["1", "0", "0", "1", "1", "0", "0", "0", "1", "1", "1", "1"],
    ["0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1"],
    ["1", "0", "1", "0", "1", "1", "1", "1", "0", "1", "0", "1"],
    ["1", "1", "0", "1", "0", "0", "1", "1", "1", "0", "1", "1"],
    ["1", "1", "0", "0", "0", "0", "0", "0", "1", "0", "1", "1"],
    ["0", "1", "1", "1", "1", "0", "0", "1", "0", "1", "1", "0"],
    ["1", "0", "1", "1", "0", "0", "0", "1", "1", "1", "1", "0"],
    ["0", "1", "1", "1", "1", "0", "1", "1", "0", "1", "1", "1"],
    ["1", "1", "0", "0", "0", "0", "0", "0", "1", "0", "1", "1"],
    ["1", "0", "0", "0", "0", "1", "1", "1", "0", "1", "1", "1"],
    ["1", "0", "0", "1", "1", "1", "1", "0", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1", "0", "1", "0", "1", "1", "0", "1"],
];
var colores = [
 ["#74ACDF", "#FFFFFF", "#74ACDF"],
 ["#007C29", "#FCC000", "#021E47"],
 ["#3757A6", "#FFFFFF", "#E13E3E"],
 ["#FCD73E", "#1D4F95", "#D11F3E"],
 ["#3757A6", "#FFFFFF", "#E13E3E"],
 ["#002D62", "#FFFFFF", "#E13E3E"],
 ["#FCD73E", "#1D4F95", "#D11F3E"],
 ["#74ACDF", "#FFFFFF", "#74ACDF"],
 ["#CD2029", "#FCD943", "#0C8E41"],
 ["#FFFFFF", "#D21034", "#005293"],
 ["#E73B36", "#FFFFFF", "#E73B36"],
 ["#E73B36", "#FFFFFF", "#E73B36"],
 ["#3757A6", "#FFFFFF", "#E13E3E"]

]

var titulos = ["Argentina", "Brasil", "Chile", "Colombia", "Costa Rica", "Dominican Republic", "Ecuador", "Guatemala", "Guyana", "Panama", "Peru", "Canada", "United States"]

var textosPaises = [
    [],[],[],[],[],[],[],[],[],[],[],
    [
        "<div class='textosPaises'><span><b>January 1st</b><br>New year's Day.</span></div>",
        "",
        "",
        "<div class='textosPaises'><span><b>April 2nd</b><br>Good Friday.</span></div>",
        "<div class='textosPaises'><span><b>May 24th</b><br>Victoria Day.</span></div>",
        "<div class='textosPaises'><span><b>June 24th</b><br>Saint-Jean-Baptiste.</span></div>",
        "<div class='textosPaises'><span><b>July 1st</b><br>Canada Day.</span></div>",
        "",
        "<div class='textosPaises'><span><b>September 6th</b><br>Labour Day.</span></div>",
        "<div class='textosPaises'><span><b>October 11th</b><br>Thanksgiving Day..</span></div>",
        "<div class='textosPaises'><span><b>November 11th</b><br>Remembrance Day.</span></div>",
        "<div class='textosPaises'><span><b>December 25th</b><br>Vhrismas Day.</span></div>"
    ],
    [
        "<div class='textosPaises'><span><b>January 1st</b><br>New year's Day.</span><span><b>January 18st</b><br>Martin Luther King Jr. Day.</span></div>",
        "<div class='textosPaises'><span><b>February 15th</b><br>President's Day.</span></div>",
        "<div class='textosPaises'><span><b>March 17th</b><br>Saint Patrick's Day.</span></div>",
        "<div class='textosPaises'><span><b>April 15th</b><br>Easter Sunday.</span></div>",
        "<div class='textosPaises'><span><b>May 31st</b><br>Memorial Day.</span></div>",
        "",
        "<div class='textosPaises'><span><b>July 4th</b><br>Independence Day.</span></div>",
        "",
        "<div class='textosPaises'><span><b>September 6th</b><br>Labour Day.</span></div>",
        "<div class='textosPaises'><span><b>October 31st</b><br>Halloween.</span></div>",
        "",
        "<div class='textosPaises'><span><b>December 25th</b><br>Christmas Day.</span></div>"],
    
]