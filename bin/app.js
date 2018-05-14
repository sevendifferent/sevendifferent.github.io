$(function(){
	animasi = function(elemen, efek){
		$(elemen).addClass('hidden')
		$(elemen).viewportChecker({
			classToAdd: function(){
				return 'visible animated '+efek
			}
		})
	}
	animasi('.muncul', 'rubberBand')
	animasi('.dari-kiri', 'bounceInLeft')
	animasi('.dari-kanan', 'bounceInRight')
})