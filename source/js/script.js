$(document).ready(function(){

  // slider1
    $('#dp-slider').cslider();

    $('#dp-middle-eu').cslider();
    $('#dp-middle-rus').cslider();

  // tab1
  $('.js-dp-items li').click(function(){
	var tab_id = $(this).attr('data-tab');

	$('.js-dp-items li').removeClass('current');
	$('.js-dp-content').removeClass('current');

	$(this).addClass('current');
	$("#"+tab_id).addClass('current');
});

// tab2

$('.js-dp-middle-items li').click(function(){
var tab_id = $(this).attr('data-tab');

$('.js-dp-middle-items li').removeClass('current');
$('.js-dp-middle-content').removeClass('current');

$(this).addClass('current');
$("#"+tab_id).addClass('current');
});


});
