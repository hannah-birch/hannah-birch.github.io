//For adding active class to nav items
$(function() { 
    $('.site-nav').on('click','.trigger a', function ( e ) {
        e.preventDefault();
        $(this).parents('.site-nav').find('.active').removeClass('active').end().end().addClass('active');
    });
});