
function runClick() {
	var number1 = document.getElementById('number1');
	var number2 = document.getElementById('number2');
	var num1 = document.getElementById('quant1');
	num1.style.transform = 'rotateX(-90deg)';
	num1.style.transition = '1s';
	var num2 = document.getElementById('quant2');
	num2.style.transform = 'rotateX(-90deg)';
	num2.style.transition = '1s';

	var count = function() {
		var counter = number1.innerHTML + number2.innerHTML;
		counter--;
		var string = String(counter).split('');
		number1.innerHTML = string[0];
		number2.innerHTML = string[1];
		anim();
	}

	var anim = function() {
		num1.style.transform = 'rotateX(0deg)';
		num1.style.transition = '1s';
		num2.style.transform = 'rotateX(0deg)';
		num2.style.transition = '1s';
	}	

	num1.addEventListener('transitionend', function() {
		if (num1.style.transform==='rotateX(-90deg)')count();    	
  	});		
};