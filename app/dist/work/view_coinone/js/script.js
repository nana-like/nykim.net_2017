

/*
*   상단 네비게이션의 서브 메뉴 슬라이드 업/다운
*/



/* drop down menu */
$(function(){
	

    /* mouse event */
    var $nav = $("nav"),
      $gnb = $("#gnb"),
      $gnbMenu = $gnb.children("li");
    

    $gnbMenu.on("mouseenter",function(){
        var nowIdx = $gnbMenu.index($(this));
        $nav.children(".bg_sub").stop().slideDown(200,"swing"); //bg show
        $gnbMenu.eq(nowIdx).siblings().children(".sub").hide(); 
        $gnbMenu.eq(nowIdx).children(".sub").stop().fadeIn(320,"swing"); //menu show
    });

    $gnb.on("mouseleave",function(){
        $nav.children(".bg_sub").stop().slideUp(280); //bg hide
        $gnbMenu.children(".sub").hide(); //menu hide
    });

    
    
    $(window).on("load",function(){
        
        /* submenu positioning */
        var menuPos = [],
          menuPadding = 5; //메뉴 왼편에 5px padding값이 들어가 있습니다.

        $gnbMenu.each(function(idx){
            menuPos[idx] = Math.floor( $gnbMenu.eq(idx).position().left );
        });

        $gnb.find(".sub").each(function(idx){
            $(this).css({ left: (menuPos[idx] + menuPadding) });
        });
        
        
    });
    
});





/* filter show/hide */
$(function(){
    
    var $filterBtn = $("#search .filter button"),
        $filterForm = $("#search .searchFilter");
    
    $filterBtn.on("click",function(){
        $filterForm.stop().slideToggle(150); 
    });
    
    
});


	