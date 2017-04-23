$(document).ready(function(){
  // slider1
  $('.js-dp-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  });

//slider1

  $('.dp-middle-js-items li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('.dp-middle-js-items li').removeClass('current');
  $('.dp-middle-js-content').removeClass('current');

  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
});

  // tab1
  $('.dp-js-items li').click(function(){
	var tab_id = $(this).attr('data-tab');

	$('.dp-js-items li').removeClass('current');
	$('.dp-js-content').removeClass('current');

	$(this).addClass('current');
	$("#"+tab_id).addClass('current');
});


});
