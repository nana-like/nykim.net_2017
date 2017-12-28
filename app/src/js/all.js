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
        console.log(topAreaHeight);
    });
    
    
    
    
    
});

