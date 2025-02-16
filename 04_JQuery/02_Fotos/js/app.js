
$(document).ready(function () {
    $(".mueble").hover(
        function(){
            $(this).css("transform", "scale(1.35)");
        },
        function(){
            $(this).css("transform", "scale(1)");
        }
    )
});