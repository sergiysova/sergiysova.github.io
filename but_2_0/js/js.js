
var left = document.getElementById("substr");
var right = document.getElementById("add");
var inp = document.getElementById("number");
var cart = document.getElementById("cart");
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
return false; 
});
