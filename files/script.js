$(document).ready(function () {

    //layout
    $(window).scroll(function() {

        var ws = $(window).scrollTop();
        var windowHeight = $( window ).height();
        var hehe = 300;

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

   //foot
   $('#menu-footer').append("<ul id='menu-list'><li><a href='/#works'>work</a></li><li><a href='http://zzhen.us/zhen_resume.pdf'target='_blank'>resume</a></li><li class='right'><a href='mailto:zzzheeen@gmail.com'class='icon-linkedin'target='_blank'><img src='/files/social/email.png'></a><a href='https://www.linkedin.com/in/zzzhen'class='icon-linkedin'target='_blank'><img src='/files/social/linkedin.png'></a><a href='https://vimeo.com/zzzhen' class='icon-linkedin' target='_blank'><img src='/files/social/vimeo.png'></a></li></ul></nav>");

   //menu
    $('#about').append("<div class='container'><div class='col-sm-12 col-md-12'><a href='javascript:void(0)' class='right buttonX'><img src='/../files/buttonX.png'></a></div><div class='col-sm-6 col-md-4'><img src='/../files/photo.jpg' class='img-responsive' alt='Responsive image'><div><h5>Zhen Liu<br>Now in ITP, NYU<br><br>Contact:<br>email: zzzheeen[at]gmail.com</h4></div></div><div class='col-sm-6 col-md-8'><h1>Hi! I'm Zhen.</h1><h2>An interaction designer specializing in <span style='color:ffa5dc;'>DATA</span> and <span style='color:4afff1'>UX/UI</span>.</h2><p>I'm very interested in exploring the humanity behind the massive digital process, then using digital tools to reflect and enhance it. Thus, when designing data visualizing project, I focus on making data powerful by exploring its deeper meaning and relationship with humanity. I also care about providing good user experience when letting them explore the data. It leads me into the concept of 'Performing Data' and 'Living Data'.<p>As an enthusiast of digital sound, I explore interactive music interface and sound design on web. It is integrated into my interactive work as well.<p>Well, I'm also very into photography and <a href='http://fantazticzhen.tumblr.com/'>fashion illustration</a> :D.<p>Currently I'm a masters candidate in the <a href='http://itp.nyu.edu/itp/'>Interactive Telecommunications Program</a> at NYU.</p></div><div class = 'col-sm-6 col-md-4'><img src='/files/social/linkedin.png'></div></div>");


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
