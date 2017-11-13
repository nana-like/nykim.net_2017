console.log('--->> header.js 시작합니닷 <<---');
$(function(){
    
    
    // 전역변수 선언
    var $menu = null;
    var $gnb = null;
    var tl_nav_show = null;
    //var tl_nav_hide = null;
    
    // 전역에서 사용할 요소 초기화
    function init(){
        $menu = $(".menu");
        $gnb = $(".gnb");
        
        tl_nav_show = new TimelineLite({paused:true, reversed:true});
        //tl_nav_hide = new TimelineLite({paused:true});
        
    }
    
    function timeline_nav(){
        
        var $nav = $(".nav");
        var $menu = {
            item_1 : $nav.children().eq(0),
            item_2 : $nav.children().eq(1),
            item_3 : $nav.children().eq(2)
        };
        var $contact = $nav.next();
        
        tl_nav_show
            .addLabel("menuOpen")
            .staggerFrom( //네비 리스트 보이기
                [$menu.item_1, $menu.item_2, $menu.item_3], //각 아이템 및 순서
                0.6, //듀레이션
                {opacity: 0, top: 20}, //애니메이션
                0.16, //간격
                "menuOpen+=0.5"
            )
            .addLabel("menuShow")
            .from( //하단 contact 정보 보이기
                $contact, //대상
                0.7, //듀레이션
                {opacity: 0}, //애니메이션
                "menuShow-=0.15" //시간 조절
            );
        
        
    }
    
    
    function initEvent(){
        //메뉴 클릭 시 헤더 오픈/클로즈
        $menu.on('click',function(){
            $gnb.toggleClass('open');
            tl_nav_show.reversed() ? tl_nav_show.play() : tl_nav_show.pause(0).reversed(true);
        });
    }
    
    
    
    $(window).on('load',function(){
        init();
        initEvent();
        timeline_nav();
            
    });
    
    console.log('--->> header.js 끝났습니닷 <<---');
});
console.log('---!! 헤더js 가장 하단의 코드입니다 !!---');




/*
$(function(){
    
    
    // 전역변수 선언
    var $menu = null;
    var $gnb = null;
    var tl_nav_show = null;
    var tl_nav_hide = null;
    
    // 전역에서 사용할 요소 초기화
    function init(){
        $menu = $(".menu");
        $gnb = $(".gnb");
        
        tl_nav_show = new TimelineLite({paused:true, reversed:true});
        tl_nav_hide = new TimelineLite({paused:true});
        
    }
    
    function timeline_nav(){
        var $nav = $(".nav");
        var $menu = {
            item_1 : $nav.children().eq(0),
            item_2 : $nav.children().eq(1),
            item_3 : $nav.children().eq(2)
        };
        var $contact = $nav.next();
        
        tl_nav_show
            .staggerTo( //네비 리스트 보이기
                [$menu.item_1, $menu.item_2, $menu.item_3], //각 아이템 및 순서
                0.8, //듀레이션
                {opacity: 1, top: -20}, //애니메이션
                0.2 //간격
            )
            .addLabel("menuShow")
            .to( //하단 contact 정보 보이기
                $contact, //대상
                1, //듀레이션
                {opacity: 1}, //애니메이션
                "menuShow-=0.2" //시간 조절
            );
        
        
    }
    
    
    function menuOpen(){
        console.log('메뉴 열림!');
        
        
        
        $gnb.addClass('open');
        
        
            setTimeout(function(){
                tl_nav_show.restart();
            },500);
        
    }
    
    function menuClose(){
        console.log('메뉴 닫아야징');
       $gnb.removeClass('open');
        $('.menu_item').removeAttr("style");
    }
    
    
    function initEvent(){
        //메뉴 클릭 시 헤더 오픈/클로즈
        $menu.on('click',function(){
            if($gnb.hasClass('open')){
                console.log('--메뉴클로즈 함수 발동--');
                menuClose();
            }else{
                console.log('--메뉴오픈 함수 발동--');
                menuOpen();
            }
        });
    }
    
    
    
    $(window).on('load',function(){
        init();
        initEvent();
        timeline_nav();
            
    });
    
    console.log('--->> header.js 끝났습니닷 <<---');
});
console.log('---!! 헤더js 가장 하단의 코드입니다 !!---');*/