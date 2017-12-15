console.log('--->> header.js 시작합니닷 <<---');
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
                    'desc': ' 가상화폐 ICON 랜딩 페이지 ',
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
                        html += ' <img src="images/temp_'+obj[i].number+'.png" alt="'+obj[i].desc+'" class="work_image" /> ';
                
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
                            html += ' <a href=" work/work_'+ obj[i].link +'.html "></a> ';
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
    
    
    function showOriginalImg(){
        $('.item_link').on('click',function(evt){evt.preventDefault()});
    }
    
    
    
    $(window).on('load',function(){
        
        setTimeout(function(){
            removeLoading();
        },100);
        
        gnbMaker();
        footerMaker();
        
        workItemMaker();
        showOriginalImg();
    });
        
        
               
    
        
                
            
                  
                
           
        
    
    
    
});
console.log('--->> 커먼js 가장 하단입니다 <<---');