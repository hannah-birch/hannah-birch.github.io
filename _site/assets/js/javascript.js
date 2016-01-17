$(".trigger a").each(function() {
  var link = this.pathname;
  if (link == window.location.pathname) {
    $(this).addClass("active")
  }
})




// $(function() {
// 	$('.site-nav .trigger a').on('click', function(e) {
// 		e.preventDefault();
// 		$('.site-nav .trigger a').removeClass('active');
// 		$(this).addClass('active');
// 	});
// });