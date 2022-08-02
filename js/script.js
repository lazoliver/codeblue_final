$(document).ready(function() {
    $("#btn").click(function() {
        $("nav").toggleClass("dropdown");
        $("#btn").toggleClass("btn-close")
    });
    $("#dropdown").click(function() {
        $("#dropdown").toggleClass("open");
    });
    $("#see-more").click(function() {
        $("#show-more").addClass("store-mobile");
        $("#see-more").hide();
        $("#see-less").show();
    });
    $("#see-less").click(function() {
        $("#show-more").removeClass("store-mobile");
        $("#see-more").show();
        $("#see-less").hide();
    });
});