window.onload = function(){
	var td = document.querySelectorAll('#listTable tbody td'), tdLength = td.length, p = document.querySelector('main header>p');

	//console.log(td);
	for(var i=0; i<tdLength; i++){
		console.log(td[i]);
		var me = /^Maxime$/i;
		td[i].addEventListener('click', function(){
			var oldText = this.textContent;
			var newText = prompt(this.textContent);
			p.textContent = oldText;
			if(me.test(newText.trim())){
				this.textContent = newText;
				this.style.backgroundColor = '#FFFF00';
			} else if(newText.trim().length > 0){
				this.textContent = newText;
				this.style.backgroundColor = '#00FF99';
			} else {
				this.style.backgroundColor = '#FF0066';
			}
		});
	}
}