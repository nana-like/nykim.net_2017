
//splash
//only for PC
$(function(){
    
    function splashAnimation(){
    
            
            $("#splash .title").fadeIn(1200);
            $("#splash .bg_2").animate({opacity:1},2600,function(){
                $("#splash .title").fadeOut(900,function(){
                    $("#splash .title_logo").animate({opacity:1},1200,function(){
                         setTimeout(function(){ location.href="selection_menu.html"; }, 700);
                    });
                });
            });
     
        
    }
    
    
    
    setTimeout(function(){ splashAnimation(); }, 600);
        
  
    
    
    
    
});



//selection_menu
//예약하기, 조회하기 버튼에 마우스를 올리면 나타나는 효과입니다.
$(function(){

	var $selectionMenu = $("#selection_menu .btn");
	
	$selectionMenu.on("mouseenter",function(){
		var idx = $selectionMenu.index($(this));
		$selectionMenu.eq(idx).find(".hover").show();
	});	
	$selectionMenu.on("mouseleave",function(){
		$selectionMenu.find(".hover").hide();
	});
	
	
        
   
});


//popup
$(function(){
    
    
    
    var $popup = $(".popup");
    var $popupInput = $popup.find("input");
    
    var $resInput = $(".popup_res input");
    var $lookupInput = $(".popup_lookup input");
    
    var $resBtn = $(".res_btn");
    var $lookupBtn = $(".lookup_btn");
    
    var typingTimer;
    
  
    
    
    function doneTyping () {
       $popupInput.removeClass("colored"); //입력이 끝나면 글씨색을 검정으로 되돌립니다.
    }
    

    $popupInput.keyup(function(){
        $(this).addClass("colored"); //입력할 때 글씨색을 바꿉니다.
        clearTimeout(typingTimer);
        
        if ($(this).val() != "") { //값이 있으면 폼 스타일을 바꿉니다.
            $(this).addClass("done");
            typingTimer = setTimeout(doneTyping, 500);
        }else{
            $(this).removeClass("done");
        }
        
        
        
        // (예약화면) 1번째, 2번째 폼이 입력됐을 때만 버튼을 활성화 합니다.
        if($resInput.eq(0).val()!="" && $resInput.eq(1).val()!=""){
            $resBtn.addClass("on");
            $(".popup_res ol>li").children("label").removeClass("alert");
        } else {
            $resBtn.removeClass("on");
        }
        
        
        
        
        // (조회화면) 1번째 폼이 입력됐을 때만 버튼을 활성화 합니다.
        if($lookupInput.eq(0).val()!=""){
            $lookupBtn.addClass("on");
            $(".popup_lookup ol>li").children("label").removeClass("alert");
            return false;
        } else {
            $lookupBtn.removeClass("on");
        }
        
        
        
    });
    
    
    $resBtn.on("click",function(evt){
        
        evt.preventDefault();
        
        if (!$(this).hasClass("on")){
            
            if(!$resInput.eq(0).val()){
                $(".popup_res ol>li").eq(0).children("label").addClass("alert");
               }
            if(!$resInput.eq(1).val()){
                $(".popup_res ol>li").eq(1).children("label").addClass("alert");
               }
            
            return false;
            
        }else{
            
            //완료 시 나타나는 화면 처리
            // $(".popup_res").empty().prepend('<p class="complete">예약 신청이 성공적으로 처리되었습니다 :D </p>','<a class="complete_btn" href="#">확인</a>');
            
            //실패 시 나타나는 화면 처리
             $(".popup_res").empty().prepend('<p class="fail">죄송합니다.<br/>일시적인 서버와의 통신 문제로 예약 신청이 정상 처리되지 못했습니다. <br/>처음부터 다시 시도해 주세요.</p>','<a class="fail_btn" href="selection_menu.html">처음으로</a>');
        }
        
    });
    
    
    
    $lookupBtn.on("click",function(evt){
        
        evt.preventDefault();
        
        if (!$(this).hasClass("on")){
            
            if(!$lookupInput.eq(0).val()){
                $(".popup_lookup ol>li").eq(0).children("label").addClass("alert");
               }
            
            return false;
            
        }
        
    });

    

    
    
});




$(function(){
    
   // 임시로 만들어 본 팝업창 열리는 이벤트입니다.
    
    
    //css상에서 팝업을 display:none처리했습니다.
    
    
    
    var $popup = $(".popup");
    
    
    function openPopup(elem) { //팝업창 여는 함수 
        
        var $elem = $(elem);
        
        $(".dim").fadeIn(500,function(){
			$elem.fadeIn();
		});
		$("body").css({"overflow":"hidden"});
    }
   
    function closePopup() { //팝업창 닫는 함수
        $(".dim").fadeOut(300);
        $(".popup").fadeOut(300,function(){
            
            $("body").removeAttr("style");
        });
    }
    
    
    //조회하기 버튼 클릭 시
    $(".btn.search").on("click",function(evt){
        
         evt.preventDefault();
         openPopup(".popup_lookup");
        
    });
    
    //예약 화면에서 시간 클릭 시
    $("#reservation_main a.time").on("click",function(evt){
        if (!$(this).hasClass("full") && !$(this).hasClass("active")){

            evt.preventDefault();
            openPopup(".popup_res");
        }
        
    });
    
    
/*    $(".lookup_btn").on("click",function(evt){
         evt.preventDefault();
         closePopup();
        
    });
    */
    
    //팝업창 내 x버튼 클릭 시
    $(".popup .clse").on("click",function(evt){
         evt.preventDefault();
         closePopup();
        
    });
    
    //dim 클릭 시 팝업창 닫기
    $(".dim").on("click",function(){
		if($popup.is(":visible")){
         closePopup();
		}	
	});
    
    
    //팝업창 자체 클릭 시 버블링 방지
	$popup.on("click",function(evt){
		evt.stopPropagation();
	});
    
    
    //esc키 눌렀을 시 팝업창 닫기
    $(document).on("keyup",function(evt){
		var keyCode = evt.which;
		if( keyCode == 27 ){
         closePopup();
        }
		
	});
    
    
    
    
});


