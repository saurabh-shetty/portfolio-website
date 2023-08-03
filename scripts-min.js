

$(document).ready(function (){
    
    $(".headtext").fadeIn(3000);
    $(".nav-item").fadeIn(3000);    
    
       display1();

});

function display1(){
    console.log("Display1");
    $("#change").fadeOut(5000,function() {
        $(this).text("Programmer")
      }).fadeIn(3000);
      $("#change").fadeOut(5000,function() {
        $(this).text("Learner")
      }).fadeIn(3000);
      $("#change").fadeOut(5000,function() {
        $(this).text("Developer")
      }).fadeIn(3000);
      setTimeout(display1,3000);
      
    
}



! function(n) {
    n(".top").click(function() {
        n("html, body").animate({
            scrollTop: 0
        }, 500)
    }),
    
    n("#go-down span").click(function() {
        var e = n("#lead").next().offset().top;
        n("html, body").animate({
            scrollTop: e + "px"
        }, 500)
    })
}(jQuery);