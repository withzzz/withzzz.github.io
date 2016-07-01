$(document).ready(function () {

    //layout
    $(window).scroll(function() {

        var ws = $(window).scrollTop();
        var windowHeight = $( window ).height();
        var hehe = 200;

        if(ws < hehe){
            $(".footer").fadeOut();            
        }
        if(ws >= hehe){
            $(".footer").fadeIn();            
        }


        if (ws >= hehe-100){
            $("nav.menu").css({"padding-top":"16", "background-color":"white"});
        }else{$("nav.menu").css({"padding-top":"30", "background-color":"transparent"});}
    });
  
  //head nav
  $('#head-nav').append("<div class='container'><div id='zhen'><a href='http://zzhen.us/'class='white'>Zhen Liu</a></div><div class='right' id='navmenu'><ul><li><a href='http://zzhen.us/#works'>works</a></li><li><a href='http://zzhen.us/blog' target='_blank'>blog</a></li><li><a href='http://zzhen.us/about'>about</a></li></ul></div></div>");

   //foot
   $('#menu-footer').append("<ul id='menu-list'><li>© 2016 zhen liu</li><li class='right'><a href='mailto:zzzheeen@gmail.com'target='_blank'><img src='/files/social/email.png'></a></li></ul>");


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
