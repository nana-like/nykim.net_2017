$(function(){


	var $mail_input = $(".visual_mail input");
	
			
	$(window).on("load resize",function(){
			
			var winW = $(window).width();
			
			if(winW<720) {
				$mail_input.attr("placeholder", "이메일을 입력해 주세요.");
			}else if(winW>721){
				$mail_input.attr("placeholder", "더 많은 정보를 받을 이메일을 적어주세요");
			}
			
	});

	
	
	$('#main_contents article .desc>p').wordBreakKeepAll();
	$('.what p').wordBreakKeepAll();



});