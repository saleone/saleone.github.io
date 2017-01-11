$(document).ready(function(){
    $('#blog-link').hover(
        // hover in
        function() {
            $('#main-header').text('Comming Soon')
        },
        // hover out
        function() {
            $('#main-header').text('Saša Savić')
        }
    );
});
