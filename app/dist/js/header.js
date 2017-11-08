console.log('---헤더js 시작합니당---');
$(function(){
    
    
    // 전역변수 선언
    var $menu = null;
    var $gnb = null;
    
    // 전역에서 사용할 요소 초기화
    function init(){
        $menu = $(".menu");
        $gnb = $(".gnb");
    }
    
    
    function menuOpen(){
        console.log('메뉴 열림!');
        $gnb.toggleClass('open');
        //$gnb.slideToggle();
        console.log('..이제 gnb의 높이는, '+$(".gnb").height());
    }
    
    
    function initEvent(){
        //메뉴 클릭 시 헤더 오픈
        $menu.on('click',function(){
            menuOpen();
        });
    }
    
    
    
    $(window).on('load',function(){
        init();
        initEvent();
        console.log('초기 gnb의 높이는, '+$(".gnb").height());
    });
    
});
console.log('---!! 헤더js 끗 !!---');