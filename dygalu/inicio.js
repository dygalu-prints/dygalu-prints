$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 500);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
		}
	});

});