$(document).ready(function(){
    $(window).resize(function(){
        $('.mid-container').css({
        position:'absolute',
        left: ($(window).width()
            - $('.mid-container').outerWidth())/2,
        top: ($(window).height()
            - $('.mid-container').outerHeight())/2
        });
    });

    $('#blog-link').hover(
        // hover in
        function() {
            $('#main-header').text('Comming Soon')
        },
        // hover out
        function() {
            $('#main-header').text('Saša Savić')
        }
    )

    $(window).resize();

});
