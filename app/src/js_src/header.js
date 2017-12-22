$(function(){
    
    
    // 전역변수 선언
    var $body = null;
    var $burger = null;
    var $gnb = null;
    var $gnb_item = null;
    var tl_nav_show = null;
    var isOnTop = false;
    
    // 전역에서 사용할 요소 초기화
    function init(){
        $body = $("body");
        $burger = $(".menu");
        $gnb = $(".gnb");
        $gnb_item = $(".menu_item");
        
        tl_nav_show = new TimelineLite({paused:true, reversed:true});
        
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
                0.7, //듀레이션
                {opacity: 0, top: 20}, //애니메이션
                0.2, //간격
                "menuOpen+=0.4"
            )
            .addLabel("menuShow")
            .from( //하단 contact 정보 보이기
                $contact, //대상
                0.5, //듀레이션
                {opacity: 0}, //애니메이션
                "menuShow-=0.32" //시간 조절
            );
        
        
    }
    
    function openBurgerMenu(){
            $gnb.addClass('open'); //GNB배경 보이기
            $burger.addClass('open'); //버거 아이콘 바꾸기
            if($burger.hasClass('onTop')==true){ //onTop클래스가 있으면 제거
                isOnTop = true;
                $burger.removeClass('onTop');
            }
            tl_nav_show.play().timeScale(1); //애니메이션 실행
            $gnb.addClass('open'); //GNB배경 보이기
            preventScroll();
        
            function preventScroll(){
                $("html").addClass("no_scroll");
                $(".wrap").css({"margin-right":scrollBarWidth()}); 
                $(".footer").css({width:"calc(100% - "+scrollBarWidth()+"px)"}); 
                $(".menu").css({right:'+='+scrollBarWidth()});
            }
        
        	//브라우저별로 달라지는 스크롤바 너비 구하기
            function scrollBarWidth() {
                document.body.style.overflow = 'hidden'; 
                var width = document.body.clientWidth;

                document.body.style.overflow = 'scroll'; 
                width -= document.body.clientWidth; 

                if(!width) width = document.body.offsetWidth - document.body.clientWidth;

                document.body.style.overflow = ''; 

                return width; 
            }

        
        
    }
    
    function closeBurgerMenu(){
        
           function allowScroll(){
                $(".wrap, .menu, .footer").removeAttr("style");
                $("html").removeClass("no_scroll");
           }
        
           $burger.removeClass('open'); //버거 아이콘 바꾸기
        
           tl_nav_show.reverse().timeScale(1.8); //애니메이션 실행
        
           setTimeout(function(){
               $gnb.removeClass('open'); //GNB배경 숨기기

               if(isOnTop==true){ //메뉴를 열 때 onTop클래스가 있었으면 다시 추가
                   isOnTop = false;
                   $burger.addClass('onTop');
               }
           },300);
        
           setTimeout(function(){
               allowScroll();
               
           },520);
        
    }
    
    
    function initEvent(){
        
        $gnb.show();
        
        //타임라인 애니메이션 (GSAP)
        timeline_nav();
        
        //메뉴 클릭 시 헤더 오픈/클로즈
        $burger.on('click',function(evt){
           evt.preventDefault();
            
           tl_nav_show.reversed() ? openBurgerMenu() : closeBurgerMenu();
            
           if(!$gnb.hasClass('open')){
               $burger.removeClass('open');
           }
        });
        
        //메뉴 아이템 클릭 시 버거 닫고 이동
        $gnb_item.on('click',function(evt){
            var href = $(this).children('a').attr('href');
            console.log(href);
            evt.preventDefault();
            closeBurgerMenu();
                setTimeout(function(){
                   window.location.href = href;
                }, 600);
        });
    }
    
    
    
    $(window).on('load',function(){
        init();
        initEvent();
    });
    
});

