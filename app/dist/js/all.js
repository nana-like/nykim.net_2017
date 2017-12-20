$(function(){
    
    //로딩 이미지 제거
    function removeLoading(){
       $(".loading").fadeOut(800);
    }
    
    
    // GNB 생성 함수
    function gnbMaker(){
        
        var html = '';

        html += ' <div class="fixed"> ';
            html += ' <h1 class="logo"> ';
                html += ' <span class="text_hide">웹퍼블리셔 N의 포트폴리오</span> ';
                html += ' <div> ';
                    html += ' <svg class="title_logo" enable-background="new 0 0 240 236" version="1.1" viewBox="0 0 300 260" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"> ';
                    html += ' <polygon points="49 236 49 52.2 178.9 236 240 236 240 0 191 0 191 174.7 69.8 0 0 0 0 236" fill="#ffd40a"/> ';
                    html += ' </svg> ';
                html += ' </div> ';
            html += ' </h1> ';
            html += ' <div class="menu" role="button" tabindex="0"> ';
                html += ' <div class="menu_burger" tabindex="0"> ';
                    html += ' <div class="line line_01"></div> ';
                    html += ' <div class="line line_02"></div> ';
                    html += ' <div class="line line_03"></div> ';
                html += ' </div> ';
            html += ' </div> ';
        html += ' </div> ';
        html += ' <nav class="gnb" style="display:none"> ';
            html += ' <h2 class="text_hide">Navigation</h2> ';
            html += ' <ul class="nav"> ';
                html += ' <li class="menu_item"><a href="/">HOME.</a></li> ';
                html += ' <li class="menu_item menu_work"><a href="/#work">WORK.</a></li> ';
                html += ' <li class="menu_item menu_about"><a href="../about.html">ABOUT.</a></li> ';
            html += ' </ul> ';
            html += ' <div class="contact"> ';
                html += ' <a href="mailto:nykim@nykim.net" class="contact_link">  ';
                    html += ' <span class="contact_heading">MAIL</span>    ';
                    html += ' <span class="contact_info">nykim@nykim.net</span> ';
                html += ' </a> ';
                html += ' <a href="tel:01027285936" class="contact_link"> ';
                    html += ' <span class="contact_heading">PHONE</span>';
                    html += ' <span class="contact_info">82.10.2728.5936</span> ';
                html += ' </a> ';
                html += ' <a href="https://github.com/AnnYKim/" class="contact_link"> ';
                    html += ' <span class="contact_heading">GITHUB</span>  ';
                    html += ' <span class="contact_info">AnnYKim</span> ';
                html += ' </a> ';
            html += ' </div> ';
        html += ' </nav> ';


        $(".header").append(html);
    }
    
    
    // Footer 생성 함수
    function footerMaker(){
        var html = '';

        html += ' <h2 class="title footer_title">Let&acute;s start right Now!</h2> ';
        html += ' <p class="footer_text">작업 준비 완료됐습니다. 편하실 때 연락 주세요!</p> ';
        html += ' <address class="footer_address"> ';
            html += ' <a href="mailto:nykim@nykim.net" class="footer_link link_mail"> ';
                html += ' <span class="icon_circle"></span> ';
                html += ' <span class="footer_link_text"></span> ';
            html += ' </a> ';
            html += ' <a href="tel:01027285936" class="footer_link link_phone"> ';
                html += ' <span class="icon_circle"></span> ';
                html += ' <span class="footer_link_text"></span> ';
            html += ' </a> ';
        html += ' </address> ';
        html += ' <div class="footer_bottom"> ';
            html += ' <ul class="social"> ';
                html += ' <li class="social_item social_pinterest"><a href="https://www.pinterest.co.kr/ppphlox/" target="_blank">pinterest</a></li> ';
                html += ' <li class="social_item social_codepen"><a href="https://codepen.io/nykim_/" target="_blank">codepen</a></li> ';
                html += ' <li class="social_item social_github"><a href="https://github.com/AnnYKim" target="_blank">github</a></li> ';
            html += ' </ul> ';
            html += ' <p class="update">Last updated on November 7th, 2017</p> ';
            html += ' <p class="copyright">&copy; 2017 NY KIM</p> ';
        html += ' </div> ';

        $(".footer").append(html);
        
    }
    
    

    
    $(window).on('load',function(){
        
        setTimeout(function(){
            removeLoading();
        },100);
        
        gnbMaker();
        footerMaker();
        
    });
        
        
               
           
        
    
    
    
});
console.log('--->> header.js 시작합니닷 <<---');
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
$(function(){
    



    $(window).on('load resize',function(){
        

        // INITIATE THE FOOTER
      siteFooter();
        // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
       /* $(window).resize(function() {
            siteFooter();
        });*/

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
    
    $(window).on('load resize',function(){
        
                
        ////////////////////////////////
        // work_tiem의 높이 소수점 제거 //
        ///////////////////////////////
 /*       
        var workH = [];
        $(".work_item").each(function(i){
            workH[i] = $(this).height();
            $(this).height(workH[i]);
            $(this).children().height(workH[i]);
        });
        console.log(workH)*/
        
        //  사이즈 조절 시 이미지 크기에 맞춰 li크기도 줄어들어야 하는데 조절이 어려움 ㅠㅠㅓ이러마ㅣ너뱌ㅔ3@)$#)84
        
        ///////////////////////////////
        
    //문서 2/3이상 스크롤 시 맨 위/아래 버튼 전환 함수
	var scrollBottom = 0;
    var bodyHeight = $(document).height();
	var scrollOverBodyHeight = (bodyHeight/3)*2
	function toTop_or_toBottom(){
		scrollBottom = $(window).scrollTop()+$(window).height();
		if ( scrollBottom >= scrollOverBodyHeight ){
			$('.footer').addClass("on");
		}else{
			$('.footer').removeClass("on");
		}
	}
        
       $(window).on("scroll",function(){toTop_or_toBottom()}); 
        
     
        
    });



});

console.log('--->> visual.js 시작합니닷 <<---');
$(function(){
    
    // 전역변수 선언
    var tl_visual = null;
    var $title_text = null;
    var visualTxt = null;
    
    // 전역에서 사용할 요소 초기화
	
    $title_text = $(".title_text");
    visualTxt = ['unique', 'brilliant', 'notable', 'amazing', 'sparkling', 'unlimited'];
    function init(){
        tl_visual = new TimelineLite();
    }

    function visual_ani() {
        
        var $tree = {
            tr01 : $(".visual_tree01"),
            tr02 : $(".visual_tree02"),
            tr03 : $(".visual_tree03"),
            tr04 : $(".visual_tree04")
        };
        
        var $fog = {
            fg01 : $(".visual_fog01"),
            fg02 : $(".visual_fog02")
        }
        
        tl_visual
                .addLabel("label_01")
                .to(
                    $tree.tr02, //왼쪽 앞
                    3, //듀레이션
                    {left: -80, top: 80, ease: Power1.easeOut}
                )
                .to(
                    $tree.tr01, //왼쪽 뒤
                    4,
                    {left: -40, top: 40, ease: Power2.easeOut}, //왼쪽 아래로 이동
                    "label_01+=0.3"
                )
                .to(
                    $tree.tr04, //오른쪽 앞
                    3,
                    {right: -70, top: 70, ease: Power1.easeOut}, //오른쪽 아래로 이동
                    "label_01"
                )
                .to(
                    $tree.tr03, //왼쪽 뒤
                    4,
                    {right: -30, top: 30, ease: Power2.easeOut}, //왼쪽 아래로 이동
                    "label_01+=0.3"
                );
               /* .to(
                    $fog.fg01,
                    4,
                    {right: 60},
                    "label_01"
                );*/
        
    }
    
    
    function visualTitle_ani(){
	
        var index = Math.floor( Math.random()*visualTxt.length-1 );
        $title_text.text(visualTxt[index]);
        visualTitleFindN(); 
        
        setInterval(function(){
            var oldIndex = index;
            index = Math.floor( Math.random()*visualTxt.length-1 );
            if (oldIndex === index) {
                index++;
            }
            if (index < 0) {
                index = 0;
            }
            console.log('인덱스',index);
            $title_text.text(visualTxt[index]);
            visualTitleFindN(); 
        },4300);
        
	}
    
    function visualTitleFindN(){
        
        
        
        $title_text.html( //비주얼 타이틀 쪼개기
            $title_text.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;")
        );
        
        $title_text.children().each(function(){ //N을 찾아서 i 태그로 감싸기
            if($(this).text().indexOf('N')>-1 || $(this).text().indexOf('n')>-1){
                $(this).wrapInner('<i></i>');
            }
        });
        
    }
    
    
    
    ////////////////////////////////////////////////
   
/* 
    function visualTitle_ani(){
        var visualTitleArr = [];
        var idx = 0;
        
        for (var i=0; i<$('.title_text').children().length; i++){
            
            visualTitleArr[i] = $('.title_text').children().eq(i);
        }
        
        function animation(){
            TweenLite.to(visualTitleArr[idx],1.2,{opacity:0});
        }
        
        setInterval(function(){
            if(idx<visualTitleArr.length){
                TweenLite.to(visualTitleArr[idx],1,{opacity:1, left:-10, ease: Power2.easeOut});
                idx++;
            }
        },100);
         //기존 텍스트 애니메이션
        
    }
*/



    
    ////////////////////////////////////////////////
    
    function visualLogo_ani(){
        
        $logo = $(".visual_title .title_logo");
        TweenLite.to($logo,2,{opacity:1});
        
    }
    
    
    function initEvent(){
        

        
    }
    
    
    
    $(window).on('load',function(){
        
        init();
        
        
        setTimeout(function(){
            visualLogo_ani();
        },800); 
        setTimeout(function(){
            visualTitle_ani();
        },1200); 
        setTimeout(function(){
            visual_ani();  
        },1000); 
        
    });
    
    
    
    
    
    
    
 
    console.log('--->> visual.js 끝났습니닷 <<---');
});
console.log('---!! 비주얼js 가장 하단의 코드입니다 !!---');





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
    
    function scrollTo(where){
            $('html,body').stop().animate({scrollTop:where});
        
    }
    
        
    // 이벤트 초기화
    function initEvent(){
        
        $(window).on('scroll',function(){
            scrollTop = $(window).scrollTop();
            
            showTitle();
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
$(function(){


    
    // Work Item 생성 함수
    function workItemMaker(){
        
      
        
        var obj = {
            "list_01" :
                {
                    'number': twolength(0),
                    'title': 'Coinone Admin',
                    'desc': '코인원의 관리자 계정 페이지'
                },
            "list_02" : 
                {
                    'number': twolength(1),
                    'title': '3M HCA',
                    'desc': '3M 제품 사용자를 위한 플랫폼'
                },
            "list_03" : 
                {
                    'number': twolength(2),
                    'title': 'Old Portfolio',
                    'desc': '과거 포트폴리오 (반전매력!)',
                    'link': 'old'
                },
            "list_04" : 
                {
                    'number': twolength(3),
                    'title': 'SBI BANK',
                    'desc': 'SBI저축은행 하이브리드앱 '
                },
            "list_05" : 
                {
                    'number': twolength(4),
                    'title': ' ICON LANDING',
                    'desc': ' 가상화폐 ICON 랜딩 페이지 (반응형)',
                    'link': 'icon'
                },
            "list_06" : 
                {
                    'number': twolength(5),
                    'title': ' 3M VR ',
                    'desc': ' 가상현실 체험 예약 페이지 '
                }
        };
        
        
        function twolength(n) { //인덱스에 1을 더하고 두 자리수로 만듦
          var n = parseInt(n+1);
          return (n < 10 ? '0' : '') + n;
        }
        
        
        function showItems(){
            
            var myTurn = 0; //아이템이 삽입될 컬럼의 인덱스
            
            for (var i in obj) {
                
                var html = '';
                
                 html += ' <div class="work_item"> ';
                    html += ' <figure> ';
                        html += ' <img src="images/thumb_'+obj[i].number+'.png" alt="'+obj[i].desc+'" class="work_image" /> ';
                
                        if (obj[i].hasOwnProperty('link')) {
                             // link 프로퍼티가 있는 경우 external 클래스 추가
                             html += ' <figcaption class="work_caption external"> ';
                        }else{
                             html += ' <figcaption class="work_caption"> ';
                        }
                
                            html += ' <div class="caption_textWrap"> ';
                                html += ' <strong class="caption_title">'+obj[i].title+'</strong> ';
                                html += ' <p class="caption_desc">'+obj[i].desc+'</p> ';
                            html += ' </div> ';
                
                        if(obj[i].hasOwnProperty('link')){ //link 프로퍼티가 있는 경우 링크 주소 변경
                            html += ' <a href=" work/view_'+ obj[i].link +'/index.html " target="_blank"></a> ';
                        }else{
                            html += ' <a href=" work/work_'+ obj[i].number +'.html "></a> ';
                        }
                            
                        html += ' </figcaption> ';
                    html += ' </figure> ';
                html += ' </div> ';
                
                
               $(".work_list .column").eq(myTurn).append(html); //인덱스 번호에 맞춰 아이템 삽입
                
               if(myTurn<$(".work_list .column").length-1){ //컬럼 개수에 맞춰 인덱스 증가
                   myTurn++;
               }else{
                   myTurn = 0;
               }
                
            } //end of for (var i in obj)

        }

        showItems();
    }
    
    
    
    
    $(window).on('load',function(){
        
        workItemMaker();
    });
        
        


});