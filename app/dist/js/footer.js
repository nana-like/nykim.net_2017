$(function(){
    



    $(window).load(function() {
        

        // INITIATE THE FOOTER
      siteFooter();
        // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
        $(window).resize(function() {
            siteFooter();
        });

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
     
        
    });



});
