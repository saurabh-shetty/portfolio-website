
$(document).ready(function (){
    
    $(".headtext").fadeIn(3000);
    $(".nav-item").fadeIn(3000);    
    
       display1();

});

function display1(){
    console.log("Display1");
    document.getElementById("change").innerHTML="Developer";
      setTimeout(display2,3000);
      
    
}

function display2(){
    console.log("Display2");
    
    document.getElementById("change").innerHTML="Programmer";
    setTimeout(display3,3000);    
    console.log('Successfull');
    
    
}



function display3(){
    console.log("Display3");
    
    document.getElementById("change").innerHTML="Learner";
      setTimeout(display4,3000);   
    console.log('Successfull');
    
    
}

function display4(){
    console.log("Display4");
    
    document.getElementById("change").innerHTML="Explorer";
      setTimeout(display1,3000);   
    console.log('Successfull');
    
    
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



