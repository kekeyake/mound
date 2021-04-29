$(function () {
    
    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
    
        if ($(window).scrollTop() > 100) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky')
        }
    
    });
    $('#logoTop').off('click').on('click', function(){
        let tg = $('#home').offset().top;
        $('body,html').animate({
            scrollTop: tg  //탑 설정 클수록 덜올라간다
        }, 1000, 'easeInOutExpo');  // 탑 이동 스크롤 속도를 조절할 수 있다.
        return false;
    });
    $('#btnNext').off('click').on('click', function(){
        let tg = $('#mission').offset().top;
        $('body,html').animate({
            scrollTop: tg  //탑 설정 클수록 덜올라간다
        }, 1000, 'easeInOutExpo');  // 탑 이동 스크롤 속도를 조절할 수 있다.
        return false;
    });
    
    $('.btn_language').off('click').on('click', function(){
        $('.language_box').toggleClass('open');
        
        // if ( !$(this).hasClass('open') ) {
        //     $(this).addClass('open');
        //     $('nav').addClass('on');
        // } else {
        //     $(this).removeClass('open');
        //     $('nav').removeClass('on');
        // }
        
    });
    
});