$(document).ready(function() {
    $("#btn").click(function() {
        $("nav").toggleClass("dropdown");
        $("#btn").toggleClass("btn-close")
    });
});