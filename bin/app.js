$(function(){
	animasi = function(elemen, efek){
		$(elemen).viewportChecker({
			classToAdd: function(){
				return 'animated '+efek
			}
		})
	}
	animasi('.muncul', 'rubberBand')
	animasi('.dari-kiri', 'bounceInLeft')
	animasi('.dari-kanan', 'bounceInRight')
	animasi('.footer .col-xs-12', 'jackInTheBox')
})