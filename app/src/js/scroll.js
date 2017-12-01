

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
         
         
 /*       $('.shots_item:not(.unveiled)').each(function(){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                TweenLite.to($(this),1,{opacity:1, y:-30, className:'+=unveiled'});
            }
        });*/
    }
    
    function burgerColor(){
        if( scrollTop >= topAreaHeight ){
            $burger.add($logo).removeClass('onTop');
        }else{
            $burger.add($logo).addClass('onTop');
        }
    }
    
    function scrollToTop(){
        $('html,body').stop().animate({scrollTop:0});
    }
    
    
        
    // 이벤트 초기화
    function initEvent(){
        
        $(window).on('scroll',function(){
            scrollTop = $(window).scrollTop();
            
            showTitle();
            burgerColor();
            
        });
        
        $('h1').on('click',function(){
            scrollToTop();
        });
    }
    
    $(window).on('load',function(){
        init();
        initEvent();
        scrollTop = $(window).scrollTop();
        burgerColor();
        console.log(topAreaHeight);
    });
    
    
    $(window).on('resize',function(){
        topAreaHeight = $('.topArea').outerHeight();
        console.log(topAreaHeight);
    });
    
    
    
    
    
});


/*$(function(){
    
    // 전역변수 선언
    var $ani_elem = [];
    var ani_elemPos = [];
    var scrollTop = 0;
    
    // 전역에서 사용할 요소 초기화
    function init(){
    }
    
    // 함수

    
    function ain_checkElem(){
        $('.ani_elem').each(function(idx){
            
            $ani_elem[idx] = $(this);
            ani_elemPos[idx] = $(this).offset().top;
            
        });
    }
    
    function ani_showElem(){
        for (var i=0; i<ani_elemPos.length; i++){
            if(scrollTop >= ani_elemPos[i]) {
                console.log('ㅋㅋㅋ등장');
                TweenLite.to($ani_elem[i],1,{opacity:1});
            }
        }
    }
    
    function tl_show(){
        
    }
    
    
    
    // 이벤트 초기화
    function initEvent(){
        
        ain_checkElem();
        
        $(window).on('scroll',function(){
            scrollTop = $(this).scrollTop();
            ani_showElem();
        });
    }
    
    $(window).on('load',function(){
        init();
        initEvent();
    });
    
});*/