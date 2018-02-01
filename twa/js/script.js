$(document).ready(function() {
	$(".contact_us").click(function(event) {
		var radios = $(".chooseDate");


		for(var i = 0; i<radios.length; i++){
			if(radios[i].checked == true){
				$(".checked").removeClass('checked');
				radios[i].parentNode.classList.add("checked");

			}
		}
	});

	$(".scroll-down").click(function(){
	$("html,body").animate({scrollTop:2000},"slow");
});

});