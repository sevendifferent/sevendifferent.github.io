$(function(){
	animasi = function(elemen, efek){
		$(elemen).each(function(){
			$(this).addClass('hidden').viewportChecker({
				classToAdd: function(){
					return 'visible animated '+efek
				}
			})
		})
	}
	animasi('.muncul', 'rubberBand')
	animasi('.dari-kiri', 'bounceInLeft')
	animasi('.dari-kanan', 'bounceInRight')
	animasi('.footer .col-xs-12', 'jackInTheBox')
})