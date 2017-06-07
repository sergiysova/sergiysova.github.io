
var left = document.getElementById("substr");
var right = document.getElementById("add");
var inp = document.getElementById("number");
var cart = document.getElementById("cart");

var bread = document.getElementsByClassName("breadcrumbs")[0];


right.onclick  = function () {
	if(!inp.value){inp.value = 1}
		else{
			inp.value = +inp.value+1;
		}
}

left.onclick  = function () {
	if(!inp.value){inp.value = 1}
		else{
			inp.value = +inp.value-1;
		}
		if(inp.value <0){
		SetHide();
		inp.value = 0;
		}
	
}
function Setvisible () {
	
		right.style.width = '42px';
		left.style.width = '42px';
		inp.style.width = '42px';
}
function SetHide () {
	
		right.style.width = '0px';
		left.style.width = '0px';
		inp.style.width = '0px';
}



$(document).click( function(event){ 
if( $(event.target).closest("#cart").length || $(event.target).closest(".product_cart_btn").length) 
return; 
SetHide();
return; 
if( $(event.target).closest("arr_right") ){
	return
}
document.getElementsByClassName("add_visible").classList.remove("add_visible");
});

$(document).click( function(event){ 
if( event.target.classList.contains("arr_right")|| event.target.classList.contains("complex")){
	return;
}
document.getElementsByClassName("add_visible")[0].classList.remove("add_visible");
});


bread.onclick = function(event){
	if(!event.target.classList.contains("complex") && !event.target.classList.contains("arr_right") ){
		return
	}
	if(document.getElementsByClassName("add_visible")[0]){
	document.getElementsByClassName("add_visible")[0].classList.remove("add_visible");
}
	
	else{
	var th = event.target.parentNode.getElementsByClassName("addition") ;
	// th[0].style.display = th[0].style.display =='block'? "none":"block";
	th[0].parentNode.classList.toggle("add_visible");	
	
	}
	


	

	
}
