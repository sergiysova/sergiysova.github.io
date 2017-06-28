window.onload = function () {
	var elem = document.getElementsByClassName('all');


	

	document.getElementsByClassName('category')[0].onclick = function (event) {
		var target = event.target

		if(!target.tagName=="LI" || target.tagName=="UL"){
			return;
		}
		if(target.classList.contains('active')){
			return;
		}
		else{
			var previous =  document.getElementsByClassName("orange")[0];

			previous.classList.remove('orange');
			var category = target.dataset;
			target.classList.add('orange');
			var catName = category.cat;

			for(var i = 0; i<elem.length; i++){

				if(elem[i].classList.contains(catName)){
					elem[i].style.width = '260px';
					elem[i].style.marginLeft = '10px';
					elem[i].style.marginRight  = '10px';


				}
				else{
					elem[i].style.width  = '0px';
					elem[i].style.marginLeft = '0px';
					elem[i].style.marginRight  = '0px';
				}
			}
			

		}
	}
}
var step = window.innerHeight;
var position = 0;
var marker = true; 
var lastScroll=0;
var nav = document.getElementById('nav');
function moveDown(){
	
	console.log(position);
	if(position <4){
		position++;
		document.getElementsByTagName('header')[0].style.marginTop = -step*position + "px";

	}
	

}

function moveUp(){
	console.log(position);
	if(position>0){
		position--;
		document.getElementsByTagName('header')[0].style.marginTop = -step*position + "px";
		
	}
	
	
}
menu_main.onclick = function (event) {
	var target = event.target;
	var jump = menu_main.getElementsByClassName('act')[0].dataset.screen - target.parentNode.dataset.screen;
	
	if(jump<0){
		for(let i =0; i < -jump; i++){
			moveDown();
		}
	}
	else{
		for(let i =0; i < jump; i++){
			moveUp();
		}
	}
	menu_main.getElementsByClassName('act')[0].classList.remove('act');
	menu_main.getElementsByTagName('li')[position].classList.add('act');
}

$(window).bind('mousewheel', function(event) {
	var scrollNow =  document.documentElement.scrollTop; 
	

	if(marker){
		if (event.originalEvent.wheelDelta >= 0) {
    		moveUp();
		}
		else {
			moveDown();
		}
		marker=false;
		setTimeout(function(){
			marker=true;
		}, 1500);
		menu_main.getElementsByClassName('act')[0].classList.remove('act');
	menu_main.getElementsByTagName('li')[position].classList.add('act');
	}



});


