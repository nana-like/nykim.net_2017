

    
/*    function showElem(){
        $('.ani_show').each(function(){
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).height();
            
            if ( windowBottom > objectBottom ) {
                console.log('발동!!');
                TweenLite.to($(this),1,{opacity:1});
            }
        });
    }
    */



$(function(){
    
    
     function showElem(){
        $("[data-ani]").each(function(){
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + ( $(window).height() / 1.5);
            
            if ( windowBottom > objectBottom ) {
                console.log('발동!!');
                TweenLite.to($(this),1,{className:'+=on', top:-10});
            }
        });
    }
    
    
        
    // 이벤트 초기화
    function initEvent(){
        
        $(window).on('scroll',function(){
            showElem();
        });
    }
    
    $(window).on('load',function(){
        //$("[data-ani]").css({border:'3px solid red'})
        initEvent();
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