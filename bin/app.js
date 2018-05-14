$(function(){
	animasi = function(elemen, animasi){
		$(elemen).addClass("hidden").viewportChecker({
			classToAdd: 'visible animated '+animasi
		})	
	}
	
})