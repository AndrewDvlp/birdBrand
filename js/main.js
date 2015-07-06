$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	$('.logo').css({
		'transform' : 'translate(-'+ wScroll / 75 +'%, '+ wScroll / 2 +'%)'
	});

	$('.back-bird').css({
		'transform' : 'translate('+ wScroll / 150 +'%, '+ wScroll / 4 +'%)'
	});

	$('.fore-bird').css({
		'transform' : 'translate('+ wScroll / 100 +'%, -'+ wScroll / 120 +'%)'
	});

	if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2 )) {
		$('.clothes-pics figure').each(function(i){
			setTimeout(function(){
				$('.clothes-pics figure').eq(i).addClass('is-showing');
			}, 90 * (i+1));
		});
	}
	
	if (wScroll - $('.large-window').offset().top > 0) {
		$('.large-window').css({'background-position':'center 0px'});
		$('.large-window').css({'background-attachment': 'scroll'});
	}
	else {
		$('.large-window').css({'background-position':'center ' + (wScroll - $('.large-window').offset().top) + 'px'});
		var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);
		$('.window-tint').css({'opacity': opacity});
		$('.large-window').css({'background-attachment': 'fixed'});
	}

	if(wScroll > $('.blog-posts').offset().top - $(window).height()){
