

/*
$(function(){



            $(function(){
               $('.burger').on('click', function(){
                  $(this).toggleClass('open');
                   $('nav').stop().fadeToggle();
                   $('html,body').css({'top': -(document.documentElement.scrollTop) + 'px', 'position':'fixed'}).addClass('noScroll')

                });

            });
            
            
            
            
    
    function getRandomSize(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    var allImages = "";
    

    for (var i = 0; i < 6; i++) {
      var width = getRandomSize(200, 420);
      var height =  getRandomSize(300, 420);
      var idx = Math.floor( Math.random()*6 );
      allImages += '<a href="#"><img src="https://unsplash.it/'+width+'/'+height+'/?image=8'+idx+'" alt="nykim"></a>';
    }
    
    var temp = '<a href="#"><img src="images/temp.jpeg"></a>';
   
    $('#photos').append(allImages);
    $('#photos').append(temp);
 
    
    console.log(allImages);
    
});
*/


//background-image: url(https://unsplash.it/1600/800/?image=674)
$(function(){}),$(window).load(function(){function o(o){WIDTH=window.innerWidth,window.orientation%180?HEIGHT=window.innerHeight:o&&"orientationchange"!=o.type||(HEIGHT=window.innerHeight+60)}function n(o){WIDTH=window.outerWidth/rate,HEIGHT=window.outerHeight/rate}function e(){var o=$("#main"),n=o.height(),e=o.width(),t=$("footer"),i=t.height(),d=t.width();console.log("Content Height = "+n+"px"),console.log("Content Width = "+e+"px"),console.log("Footer Height = "+i+"px"),console.log("Footer Width = "+d+"px"),o.css({"margin-bottom":i})}window.addEventListener("orientationchange",o),window.addEventListener("resize",o),o(),window.outerWidth==screen.width?rate=window.devicePixelRatio:rate=1,window.addEventListener("resize",n),n(),e(),$(window).resize(function(){e()}),$(function(){$(".burger").on("click",function(){$(this).toggleClass("open"),$("nav").stop().fadeToggle(),$("html,body").css({top:-document.documentElement.scrollTop+"px",position:"fixed"}).addClass("noScroll")})})});
$(function(){
    




    $(window).load(function() {
        
        consnole.log("꼬고")

        // INITIATE THE FOOTER
      siteFooter();
        // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
        $(window).resize(function() {
            siteFooter();
        });

        function siteFooter() {
            var siteContent = $('.contents');
            var siteContentHeight = siteContent.height();
            var siteContentWidth = siteContent.width();

            var siteFooter = $('.footer');
            var siteFooterHeight = siteFooter.height();
            var siteFooterWidth = siteFooter.width();

            console.log('Content Height = ' + siteContentHeight + 'px');
            console.log('Content Width = ' + siteContentWidth + 'px');
            console.log('Footer Height = ' + siteFooterHeight + 'px');
            console.log('Footer Width = ' + siteFooterWidth + 'px');

            siteContent.css({
                "margin-bottom" : siteFooterHeight
            });
        };



    });



});
