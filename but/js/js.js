
var left = document.getElementById("substr");
var right = document.getElementById("add");
var inp = document.getElementById("number");

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
		
		cart.style.display  = 'none';
		inp.value = 0;
		}
	
}
function Setvisible () {
	var cart = document.getElementById("cart");
	cart.style.display  = 'inline-block';

}
// document.onclick = function (event) {
// 	var target = event.target;
// 	if(!target.classList.contains('cart_btn') && !target.classList.contains('product_cart_btn')){
// 		cart.style.display  = 'none';

// 	}
// }


