console.log('--->> header.js 시작합니닷 <<---');
$(function(){
    
    
    
    // GNB 생성 함수
    function gnbMaker(){
        
        var html = '';

        html += ' <div class="fixed"> ';
            html += ' <h1 class="logo"> ';
                html += ' <span class="text_hide">웹퍼블리셔 N의 포트폴리오</span> ';
                html += ' <a href="#"> ';
                    html += ' <svg class="title_logo" enable-background="new 0 0 240 236" version="1.1" viewBox="0 0 300 260" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"> ';
                    html += ' <polygon points="49 236 49 52.2 178.9 236 240 236 240 0 191 0 191 174.7 69.8 0 0 0 0 236" fill="#ffd40a"/> ';
                    html += ' </svg> ';
                html += ' </a> ';
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
                html += ' <li class="menu_item"><a href="#">HOME.</a></li> ';
                html += ' <li class="menu_item"><a href="#">WORK.</a></li> ';
                html += ' <li class="menu_item"><a href="#">ABOUT.</a></li> ';
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
                html += ' <li class="social_item social_pinterest"><a href="https://www.pinterest.co.kr/ppphlox/">pinterest</a></li> ';
                html += ' <li class="social_item social_codepen"><a href="#">codepen</a></li> ';
                html += ' <li class="social_item social_github"><a href="#">github</a></li> ';
            html += ' </ul> ';
            html += ' <p class="update">Last updated on November 7th, 2017</p> ';
            html += ' <p class="copyright">&copy; 2017 NY KIM</p> ';
        html += ' </div> ';

        $(".footer").append(html);
        
    }
    
    

    
    // Work Item 생성 함수
    function worItemMaker(){
        
      
        
        var obj = {
            "workitem" : [
                {
                    'number': twolength(0),
                    'title': 'Coinone Admin',
                    'desc': '코인원의 관리자 계정 페이지'
                },
                {
                    'number': twolength(1),
                    'title': '3M HCA',
                    'desc': '3M 제품 사용자를 위한 플랫폼'
                }
            ]
        }
        
        
        function twolength(n) { //인덱스에 1을 더하고 두 자리수로 만듦
          var n = parseInt(n+1);
          return (n < 10 ? '0' : '') + n;
        }
        
        
        function showItems(){
            var html = '';
            

            // object는 JSON 방식으로 워크 아이템 정보를 담을 듯
            // (for x in obj) 를 써서 루프 돌려서 출력하는 코드 작성!
            

            html += ' <div class="work_item"> ';
                html += ' <figure> ';
                    html += ' <img src="images/temp_'+obj.workitem[0].number+'.png" alt="'+obj.workitem[0].desc+'" class="work_image" /> ';
                    html += ' <figcaption class="work_caption"> ';
                        html += ' <div class="caption_textWrap"> ';
                            html += ' <strong class="caption_title">'+obj.workitem[0].title+'</strong> ';
                            html += ' <p class="caption_desc">'+obj.workitem[0].desc+'</p> ';
                        html += ' </div> ';
                        html += ' <a href="#"></a> ';
                    html += ' </figcaption> ';
                html += ' </figure> ';
            html += ' </div> ';

            //console.log(html);
            $(".work_list .column:last").append(html);

        }

        showItems();
    }
    
    
    $(window).on('load',function(){
        gnbMaker();
        footerMaker();
        
        worItemMaker();
    });
        
        
               
    
        
                
            
                  
                
           
        
    
    
    
});
console.log('--->> 커먼js 가장 하단입니다 <<---');