$(function(){
	$('.muncul').addClass("hidden").viewportChecker({
		classToAdd: function(){
			return 'visible animated bounce'
		}
	})
})