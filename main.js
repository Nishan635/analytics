let count = 1;

setInterval(() => {
	var counter = document.querySelectorAll('#counter');
	for(var i = 0; i<counter.length; i++) {
		if(count < 100) {
			count++;
			counter[i].innerText = count;	
		}		
	}
}, 100);



var menu = document.querySelector('.humberger-menu');
var nav = document.querySelector('.hidden-nav');
menu.addEventListener("click", () => {
	nav.classList.toggle('abc');
	document.querySelector('.hidden-nav-inside').classList.toggle('xyz');
});	






const progress = document.querySelectorAll('.progress-done');

setTimeout(() => {
	for(var i = 0; i<progress.length; i++) {
		progress[i].style.width = progress[i].getAttribute('date-done') + '%';
		progress[i].style.opacity = '1';   
	}

}, 2000);


var moreBtn = document.querySelector('#more-btn');
var countries = document.querySelector('#hidden-table');

moreBtn.addEventListener('click', () => {
	countries.style.display = 'block';
})

var showLess = document.querySelector('.show-less');

showLess.addEventListener('click', () => {
	countries.style.display = 'none';
})
