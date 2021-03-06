$(function () {

    $(".main-title").click(function(e) {
        e.stopPropagation();
        // $(this).nextAll("pre").hide(200);
        $(this).find(".main-content").slideToggle(200);
        $(this).find(".copy-btn").slideToggle(200);
        $(this).find(".inner-title").find(".main-content").hide();
        $(this).find(".inner-title").find(".copy-btn").hide();
    });
    $(".inner-title").click(function(e) {
        e.stopPropagation();
       $(this).find(".main-content").slideToggle(200);
       $(this).find(".copy-btn").slideToggle(200);
    });
    $(".main-content").click(function(e) {
        e.stopPropagation();
    });
    $(".copy-btn").click(function(e) {
       e.stopPropagation();
       let text = $(this).next(".main-content");
        copyToClipboard(text);
        text.css({
            "color": "slategray",
            "transition": "all .3s linear"
        });
        setTimeout(function() {
            text.css({
                "color": "#000",
                "transition": "none"
            });
        }, 1000);
    });

    // копирование текста в буфер обмена
    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
    }

});