/*common.js*/
$(function(){
    
    //로딩 이미지 제거
    function removeLoading(){
       $(".loading").fadeOut(800);
       //$(".loading").css({'z-index':'-100'});
    }
    
    
    // GNB 생성 함수
    function gnbMaker(){
        
        var html = '';

        html += ' <div class="fixed"> ';
            html += ' <h1 class="logo"> ';
                html += ' <span class="text_hide">N의 포트폴리오</span> ';
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
            html += ' <p class="update">Last Updated On December 28th, 2017</p> ';
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
        
        
               
           
        
    console.log('안녕하세요! :D');
    
    
});
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


/*footer.js*/
$(function(){
    



    $(window).on('load resize',function(){
        

      siteFooter();

        function siteFooter() {
            var siteContent = $('.contents');
            var siteContentHeight = siteContent.height();
            var siteContentWidth = siteContent.width();

            var siteFooter = $('.footer');
            var siteFooterHeight = siteFooter.height();
            var siteFooterWidth = siteFooter.width();

            siteContent.css({
                "margin-bottom" : siteFooterHeight
            });
        };




    });
    
    $(window).on('load resize',function(){
        

        
    //문서 2/3이상 스크롤 시 on클래스 부여
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


/*
   [ sub.js ]
   
   2018.05.05
   nykim@nykim.net

   서브페이지(work_**.html) 내용을 자동으로 생성합니다.
   이제 jQuery의 한계를 느낀드아앍@#$!@

*/



// ======================================


/* 
    [!] 서브 페이지 내용 설정 
*/

var customSubPage = {
    
    
    '코인원': 
        {
            'number': 1, //몇 번째 sub페이지가 될 지 설정합니다.
            'name': 'coinone', //폴더 및 이미지의 이름입니다. CSS 스타일링 역시 반드시 이 이름으로 지정해야 합니다.
            
            'title': 'Coinone Admin', //hero 화면의 타이틀
            'client': 'Coinone', //클라이언트
            'role': 'UI Development & Design', //역할
            'percent': '(100% &middot; 70%)', //기여도
            'viewCode': true, //true=코드 링크 있음, false=코드 링크 없음
            
            'detailTitle': '웹퍼블리싱 & 웹디자인 | 구축',
            'detailInfo' : [
                '코인원의 어드민 유저를 위해 만든 관리자 페이지입니다.<br/> 디자이너의 시안 없이, 컬러 가이드만 있는 상태에서 UI 개발을 진행했기에 기억에 남는 작업입니다.<br/>',
                '기획서를 보면서 바로 작업했기 때문에 제가 할 수 있는 범위가 넓어 즐겁게 작업할 수 있었습니다.<br/> 어드민 페이지이기 때문에 디자인 자체보다는 UX 측면을 중시하려 했고,<br/> 일부 요소들은 문구나 위치 선정에 있어 기획자와 디자이너의 의견을 물어가며 바꿔보기도 했습니다.<br/>',
                '또, 공통된 디자인 요소가 많았기 때문에 SASS 모듈화를 도입하였습니다.<br/> 주요 컬러는 변수에 넣고, 버튼 스타일은 mixin으로 만들어 빠르게 재사용할 수 있도록 했습니다.'
            ],
        },
    
    
    'AR GEAR':
        {
            'number': 2,
            'title': 'AR GEAR',
            'name': 'arGear',
            'client': 'AR GEAR',
            'role': 'UI Development',
            'percent': '(100%)',
            'viewCode': true, 
            'detailTitle': '웹퍼블리싱 | 구축',
            'detailInfo' : [
                'AR GEAR입니다.'
            ],
        },
    
    
    '스테이지':
        {
            'number': 3,
            'name' : 'stayge',
            'title': 'STAYGE One',
            'client': 'STAYGE',
            'role': 'UI Development',
            'percent': '(100%)',
            'viewCode': false, 
            'detailTitle': '웹퍼블리싱 | 구축',
            'detailInfo' : [
                '스테이지 원이당'
            ],
        },
    
    
//    'test':
//        {
//            'number': 0,
//            'name': '',
//
//            'title': '',
//            'client': '',
//            'role': '',
//            'percent': '',
//            'viewCode': false, 
//
//            'detailTitle': '',
//            'detailInfo' : [
//            ],
//        },


    }


// ======================================


function generateSubPage(){
    
    var num = parseInt($(".wrap").data("sub").substr(5,1));
    var maxNum = Object.keys(customSubPage).length;
    
    for (var i in customSubPage) {
        
        if(customSubPage[i].number == num){
            
            console.log("!!!");
            console.log(customSubPage[i])
            
            // --
            // hero 화면 생성
            var html_hero = '';
            
            html_hero += '<div class="inner">';
                html_hero+= '<h2 class="hero_title">'+customSubPage[i].title+'<i class="hero_title_sm"> <span class="text_hide_m">featured</span> work #'+customSubPage[i].number+'</i></h2>';
                html_hero+= '<div class="hero_top"><p class="info_heading info_client">CLIENT<span class="info_text">'+customSubPage[i].client+'</span></p><p class="info_heading info_role">ROLE<span class="info_text">'+customSubPage[i].role+'<i class="info_percentage">'+customSubPage[i].percent+'</i></span></p></div>';
                html_hero+= '<div class="hero_center">';
            
                if (customSubPage[i].viewCode === true) { //viewCode 프로퍼티가 true라면 링크 추가
                     html_hero += '<a href="view_'+customSubPage[i].name+'/index.html" target="_blank" class="hero_link btn_effect"><span>VIEW CODE</span></a>';
                     html_hero+= '<p class="hero_scroll">or just scroll down to see screenshots!</p>';
                }else{
                    html_hero+= '<p class="hero_scroll">Scroll down to see screenshots!</p>';
                }

                html_hero+= '</div>';
            html_hero += '</div>';
            
            
            // --
            //detail top 화면 생성
            
            var html_detailTop = '';
            
            html_detailTop += '<h2 class="detail_title">WebPub. <i class="detail_title_sm">'+customSubPage[i].detailTitle+'</i></h2>';
            html_detailTop += '<div class="detail_info"> <p class="detail_info_text">';
            
            for (var x=0; x < customSubPage[i].detailInfo.length; x++){
                html_detailTop += customSubPage[i].detailInfo[x];
                html_detailTop += '<span class="ly_mt_sm"></span>';
            }
            
            html_detailTop += '<span class="detail_line"></span>';
            html_detailTop += '</p></div>';
            
            
            // --
            //detail main 화면에 alt 삽입 (lazyload 때문에 이미지는 html에 직접 작성하기로 함...)
            
            $(".shots_item_img").attr("alt",customSubPage[i].title+' Image');
            
            
            // --
            //detail bottom 화면 생성
            var html_detailBottom = '';
            html_detailBottom += '<div class="bottom_inner">';
            
            var prevNum = 0;
            var nextNum = 0;
            
            (num <= 1)? prevNum = maxNum : prevNum = (num - 1);
            (num >= maxNum)? nextNum = 1 : nextNum = (num + 1);
            
            html_detailBottom += '<a href="work_0'+prevNum+'.html" class="detail_btn prev"><span class="detail_btn_title">WORK #'+prevNum+'</span>Prev.</a>';
            
             if (customSubPage[i].viewCode === true){ 
                 html_detailBottom += '<a href="view_'+customSubPage[i].name+'/index.html" target="_blank"  class="detail_link btn_effect"><span>view code</span></a>';
            }
            
            
            
            html_detailBottom += '<a href="work_0'+nextNum+'.html" class="detail_btn next"><span class="detail_btn_title">WORK #'+nextNum+'</span>Next.</a>';
            html_detailBottom += '</div>';
            
            
            $(".hero").append(html_hero);
            $(".detail_top").append(html_detailTop);
            $(".detail_bottom").append(html_detailBottom);
            $(".wrap").addClass(customSubPage[i].name);
            
            
        }
    }
}


$(window).on("load",function(){
    
    if (!$(".wrap").data('sub')){
      return false;
    }else{
      generateSubPage(); 
    }
    
});
