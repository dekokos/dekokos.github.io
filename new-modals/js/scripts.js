$(function() {
    $("button").click(function() {
        $(".modal").addClass("active");
        // $("body").css({
            // "overflow": "hidden",
            // "position": "fixed",
            // "height": "100%"
        // });
        // $("html").css({
            // "overflow-y": "scroll"
        // });
        // document.getElementsByTagName("body")[0].style.position="fixed";
        // document.getElementsByTagName("body")[0].style.width="100%";
        // let scrollX = window.scrollX
        // let scrollY = window.scrollY;
        // console.log(scrollX, scrollY);
        // window.onscroll = function () { window.scrollTo(scrollX, scrollY); };
        // OffScroll ();//Запустили отмену прокрутки
        // hideScroll()
        var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop(); // Works for Chrome, Firefox, IE...
        $('html').addClass('no-scroll').css('top',-scrollTop);
        
    });
    $(".close").click(function() {
        $(".modal").removeClass("active");
        // $("body").removeAttr("style");
        // $(window).unbind('scroll'); //Выключить отмену прокрутки
        // window.scroll(0, winScrollTop);
        var scrollTop = parseInt($('html').css('top'));
        $('html').removeClass('no-scroll');
        $('html,body').scrollTop(-scrollTop);
    });
    $(".modal").click(function(e) {
        if (!$(e.target).closest(".modal-content").length) {
            console.log("modal click")
            $(".modal").removeClass("active");
            var scrollTop = parseInt($('html').css('top'));
            $('html').removeClass('no-scroll');
            $('html,body').scrollTop(-scrollTop);
            e.stopPropagation()//?
        }else{
            console.log("modal-content click")
        }
            
    });
    var winScrollTop;
function OffScroll () {
    winScrollTop = $(window).scrollTop();
    $(window).bind('scroll',function () {
        $(window).scrollTop(winScrollTop);
    });
    // $("body").css({
    //     // "overflow": "hidden",
    //     "position": "fixed",
    //     "width": "100%"
    // });
}
 
function hideScroll() {
    // this._body.classList.add('no-scroll');overflow: hidden/height: 100%

    // this._scrollTop = window.pageYOffset; // запоминаем текущую прокрутку сверху
    var winScrollTop = $(window).scrollTop();
    // this._body.style.position = 'fixed';
    $("body").css({
        "position": "fixed"
    });
    // if (this._hasScrollbar()) {
    // // с учетом горизонтального скролла. Чтобы небыло рывка при открытии модального окна
    //     this._body.style.width = `calc(100% - ${this._getScrollbarSize()}px)`;
    // } else {
    //     this._body.style.width = '100%';
    // }
    $("body").css({
        "width": "100%"
    });
    // this._body.style.top = -this._scrollTop + 'px';
    $("body").css({
        "top": -winScrollTop + "px"
    });
}

});