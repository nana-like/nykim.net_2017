

$(function(){
    
    
    
    // -----------------------------------------------
    
    /*
        Detect IE to add class name
    */
    //  IE를 판단하여 클래스를 추가

    var version = detectIE();

    if (version === false) {
       $("html").addClass("browser_modern"); //IE가 아니라면 'browser_modern' 클래스 추가
    } else {
       $("html").addClass("browser_ie"); //IE라면 'browser_ie' 클래스 추가
    }

    function detectIE() {
      var ua = window.navigator.userAgent;

      var msie = ua.indexOf('MSIE ');
      if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      }

      var trident = ua.indexOf('Trident/');
      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      var edge = ua.indexOf('Edge/');
      if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      }

      // other browser
      return false;
    }
    
        
    // -----------------------------------------------    

    /*
        Check mobile
    */
    //  모바일 접속인지 체크하여 클래스 추가

    var isMobile = false;
    
    function checkMobible(){
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          $("html").addClass("mobile");
          $lyrics_link.addClass('show');
          isMobile = true;
        }
    }
    
    
    // -----------------------------------------------    

    /*
        Insert <i></i> into lyrics
    */
    //  가사에 여백을 위한 i 태그 추가
    
     function insertItag(){
         var str = $(".lyrics").html();
         var regex = /<br\s*[\/]?>/gi;
         $(".lyrics").html(str.replace(regex, "<i></i><br/>"));
     }
    
    
    
    // -----------------------------------------------    

    /*
        Show visual image and title
    */
    //  상단의 비주얼 이미지 및 타이틀 보여주기
    
    function showVisual(){
        
        var $visual_image = $(".visual_image");
        
       $visual_image.animate({opacity:1}, 1500, function(){ //비주얼 이미지 glitch 효과
           $(this).addClass("on");
           $(".title_text").addClass("on");
       });
        
       /*setTimeout(function(){ //5초가 지나면 glitch효과 제거
           $visual_image.removeClass('on');
       },5000);*/
        
     }
    
    
    
    // -----------------------------------------------    

    /*
        Show lyrics which is click-able
    */
    //  클릭 가능한 가사 배경색 보여주기
    
    var $lyrics_link = $(".lyrics_link");
    
    function showLyrics(){
    
        if(isMobile === true){ //모바일에선 성능 향상을 위해 효과 없이 처음부터 나타남
            return false; 
        }
        

        $(".lyrics_link").each(function(){
            
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + ( $(window).height() / 1.5);
            
            if ( windowBottom > objectBottom ) {
                
                if(!$(this).hasClass("show")){
                    $(this).addClass("show");
                }
            }
        });
     }
    
    
    
    
    // -----------------------------------------------    

    /*
        Particle JS Config
    */
    // 파티클 설정
    
    function particleJs(){
        particlesJS("particles-js", {
          "particles": {
            "number": {
              "value": 120,
              "density": {
                "enable": true,
                "value_area": 2500
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.6,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 0.6,
                "opacity_min": 0.21,
                "sync": false
              }
            },
            "size": {
              "value": 1.3,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 3,
                "size_min": 21.08,
                "sync": true
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 0.8,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": false,
                "mode": "bubble"
              },
              "onclick": {
                "enable": false,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 36.54,
                "size": 1.6,
                "duration": 3.16,
                "opacity": 0.9,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
    }
    
    
    // -----------------------------------------------    

    /*
        Scroll Event
    */
    //  스크롤 이벤트

    var waiting = false, endScrollHandle;
    $(window).on("scroll",function(){
        
        if (waiting) {
            return;
        }
        waiting = true;

        // clear previous scheduled endScrollHandle
        clearTimeout(endScrollHandle);

        showLyrics();

        setTimeout(function () {
            waiting = false;
        }, 100);

        // schedule an extra execution of scroll() after 200ms
        // in case the scrolling stops in next 100ms
        endScrollHandle = setTimeout(function () {
            showLyrics();
        }, 200);
    });

    // -----------------------------------------------    

    /*
        Show Lyrics Info
    */
    // 가사 정보 보여주기
    
    
    var $contents = $("div.contents");
    var $contents_btm = $contents.children("div.contents_btm");
    var $contents_popup = $("div.contents_popup");
    var $popup_line = $contents_popup.children(".popup_line");
    var $popup_info = $contents_popup.children(".popup_info");
    var $popup_lyrics = $popup_info.children(".popup_lyrics");
    var $popup_arrow = $(".popup_arrow");
    var $btn_popupClose = $("a.popup_close");
    
    var contBtmOffset = $contents_btm.offset().top;
    var contBtmHeight = $contents_btm.height();
    var popupHeight = $contents_popup.height(); //팝업 높이
    var popupPos_maximum = (contBtmHeight - popupHeight); //팝업의 최대 top값
    var popupPos = 0;
    var lyricsIdx = null; //선택한 lyrics의 인덱스 번호를 담을 변수
    var lyricsIdx_old = null;
    var lyricsText = null; //클릭한 가사의 텍스트 정보를 담을 변수
    
    function showLyricsInfo(){
        var contH = $('.contents').height();
    
        
        $(document).on ("click", ".lyrics_link", function (evt) {
            evt.preventDefault(); 
            
            var winHeight = $(window).height();
            var scrollTop = $(window).scrollTop(); //클릭한 순간의 스크롤 위치
            var maximunScrollTop = $(document).height() - winHeight;
            popupPos = scrollTop - contBtmOffset; //팝업의 위치
            var lyricsPosition = $(this).position().top;
            
            //lyricsIdx_old = lyricsIdx; //인덱스 번호
            //lyricsIdx_old = null;
            
            
            lyricsIdx = $('.lyrics_link').index($(this));
            
            $(this).addClass('on');
            
            lyricsText = $(this).html(); //텍스트값 가져와 넣기
            $popup_lyrics.empty().append(lyricsText);
            
            if (lyricsIdx_old === lyricsIdx) {
                return false;
            }
            
            $contents_popup.css({'visibility':'visible'});
            
            //console.log('Current scrlltop=', scrollTop);
            //console.log('Contents Height=', contH);
            //console.log('Maximum scrolltop=', maximunScrollTop);
            //console.log('Popup position=',popupPos);
            
            
            
            if( isMobile === true ){ //모바일 접속 시
                
                
                $contents_popup.css({'top': 0 }); //위치 강제 조절
                $("html").addClass("no_scroll"); //스크롤 방지
            
                 if ($contents_popup.hasClass('on')){
                    hideLyricsInfo();
                    setTimeout(function(){
                            $contents_popup.addClass('on'); //팝업창
                            $btn_popupClose.addClass('on'); //팝업 닫기 버튼
                    },300);
                }else{
                    $contents_popup.addClass('on'); //팝업창
                    $btn_popupClose.addClass('on'); //팝업 닫기 버튼
                }
                

                
            }else{ //PC 접속 시
                
                $popup_arrow.css({'top':lyricsPosition}); //화살표 위치 조절

                $contents_popup.css({'top': lyricsPosition }); //[ 180103 ] 화살표 위치에 맞춰 팝업 위치 고정하기로 수정 (뷰포트 X)
                
                var cont_padding = popupHeight - (contBtmHeight - lyricsPosition); //팝업이 아래에 위치하면 그 값만큼 콘텐츠에 padding-bottom 추가
                
                if (cont_padding < 0 ){
                    cont_padding = 0; 
                }
                
                $contents.css({'padding-bottom':cont_padding});
                
                
                if ($contents_popup.hasClass('on')){
                    hideLyricsInfo();
                    setTimeout(function(){
                        $contents_popup.addClass('on'); //팝업창
                    },300);
                }else{
                    hideLyricsInfo();
                    setTimeout(function(){
                        $contents_popup.addClass('on'); //팝업창
                    },300);
                }
                
                $('.lyrics_link').eq(lyricsIdx).addClass('on');
            }
            
           
            
            lyricsIdx_old = lyricsIdx; //인덱스 번호
            
            
        });
    
    }
    

    
    // -----------------------------------------------    

    /*
        Hide Lyrics Info
    */
    // 가사 정보 닫기
    

    function hideLyricsInfo(){
        $("html").removeClass("no_scroll");
        $contents_popup.removeClass('on');
        $btn_popupClose.removeClass('on');
        $('.lyrics_link').removeClass('on');
        setTimeout(function(){
            $contents_popup.css({'visibility':'hidden'});
            $popup_info.scrollTop(0);
            lyricsIdx_old = null;
        },80);
        
    }

    $btn_popupClose.on('click',function(evt){ //버튼 눌러 닫기
        evt.preventDefault();
        hideLyricsInfo();
    });


    var $popup_layer = $(".popup_layer");
    $popup_layer.on('click',function(evt){ //레이어 눌러 닫기
        evt.preventDefault();
        hideLyricsInfo();
    });

    

    
    $(window).on('load',function(){
        
        
        checkMobible(); //모바일 체크
        showVisual(); //비주얼 등장
        insertItag(); //가사에 여백을 위한 i 태그 추가
        showLyrics(); //가사 배경색 표시
        particleJs(); //파티클 표현
        showLyricsInfo();
        
        
        
        
    });
    
    
    
    /////////////////// TEST ///////////////////

    ////////////////////////////////////////////
    // 레이아웃이 제대로 나오는지 확인하기 위한
    // 테스트용 스크립트이니 지워 주세요 :)
    ////////////////////////////////////////////


    //가사 내용 가져오기
    $(".track_item").eq(0).click(function(evt){
        evt.preventDefault();
        $.ajax({url: "track1_lyrics.html", success: function(result){
           $(".lyrics").html(result);
            $(".song_title").text('테스트입니당');
           $(".track_item").eq(0).addClass('on').siblings().removeClass('on');
            insertItag();
        }});
    });
    


    //가사 정보 가져오기    
    $.getJSON( "test.json", function( data ) {
      var items = [];
      $.each( data, function( key, val ) {
        items.push(val);
      });

        $(document).on ("click", ".lyrics_link", function (evt) {
            evt.preventDefault();
                var num = $(this).data('test');
                $(".popup_desc").empty().append(items[num]);

        });
    });

    
    /////////////////// TEST ///////////////////
    
    

});










