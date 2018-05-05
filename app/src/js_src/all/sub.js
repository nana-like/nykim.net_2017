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
