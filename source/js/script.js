$(document).ready(function(){

  // slider
    $('#dp-slider').cslider({
        current: 0,
        autoplay : true,
        interval: 10000,
        circular: true,
        bgincrement : 50
      });

    $('#dp-middle-eu').cslider({
        current: 0,
        autoplay : true,
        interval: 10000,
        circular: true,
        bgincrement : 50
      });
    $('#dp-middle-rus').cslider({
        current: 0,
        // autoplay : true
      });

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
