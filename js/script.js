$(document).ready(function() {
    $("#btn").click(function() {
        $("nav").toggleClass("dropdown");
        $("#btn").toggleClass("btn-close");
        $(".expand").hide();
    });
    $("#drop").click(function() {
        $("#drop").toggleClass("open");
        $(".expand").toggle();
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
    $("#add-to-cart").click(function() {
        $("#add-to-cart").toggleClass("added");
    });
});