/*footer.js*/
$(function(){
    



    $(window).on('load resize',function(){
        

      siteFooter();

        function siteFooter() {
            var siteContent = $('.contents');
            var siteContentHeight = siteContent.height();
            var siteContentWidth = siteContent.width();

            var siteFooter = $('.footer');
            var siteFooterHeight = siteFooter.height();
            var siteFooterWidth = siteFooter.width();

            siteContent.css({
                "margin-bottom" : siteFooterHeight
            });
        };




    });
    
    $(window).on('load resize',function(){
        

        
    //문서 2/3이상 스크롤 시 on클래스 부여
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
