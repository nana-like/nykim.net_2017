console.log('--->> visual.js 시작합니닷 <<---');
$(function(){
    
    // 전역변수 선언
    var tl_visual = null;
    
    // 전역에서 사용할 요소 초기화
    function init(){
        tl_visual = new TimelineLite();
    }

    function visual_ani() {
        
        var $tree = {
            tr01 : $(".visual_tree01")
        };
        
        tl_visual.to( //하단 contact 정보 보이기
                $tree.tr01, //대상
                2, //듀레이션
                {left: -40, top: 40} //애니메이션
                );
        
    }
    
    
    
    function initEvent(){
        

        
    }
    
    
    
    $(window).on('load',function(){
        init();
        visual_ani();
            
    });
    
    
    
    
    
    
    
 
    console.log('--->> visual.js 끝났습니닷 <<---');
});
console.log('---!! 비주얼js 가장 하단의 코드입니다 !!---');


