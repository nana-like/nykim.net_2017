$(function(){


	var $mail_input = $(".visual_mail input");
			
	$(window).on("load resize",function(){
			
			var winW = $(window).width();
			
			if(winW<720) {
				$mail_input.attr("placeholder", "Enter your e-mail here!");
			}else if(winW>721){
				$mail_input.attr("placeholder", "Enter your e-mail and keep updated!");
			}
			
		});



});