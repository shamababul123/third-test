// write your JS code here


let count = 0;

function sum() {
	count += 1;
	console.log(count);
	document.querySelector('.for').innerHTML = `${count}`;
	document.querySelector('#more').innerHTML = count*5.99;
}

function sub() {
	count -= 1;
	if (count < 0) {
		count = 0;
		document.querySelector('#more').innerHTML = count*5.99;
	} 
	console.log(count);
	document.querySelector('.for').innerHTML = `${count}`;
	document.querySelector('#more').innerHTML = count*5.99;

}