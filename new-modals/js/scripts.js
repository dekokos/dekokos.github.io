$(function() {
    $("button").click(function() {
        $(".modal").addClass("active");

        var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop(); // Works for Chrome, Firefox, IE...
        $('html').addClass('no-scroll').css('top',-scrollTop);
        if (hasScrollbar()) {
        // с учетом горизонтального скролла. Чтобы небыло рывка при открытии модального окна
            var scrollWidth = getScrollbarWidth();
            $("html").css({
                // "width": "calc(100% -" + scrollWidth + "px)",
                // "width": "100%"
                "margin-right": scrollWidth
                // "overflow-y": "scroll"
                // "position": "fixed"
            });
            console.log("yes")
        } else {
            console.log("no")
            // $("html").css({
            //     "width": "100%"
            // });
        }
        
    });
    $(".close").click(function() {
        $(".modal").removeClass("active");
        // $("body").removeAttr("style");
        // $(window).unbind('scroll'); //Выключить отмену прокрутки
        // window.scroll(0, winScrollTop);
        setTimeout(function() {
        var scrollTop = parseInt($('html').css('top'));
            $('html').removeClass('no-scroll');
            $('html,body').scrollTop(-scrollTop);
            $("html").css({
                "margin-right": ""
            });
        
            // $('html').removeClass('no-scroll');
            
            $("html").removeAttr("style");
           
        }, 300);
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
    
    // $("body").css({
        // "width": "100%"
    // });
    // this._body.style.top = -this._scrollTop + 'px';
}

function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar";

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}
function hasScrollbar() { // проверка на боковой скролл
    return document.body.scrollHeight > document.body.clientHeight;
}

});