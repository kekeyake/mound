$(function () {
    
    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        // if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        //     $('#return-to-top').fadeIn(200);    // Fade in the arrow
        // } else {
        //     $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        // }
        // let scPos = $(this).scrollTop();
        // let nav = $('nav li');
        if ($(window).scrollTop() > 100) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky')
        }
        // if (scPos >= 0 && scPos <= 850) { 
        //     $(nav).eq(0).addClass('active').siblings().removeClass('active');
        //     console.log("1");
        // } else if (scPos >= 851 && scPos <= 1350) {
        //     $(nav).eq(1).addClass('active').siblings().removeClass('active');
        // } else if (scPos >= 1351 && scPos <= 2490) {
        //     $(nav).eq(2).addClass('active').siblings().removeClass('active');
        // } else if (scPos >= 2491 && scPos <= 3156) {
        //     $(nav).eq(3).addClass('active').siblings().removeClass('active');
        // }
        
    });

    $('nav li').on('click', function () {
        
        let _target = $(this).attr('rel');
        let moveTop = $('#' + _target).offset().top;
        
        $('nav').removeClass('on');
        $('.pc_menu').removeClass('open');

        $(this).addClass('active').siblings().removeClass('active');

        $('body,html').animate({
            scrollTop: moveTop  //탑 설정 클수록 덜올라간다
        }, 1000, 'easeInOutExpo');  // 탑 이동 스크롤 속도를 조절할 수 있다.
        return false;
    });
    $('#btnNext').off('click').on('click', function(){
        let tg = $('#mission').offset().top;
        $('body,html').animate({
            scrollTop: tg  //탑 설정 클수록 덜올라간다
        }, 1000, 'easeInOutExpo');  // 탑 이동 스크롤 속도를 조절할 수 있다.
    });
    $('#logoTop').off('click').on('click', function(){
        let tg = $('#home').offset().top;
        $('body,html').animate({
            scrollTop: tg  //탑 설정 클수록 덜올라간다
        }, 1000, 'easeInOutExpo');  // 탑 이동 스크롤 속도를 조절할 수 있다.
    });

    $('.pc_menu').off('click').on('click', function(){
        if ( !$(this).hasClass('open') ) {
            $(this).addClass('open');
            $('nav').addClass('on');
        } else {
            $(this).removeClass('open');
            $('nav').removeClass('on');
        }
        
    });
    
});