$(document).ready(function () {

	//메뉴 슬라이드
	$(".headerIn .menu").on("click",function(e){
		$(".headerIn h1, .headerIn .util").toggle();
		$(".headerIn .menu").toggleClass("open");
		$("html").toggleClass("gnbOpen");
		$(".gnbList").toggleClass("open");
		e.preventDefault();
	});

	// 메인 슬라이드 초기 bg 확장
	$(".mainSlide .slide01").addClass("imgScale");

	// 서브 비주얼 초기 bg 확장
	$(".subVisual").addClass("imgScale");
	$(".subVisual .txt").delay(1800).fadeIn();

	/* 커리큘럼 모션 */
	function curriculumMotion(){
		/* 서브 비주얼 영역 마우스버튼 모션 */
		$(".subVisual .scroll").delay(2200).fadeIn();
		/*
		$(".subVisual .scroll").click(function(event){
			event.preventDefault();
			$('html,body').animate({scrollTop:$('.curriculumArea').offset().top}, 500);
		});
		*/

		/* curriculumSlide motion */
		$(window).scroll(function(){
			var scrollTop = $(document).scrollTop();
			//console.log(scrollTop);

			if ($(window).width() > 768 ) {
				if (scrollTop > 1150) {
					$(".curriculumArea + .curriculumSlide").addClass("motionStart");
				}else {
					$(".curriculumArea + .curriculumSlide").removeClass("motionStart");
				}
			} else {
				if (scrollTop > 1200) {
					$(".curriculumArea + .curriculumSlide").addClass("motionStart");
				}else {
					$(".curriculumArea + .curriculumSlide").removeClass("motionStart");
				}
			}
		});
	}
	curriculumMotion();

	/* video search button active */
	$('.videoSearchBoxIn input').each(function(){
		var $cnts = $(this).val();
		var $cntsLength = $cnts.length;
		if( $cntsLength > 0){
			$(this).parent(".videoSearchBoxIn").addClass("active");
		} else {	
			$(this).parent(".videoSearchBoxIn").removeClass("active");
		}
	});
	$('.videoSearchBoxIn input').on('change keyup',function(){
		var $cnts = $(this).val();
		var $cntsLength = $cnts.length;
		if( $cntsLength > 0){
			$(this).parent(".videoSearchBoxIn").addClass("active");
		} else {	
			$(this).parent(".videoSearchBoxIn").removeClass("active");
		}
	});

	/* 비디오 상세보기 스크롤버튼 모션 
	function videoViewScroll(){
		$(".videoView .scroll").click(function(event){
			event.preventDefault();
			$('html,body').animate({scrollTop:$('.videoViewArea').offset().top}, 500);
		});
	}
	videoViewScroll();*/

	/* 비디오 관련상품 목록
	function videoPrdList(){
		var $prdList = $(".prdList .swiper-slide").length;
		if( $prdList < 5){
			$(".prdList").addClass("narrow");
		}
	}
	videoPrdList();
	 */

	/* inquiry, request  */
	function writeTypeMotion(){
		if ($(window).width() > 768 ) {
			$(".subWriteVisual").addClass("active");
		}else {
			$(".subWriteVisual").removeClass("active");
		}
		
		$(window).resize(function(){
			if ($(window).width() > 768 ) {
				$(".subWriteVisual").addClass("active");
			}else {
				$(".subWriteVisual").removeClass("active");
			}
		});

		/* 2017-08-30 제거
		$(".subWriteVisual .scroll").click(function(event){
			event.preventDefault();
			$('html,body').animate({scrollTop:$('.writeType').offset().top}, 500);
		});
		*/

		$(".writeForm .inputObj").on("focus", function(){
			$(this).parents('li').addClass("active");
		})
		$(".writeForm .inputObj").on("blur", function(){
			$(this).parents('li').removeClass("active");
		})
		
		// complete page motion 
		$(".completeArea").delay(500).queue(function(){
			$(this).addClass("active").dequeue();
            $(".searchIn .completeArea").removeClass("active").dequeue(); //검색 영역은 예외
		});
        
        
        
		
	}
	writeTypeMotion();

	// Survey motion
	$(".surveyVisual").addClass("motionStart");

	/* step search active */
	$('.stepSearchArea input').each(function(){
		var $cnts = $(this).val();
		var $cntsLength = $cnts.length;
		if( $cntsLength > 0){
			$(this).parent(".stepSearchArea").addClass("active");
		} else {	
			$(this).parent(".stepSearchArea").removeClass("active");
		}
	});
	$('.stepSearchArea input').on('change keyup',function(){
		var $cnts = $(this).val();
		var $cntsLength = $cnts.length;
		if( $cntsLength > 0){
			$(this).parent(".stepSearchArea").addClass("active");
		} else {	
			$(this).parent(".stepSearchArea").removeClass("active");
		}
	});

	// Product motion
	/*$(".productArea").addClass("motionStart");
*/
	// contents bg 확장
	$(".contentsSlide").addClass("imgScale");

	// Product videoPopLayer
	$(".videoPopLayer .btnClose").click(function(event){
		event.preventDefault();
		$('.videoPopLayer').hide();
	});
	
	//support map
	var $btnForMAp = $('.supportList .btnMore'),
	  $moreInfoArea = $('.moreInfoArea');
	
	
	var showMoreInfoArea = function showMoreInfoAreaFunc(){
		
		$('body').addClass('scroll-able');
		$moreInfoArea.css({'margin-top':-40});
		
		$moreInfoArea.stop().slideToggle(1000,'easeInOutQuart',function(){
			$('body').removeClass('scroll-able');
            if ($(window).width() > 768 ) {
			 $(".supportPage .supportMap").css({height:480});
            }else{
			 $(".supportPage .supportMap").css({height:'100%'});
            }
		});
		
		$btnForMAp.toggleClass('active');
		$btnForMAp.find('strong').text(function(i, text){
			return text === "지도 보기" ? "지도 닫기" : "지도 보기";
		});
		
	}
	
	$btnForMAp.on('click',function(evt){
		evt.preventDefault();
		showMoreInfoArea();
	});
	
    
	
	// 서포트 - 로그인 요구 페이지 뒷배경 (별)
    $(".needLogin .curriculumSlide").delay(500).queue(function(){
        $(this).addClass("motionStart").dequeue();
    });
	
	// 서포트 - 고객지원 정보의 동그라미가 눌린 효과
	var $supportCircle = $('.supportList .contents > ul li');
	$supportCircle.on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
    

	// 검색 - 영역 슬라이드
	$(".headerIn .btnSearch").on("click",function(e){
		e.preventDefault();
		$(".headerIn").toggleClass("searchOpen");
		$("body").toggleClass("gnbOpen");
        $(".searchIn .completeArea").toggleClass("active");
        
	});
    

    
    

});


