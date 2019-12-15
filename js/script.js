var ypos,muvsliderpos;

var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-2196019-1']);
	_gaq.push(['_trackPageview']);

	(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	})();
	

function menu(){
ypos=window.pageYOffset;
}

window.addEventListener('scroll',menu);

$(function(){ $('.just').hide();

muvsliderpos = $('#makeMeScrollable').offset();

$(window).scroll(function(){
if (ypos > (muvsliderpos.top -45)) {
	$('nav').addClass('fixo');
	
	$('.just').text('JustLive');
	$('.just').show();
}
else
{

	$('.just').hide();

	$('nav').removeClass('fixo');
}

});


$('.bloco').mouseenter(function(event) {
	$(this).css('opacity', '0.3');
	$('section > article > p').css('opacity', '1');

}).mouseleave(function(event) {
$(this).css('opacity', '1');
	$('section > article > p').css('opacity', '1');
});

			
			





});



