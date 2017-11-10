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
       // $gnb.toggleClass('open');
        
        var $nav = $(".nav");
        var $menu = {
            item_1 : $nav.children().eq(0),
            item_2 : $nav.children().eq(1),
            item_3 : $nav.children().eq(2)
        };
        var $contact = $nav.next();
        
        var tl_nav = new TimelineLite();
        
        tl_nav
            .staggerFrom( 
                [$menu.item_1, $menu.item_2, $menu.item_3], //각 아이템 및 순서
                0.8, //시간
                {opacity: 0, top: 20}, //애니메이션
                0.2 //간격
            )
            .addLabel("menuShow")
            .from(
                $contact,
                1,
                {opacity: 0},
                "menuShow-=0.25"
            );
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
    });
    
});
console.log('---!! 헤더js 끗 !!---');