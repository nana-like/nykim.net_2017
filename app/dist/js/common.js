$(function(){
    
    //https://jsfiddle.net/SpYk3/D3DDp/
    //http://jsfiddle.net/vivinantony/onqn2gjj/
  
/*$(window).scroll(function() { 
    $("#visual").css({ 
        'opacity' : 1-(($(this).scrollTop())/550) 
    }); 
    
});
    
    
    //문서 2/3이상 스크롤 시 맨 위/아래 버튼 전환 함수
	var scrollBottom = 0;
	var scrollOverBodyHeight = (bodyHeight/3)*2
	function toTop_or_toBottom(){
		scrollBottom = $(window).scrollTop()+$(window).height();
		if ( scrollBottom >= scrollOverBodyHeight ){
			$('footer').css({opacity:1});
		}else{
			$('footer').css({opacity:0});
		}
	}
    */

});




//full width, height
//https://codepen.io/alienlebarge/pen/yvxco
//https://codepen.io/hudsonmarinho/pen/FHGeK
//https://codepen.io/web2feel/pen/WbgbMm




/*
    parallax footer
    https://codepen.io/mur/pen/bNByOj
*/

$(window).load(function() {
    
    
    
        function calcSize( $event ){
　　WIDTH = window.innerWidth;
　　if( window.orientation % 180 ){
　　　　HEIGHT = window.innerHeight;
　　}else if( ! $event || $event.type == 'orientationchange' ){
　　　　HEIGHT = window.innerHeight +60;
　　}
}
//전체화면모드에 대비해 resize도 이벤트를 건다.
window.addEventListener( 'orientationchange', calcSize );
window.addEventListener( 'resize', calcSize );
//최초에 호출하여 초기화!
calcSize();
        
    
        if( window.outerWidth == screen.width ){
          rate = window.devicePixelRatio;
        }else{
          rate = 1;
        }
        function calcSize_and( $event ){
          WIDTH = window.outerWidth / rate;
          HEIGHT = window.outerHeight / rate;
        }
        window.addEventListener( 'resize', calcSize_and );
        //최초에 호출하여 초기화!
        calcSize_and();
        
    
    
    
    
    
	
	// INITIATE THE FOOTER
  siteFooter();
	// COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
	$(window).resize(function() {
		siteFooter();
	});
	
	function siteFooter() {
		var siteContent = $('#main');
		var siteContentHeight = siteContent.height();
		var siteContentWidth = siteContent.width();

		var siteFooter = $('footer');
		var siteFooterHeight = siteFooter.height();
		var siteFooterWidth = siteFooter.width();

		console.log('Content Height = ' + siteContentHeight + 'px');
		console.log('Content Width = ' + siteContentWidth + 'px');
		console.log('Footer Height = ' + siteFooterHeight + 'px');
		console.log('Footer Width = ' + siteFooterWidth + 'px');

		siteContent.css({
			"margin-bottom" : siteFooterHeight
			//"margin-bottom" : 500 + 50
		});
	};
    

        $(function(){
           $('.burger').on('click', function(){
              $(this).toggleClass('open');
               $('nav').stop().fadeToggle();
               $('html,body').css({'top': -(document.documentElement.scrollTop) + 'px', 'position':'fixed'}).addClass('noScroll')

            });
            
        });

    
});


/*
$(function(){
    
    function getRandomSize(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    var allImages = "";
    

    for (var i = 0; i < 6; i++) {
      var width = getRandomSize(200, 420);
      var height =  getRandomSize(300, 420);
      var idx = Math.floor( Math.random()*6 );
      allImages += '<a href="#"><img src="https://unsplash.it/'+width+'/'+height+'/?image=8'+idx+'" alt="nykim"></a>';
    }
    
    var temp = '<a href="#"><img src="images/temp.jpeg"></a>';
   
    $('#photos').append(allImages);
    $('#photos').append(temp);
 
    
    console.log(allImages);
    
});
*/


//background-image: url(https://unsplash.it/1600/800/?image=674)