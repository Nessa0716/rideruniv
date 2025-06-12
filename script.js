$(document).ready(function() {
    $(".hero-content").hover(
        function() {
            $(this).addClass("expanded"); // Add the class to expand the box
        },
        function() {
            $(this).removeClass("expanded"); // Remove the class to shrink the box back
        }
    );
});