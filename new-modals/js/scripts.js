$(function() {
    $("button").click(function() {
        $(".modal").addClass("active");
        $("body").css({
            "overflow": "hidden"
        });
    });
    $(".close").click(function() {
        $(".modal").removeClass("active");
        $("body").removeAttr("style");
    });
});