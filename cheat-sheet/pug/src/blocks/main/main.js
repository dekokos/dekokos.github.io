$(function () {

    $(".main-title").click(function(e) {
        e.stopPropagation();
        // $(this).nextAll("pre").hide(200);
        $(this).find(".main-content").slideToggle(200);
        $(this).find(".inner-title").find(".main-content").hide();
    });
    $(".inner-title").click(function(e) {
        e.stopPropagation();
       $(this).find(".main-content").slideToggle(200);
    });

});