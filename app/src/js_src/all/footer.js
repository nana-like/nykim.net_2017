$(function(){
    



    $(window).on('load resize',function(){
        

        // INITIATE THE FOOTER
      siteFooter();
        // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
       /* $(window).resize(function() {
            siteFooter();
        });*/

        function siteFooter() {
            var siteContent = $('.contents');
            var siteContentHeight = siteContent.height();
            var siteContentWidth = siteContent.width();

            var siteFooter = $('.footer');
            var siteFooterHeight = siteFooter.height();
            var siteFooterWidth = siteFooter.width();

            console.log('Content Height = ' + siteContentHeight + 'px');
            console.log('Content Width = ' + siteContentWidth + 'px');
            console.log('Footer Height = ' + siteFooterHeight + 'px');
            console.log('Footer Width = ' + siteFooterWidth + 'px');

            siteContent.css({
                "margin-bottom" : siteFooterHeight
            });
        };




    });
    
    $(window).on('load resize',function(){
        
                
        ////////////////////////////////
        // work_tiem의 높이 소수점 제거 //
        ///////////////////////////////
 /*       
        var workH = [];
        $(".work_item").each(function(i){
            workH[i] = $(this).height();
            $(this).height(workH[i]);
            $(this).children().height(workH[i]);
        });
        console.log(workH)*/
        
        //  사이즈 조절 시 이미지 크기에 맞춰 li크기도 줄어들어야 하는데 조절이 어려움 ㅠㅠㅓ이러마ㅣ너뱌ㅔ3@)$#)84
        
        ///////////////////////////////
        
    //문서 2/3이상 스크롤 시 맨 위/아래 버튼 전환 함수
	var scrollBottom = 0;
    var bodyHeight = $(document).height();
	var scrollOverBodyHeight = (bodyHeight/3)*2
	function toTop_or_toBottom(){
		scrollBottom = $(window).scrollTop()+$(window).height();
		if ( scrollBottom >= scrollOverBodyHeight ){
			$('.footer').addClass("on");
		}else{
			$('.footer').removeClass("on");
		}
	}
        
       $(window).on("scroll",function(){toTop_or_toBottom()}); 
        
     
        
    });



});
