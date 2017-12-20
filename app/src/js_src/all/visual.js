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


