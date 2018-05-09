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
        
        //workItemMaker();
    });
        
        


});