$(function(){

    /*
        170920 | 추가사항
        커리큘럼 하단 문구 배너 모션
    */
    
    var $currPagenation = $('.curriculumSlideCont .pagination li a'); //페이지네이션
    var $currSlide = $('.slide'); //각 슬라이드
    var nowIdx = 0;
    var oldIdx = nowIdx;
    var intervalID = "";
    
    function banner() {
        $currSlide.filter('.active').css({
            opacity: 0
        });
        setTimeout(function() {
            $currSlide.eq(nowIdx).css({
                opacity: 1
            }).addClass('active').siblings().removeClass('active');
        }, 500);
    }

    function autoPlay() {
        intervalID = setInterval(function() {
            nowIdx >= $currSlide.size()-1 ? nowIdx=0 : nowIdx++;
            banner();
            $currPagenation.eq(nowIdx).parents().addClass('active').siblings().removeClass('active');
        }, 5000);
    }

    function autoStop() {
        clearInterval(intervalID);
    }
    
    $currPagenation.on('click', function(evt) {
        evt.preventDefault();
        autoStop();
        nowIdx = $currPagenation.index($(this));
        $currPagenation.eq(nowIdx).parents().addClass('active').siblings().removeClass('active');
        if (oldIdx != nowIdx) {
            banner();
        }
        oldIdx = nowIdx;
        autoPlay();
    });
    
    $(window).on('load',function(){
        autoPlay();
    });
    
    
    /*
        171018 | 추가사항
        하단 푸터 문자열 강제 개행
    */
    
    
    var html = $('.footerIn>p').html();
    
    $(window).on('load resize',function(){
        var winW = $(window).width();
        var text = "";
        
        (winW<769) ? text = html.replace(/((\w+\W+){5})/,'$1<br/>')  :  text = html
        
        $('.footerIn>p').html(text);
    });
    
    
});



//공통 사용 modal
var _ModalPopupBackgroundID = 'modal';
function ShowModalPopup(modalPopupID) {
	var popupID = "#" + modalPopupID;
	var popupMarginTop = $(popupID).height() / 2;
	var popupMarginLeft = $(popupID).width() / 2;
	//$('body').css('overflow', 'hidden');
	$(popupID).css({
		'left': '50%',
		'top': '50%',
		'margin-top': -popupMarginTop,
		'margin-left': -popupMarginLeft,
		'display': 'block',
		'position': 'absolute',
		'z-index': 91
	});

	var backgroundSelector = $('<div id="' + _ModalPopupBackgroundID + '" ></div>');
	backgroundSelector.appendTo('.layerPopArea');

	backgroundSelector.css({
		'width': $(".layerPopArea").width(),
		'height': $(".layerPopArea").height(),
		'display': 'none',
		'background-color': '#000',
		'filter':'alpha(opacity=80)',
		'position': 'absolute',
		'top': 0,
		'left': 0,
		'z-index': 90
	});

	backgroundSelector.fadeTo('fast', 0.8);
		 backgroundSelector.click(function(){
			 HideModalPopup(modalPopupID)
	});

}
function HideModalPopup(modalPopupID) {
	$("#" + modalPopupID).css('display', 'none');
	$("#" + _ModalPopupBackgroundID).remove();
	//$('body').css('overflow', 'auto');
}
