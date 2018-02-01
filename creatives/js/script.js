 $(document).ready(
    function() {
        $("html").niceScroll({
        	cursorcolor:"#000",
        	cursorborder: "none",
        	cursorborderradius:"8px"	
    });

    chooseHeader();
    $(function () {
     $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
      } );

});

$(document).scroll(function () {

	chooseHeader();
});



$("#scroll_down").click(function(){
	$("html,body").animate({scrollTop:1300},"slow");
});


function chooseHeader(){

	if(	($(window).width() <= 768)){
		$('header').addClass('collapsed');
	}
	else {
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if(scrollTop>300){
		$('header').addClass('collapsed');
	}
	else {
		$('header').removeClass('collapsed');
	}
	}
	
}