

$(function(){
    
    // 전역변수 선언 
    var $burger = null;
    var $logo = null;
    var scrollTop = 0;
    var topAreaHeight = 0;
    
    // 전역에서 사용할 요소 초기화
    function init(){
        $burger = $(".menu");
        $logo = $(".logo");
        topAreaHeight = $('.topArea').outerHeight();
    }
    
     function showTitle(){
        $("[data-ani]").each(function(){
            
            
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + ( $(window).height() / 1.5);
            var $titleLine = $(this).next('.title_line');
            
            function showElemLine(){
                $titleLine.addClass('on');
            }
            
            
            if ( windowBottom > objectBottom ) {
                TweenLite.to($(this),1.5,{className:'+=on', top:-10, ease: Power2.easeOut, onComplete: showElemLine()});
                
            }
                
            
        });
         
  
    }
    
    function burgerColor(){
        if( scrollTop >= topAreaHeight ){
            $burger.add($logo).removeClass('onTop');
        }else{
            $burger.add($logo).addClass('onTop');
        }
    }
    
    function scrollTo(where){
            $('html,body').stop().animate({scrollTop:where});
        
    }
    
        
    // 이벤트 초기화
    function initEvent(){
        
        $(window).on('scroll',function(){
            scrollTop = $(window).scrollTop();
            
            showTitle();
            if ($(".wrap.about").length){
                return false;
            }
            burgerColor();
            
        });
        
        $('h1').on('click',function(){
           // scrollToTop();
        });
    }
    
    $(window).on('load',function(){
        init();
        initEvent();
        scrollTop = $(window).scrollTop();
        burgerColor();
        
       if ($(".wrap.home").length){
           
           var posWork = $('.article_work').offset().top;
           
            $('h1').on('click',function(){
                scrollTo(0);
            });
            $('.menu_work').on('click',function(){
                scrollTo(posWork);
            });
            $('.menu_about').on('click',function(){
                window.location.href = 'about.html';
            });
        } 
       if ($(".wrap.about").length){
            $burger.add($logo).removeClass('onTop');
           
            $('h1').on('click',function(){
                window.location.href = '/';
            });
        }
       if ($(".wrap.work").length){
           
           
            $('h1').on('click',function(){
                window.location.href = '/';
            });
        }
    });
    
    
    $(window).on('resize',function(){
        topAreaHeight = $('.topArea').outerHeight();
        //console.log(topAreaHeight);
    });
    
    
    
    
    
});

