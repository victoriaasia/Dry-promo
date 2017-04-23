$(document).ready(function(){
  // slider1
  $('.js-d-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  });

  // tab1

  $('.js-items li').click(function(){
	var tab_id = $(this).attr('data-tab');

	$('.js-items li').removeClass('current');
	$('.js-content').removeClass('current');

	$(this).addClass('current');
	$("#"+tab_id).addClass('current');
});


});
