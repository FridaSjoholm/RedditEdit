$('head').append('<link href="https://fonts.googleapis.com/css?family=Raleway:400,600" rel="stylesheet">')
$('head').append('<link href="https://fonts.googleapis.com/css?family=Nunito:600" rel="stylesheet">')

$('body').css({"font-family":"Raleway"})
$('img').not('.rank img').not('.promoted-tag img').css({"border-radius":"35px", "width":"70px", "height":"70px", "object-fit":"cover"})
$('.title').css({"font-size":'1.2em', "color":"black"})
$('.score').css({"font-size":'1.2em', "color":"#FF4500", "font-weight":"400"})
$('.rank').css({"font-size":'1.8em', "color":"gray"})

$("#header-bottom-left").css({"background-color":"white", "padding-top": "25px"})
$(".tabmenu li a").css({"color":"black","font-family":"Raleway","font-size":'1.2em', "background-color": "#efefef"})
$(".tabmenu .selected a").css({"background-color": "white"})
$("#sr-header-area a").css("font-weight","600")

$("#header-bottom-right").css({"height":"62px", "background-color":"#FF4500", "border-radius":"0px", "box-shadow":" -2px 0px 1.5px 0px #aaaaaa"})
$("#header-bottom-right .separator").html("<br>")
$("#header-bottom-right a").css({"font-size":'1.1em', "color":"black", "text-align":"right"})

$(".global").css("margin-top","25px")
$(".global .selected").css({"background-color":"#FF4500", "box-shadow": "0 2px 6px -1px rgba(0,0,0,0.2)"})
$(".global li a").css({"color":"black"})
$(".intro").css("background-color", "#efefef")

$('.morelink').css({'background':'none', 'border':'none', "text-align":"right"})
$('.morelink a').css({'color': 'black', "width":"90%"})
