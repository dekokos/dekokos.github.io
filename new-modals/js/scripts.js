$(function() {

    // $("button").click(function() {

    //     var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop(); // Works for Chrome, Firefox, IE...
    //     $('html').addClass('no-scroll').css('top',-scrollTop);

    //     if (hasScrollbar()) {
    //     // с учетом горизонтального скролла. Чтобы небыло рывка при открытии модального окна
    //         var scrollWidth = getScrollbarWidth();
    //         $("html").css({
    //             "margin-right": scrollWidth
    //         });
    //         $(".modal").addClass("active");
    //     } else {
    //         $(".modal").addClass("active");
    //     }

    //     var isIE = /*@cc_on!@*/false || !!document.documentMode;
    //     if (isIE === true) {
    //         // console.log("ie");
    //         var blockPosTop = $(".modal-content").position().top;
    //         // console.log(blockPosTop)
    //         if ( blockPosTop < 0 ) {
    //             console.log(blockPosTop)
    //             $(".modal").css("display", "block");
    //         }else {
    //             $(".modal").removeAttr("style");
    //         }
    //     }
        
    // });

    $("[data-modal]").click(function() {
        showModal($(this).data("modal"));
    });
    function showModal(e) {
        var modal = $("." + e + "");
        var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop(); // Works for Chrome, Firefox, IE...
        $('html').addClass('no-scroll').css('top',-scrollTop);

        if (hasScrollbar()) {
        // с учетом горизонтального скролла. Чтобы небыло рывка при открытии модального окна
            var scrollWidth = getScrollbarWidth();
            $("html").css({
                "margin-right": scrollWidth
            });
            modal.addClass("active");
        } else {
            modal.addClass("active");
        }

        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        if (isIE === true) {
            var blockPosTop = $(".modal-content").position().top;
            if ( blockPosTop < 0 ) {
                console.log(blockPosTop)
                modal.css("display", "block");
            }else {
                modal.removeAttr("style");
            }
        }
    }
    $(".close").click(function() {
        $(".modal").removeClass("active");
        setTimeout(function() {
        var scrollTop = parseInt($('html').css('top'));
            $('html').removeClass('no-scroll');
            $('html,body').scrollTop(-scrollTop);
            $("html").css({
                "margin-right": ""
            });
            $("html").removeAttr("style");           
        }, 300);
    });

    $(".modal").click(function(e) {
        if (!$(e.target).closest(".modal-content").length) {
            $(".modal").removeClass("active");
            setTimeout(function() {
                var scrollTop = parseInt($('html').css('top'));
                $('html').removeClass('no-scroll');
                $('html,body').scrollTop(-scrollTop);
                $("html").css({
                    "margin-right": ""
                });
                $("html").removeAttr("style");
            }, 300);
            e.stopPropagation()//?
        }else{
            // console.log("modal-content click");
        }
            
    });

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
        // console.log(document.body.scrollHeight, document.body.clientHeight);
        // return document.body.scrollHeight > document.body.clientHeight;
        // console.log($(document).height() > $(window).height());
        return $(document).height() > $(window).height();
    }

});