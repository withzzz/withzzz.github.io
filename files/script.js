$(document).ready(function () {

    //layout
    $(window).scroll(function() {

        // var ws = $(window).scrollTop();
        // var windowHeight = $( window ).height();
        // var hehe = 200;

        // if(ws < hehe){
        //     $(".footer").fadeOut();            
        // }
        // if(ws >= hehe){
        //     $(".footer").fadeIn();            
        // }


        // if (ws >= hehe-100){
        //     $("nav.menu").css({"padding-top":"16", "background-color":"white"});
        // }else{$("nav.menu").css({"padding-top":"30", "background-color":"transparent"});}
    });
  
  //head nav
  $('#head-nav').append("<link href='https://fonts.googleapis.com/css?family=Catamaran:400,600|Yanone+Kaffeesatz:400,700' rel='stylesheet'><div class='container'><div id='zhen'><a href='/'class='white'>ZHEN L</a></div><div class='right' id='navmenu'><ul><li id='nav-interaction'><a href='/'>INTERACTION</a></li><li id='nav-graphics'><a href='/gallery'>GRAPHICS</a></li><li id='nav-about'><a href='/about'>ABOUT</a></li></ul></div></div>");

   //foot
   $('body').append("<footer>All images on this site are Copyright © 2016. Website hand coded by Zhen.</footer>");


       $("#aboutIcon").click(function () {
            $("#about").fadeToggle(500);
            aboutTrigger();
        });

       $(".buttonX").click(function(){
            $("#about").fadeToggle(500);
            aboutTrigger();
       })

       var trigger;

       function aboutTrigger(){
            trigger =! trigger;
            if(trigger==true){
                $("#aboutIcon").css("color","white");
            }else{
                $("#aboutIcon").css("color","black");
            }
       
       }

      







   });
