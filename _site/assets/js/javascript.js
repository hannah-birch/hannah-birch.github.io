
$(function() {
	$('.site-nav .trigger a').on('click', function() {
		$('.site-nav .trigger a').removeClass('active');
		$(this).addClass('active');
		return false;
	});
});



//For adding active class to nav items
// $(function() { 
//     $('.site-nav').on('click','.trigger a', function (e) {
//         e.preventDefault();
//         $(this).parents('.site-nav').find('.active').removeClass('active').end().end().addClass('active');
//     });
// });