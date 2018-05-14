$(function(){
	animasi = function(elemen, efek){
		$(elemen).addClass("hidden").viewportChecker({
			classToAdd: function(){
				return 'visible animated '+efek
			}
		})	
	}
	animasi('.muncul', 'rubberBand')
})