

		
	

	

	
	var left = document.getElementById('left');
	var right = document.getElementById('right');

	left.onclick = moveLeft;
	right.onclick = moveRight;
	// left.addEventListener('click', moveLeft() );





// function moveLeft () {
// 	var arrlside = [];
// 	var slides = document.getElementsByClassName('Element');
// 	var active;
	
	
// 	for(var i = 0; i < slides.length; i++){
		
// 		arrlside[i] = slides[i];
// 		if(arrlside[i].classList.contains('visible')){
// 			active = i;
			
// 		}
// 	}
// 	console.log(active);
// 	if (active == 0) {
// 		left.style.display = "none";
// 		right.style.display = "block";
// 	}
// 	else {
// 		left.style.display = "block";
// 		right.style.display = "block";
// 	arrlside[active].classList.add('hidden');
// 	arrlside[active].classList.remove('visible');
// 	arrlside[active-1].classList.add('visible');
// 	arrlside[active-1].classList.remove('hidden');	
// 	}
// }


// 	function moveRight () {
// 	var arrlside = [];
// 	var slides = document.getElementsByClassName('Element');
// 	var active;
	
	
// 	for(var i = 0; i < slides.length; i++){
		
// 		arrlside[i] = slides[i];
// 		if(arrlside[i].classList.contains('visible')){
// 			active = i;
			
// 		}
// 	}
// 	console.log(active);
// 	if (active == slides.length-1) {
// 		right.style.display = "none";
// 		left.style.display = "block";

// 	}
// 	else {
// 		right.style.display = "block";
// 		left.style.display = "block";
// 	arrlside[active].classList.add('hidden');
// 	arrlside[active].classList.remove('visible');
// 	arrlside[active+1].classList.add('visible');
// 	arrlside[active+1].classList.remove('hidden');	
// 	}
// }

// SLIDER__________________________________________________________
	setInterval(moveRight, 8000); 
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var slide = document.getElementsByClassName("Element");
	var	slide_mr = slide[0].style.marginLeft;
	var step = +document.documentElement.clientWidth ;
	var tumbler_wrap = document.getElementById('tumblers');
	var buttons = document.getElementsByClassName('tumblr');
	left.onclick = moveLeft;
	right.onclick = moveRight;
	var slide_counter = 0;
	tumbler_wrap.onclick = function(event){
		var target = event.target;
		if(!(target.tagName = 'LI') )return;
			for(var i = 0; i<buttons.length;i++){
				if(buttons[i] == target){
					var next = i;
					break;
				}
			}
			var num = next-slide_counter;
			console.log(next + '-' + slide_counter + '=' + num);
			
		if(num >= 0 ){
			for(var i = 0; i<num; i++){
				console.log('right');
				moveRight();	
			}
			}
		else{
			for(var i = 0; i<(-1*num); i++){
				console.log('left');
				moveLeft();
			}
		}	
}



function moveLeft () {
	
	slide_mr = +slide_mr +  step;
	if(slide_mr>0){
		slide_mr = -step*4;
	}

	slide[0].style.marginLeft =slide_mr + 'px' ;
	for(var i = 0; i<buttons.length;i++){
		if(buttons[i].classList.contains('tum_act')){
			
			buttons[i].classList.remove('tum_act');
			buttons[i].classList.add('tum_pas');
			
			if(i == 0){
				buttons[buttons.length-1].classList.add('tum_act');
				buttons[buttons.length-1].classList.remove('tum_pas');
			}else{
				buttons[i-1].classList.add('tum_act');
				buttons[i-1].classList.remove('tum_pas');
			}
			slide_counter = !buttons[i-1] ? buttons.length-1 : i-1;
			break;
			

		}

	}

}
function moveRight () {
	
	//console.log(slide_mr);
	slide_mr = +slide_mr +  -step;
	
	if(slide_mr<=-5*step){
		slide_mr = 8;
	}
	slide[0].style.marginLeft =slide_mr + 'px' ;


	for(var i = 0; i<buttons.length;i++){
		if(buttons[i].classList.contains('tum_act')){
			
			buttons[i].classList.remove('tum_act');
			buttons[i].classList.add('tum_pas');

			
			if(!buttons[i+1]){
				buttons[0].classList.add('tum_act');
				buttons[0].classList.remove('tum_pas');
			}else{
				buttons[i+1].classList.add('tum_act');
				buttons[i+1].classList.remove('tum_pas');
			}
			slide_counter = !buttons[i+1] ? 0 : i+1;
			break;
			

		}
	}
	

}










//SLIDER END................................................




var category = document.getElementById('category');

category.onclick = function (event) {
	var target = event.target;
	if( !target.classList.contains('property') ) return;
	change(target);
	show_selected(target);

}	
function change (node) {
	selected = document.getElementsByClassName('property_active');
	selected[0].classList.remove('property_active');
	node.classList.add('property_active');
 
}
function show_selected (node) {
	
	var elem = document.getElementsByClassName('project-item');
	
	var attr = node.getAttribute('data-category');

	for(var i = 0; i< elem.length; i++){
		if(!elem[i].classList.contains(attr)){
			elem[i].style.display = 'none';
		}
		else{
			elem[i].style.display = 'inline-block';
		}
	}
}

	

document.onclick  = function (event) {
	var target = event.target;
	var parrent = target.parentNode;
	if( !target.classList.contains('more') ) return;
		if(!target.classList.contains("short")){
			parrent.children[1].style.height = '100%';
		}
		else{
			parrent.children[1].style.height = '45px';
		}
		target.classList.toggle('short');
	
	// alert(parent.innerHTML);

	 // parrent.children[1].classList.toggle('short');

}

var icon = document.getElementById('rot_icon');
var menu = document.getElementById('menu-list');

	icon.onclick =function () {

		if( menu.classList.contains('yes') ){
			menu.style.width  = '0px';	
		}
		else{
			menu.style.width = "250px";
		}
		icon.classList.toggle("change");
		
		
		menu.classList.toggle('yes');



	} 
 
	
	
	


