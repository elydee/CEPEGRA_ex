$('aside').on('click', 'h2', function(){
	$('.btnGroup .button').toggleClass('hidden');
}).on('click', '#btnHalf', function(){
	$('body').removeClass('largeFont').addClass('half');
}).on('click', '#btnLarge', function(){
	$('body').removeClass('half').addClass('largeFont');
});

// $('aside').on('click', 'h2', function(e){
// 	e.stopPropagation();
// 	$('.btnGroup .button').toggleClass('hidden');
// }).on('click', '.button', function(){
// 	if(this.id == 'btnLarge'){
// 		$('body').removeClass('half').addClass('largeFont')
// 	} else if(this.id == 'btnHalf'){
// 		$('body').addClass('half')
// 	} else if (this.id == "btnNormal"){
// 		$('body').removeClass('half').removeClass('largeFont');
// 	}
// });


$('aside').on('click', 'h2', function(e){
	e.stopPropagation();	
	$('.btnGroup .button').toggleClass('hidden');
}).on('click', '.button', function(e){
	e.stopPropagation();
	var body = $('body');
	if(this.id == 'btnLarge'){
		body.removeClass('half').addClass('largeFont');
	} else if(this.id == 'btnHalf'){
		body.removeClass('largeFont').addClass('half');
	} else if (this.id == 'btnNormal' && body.hasClass('half') || body.hasClass('largeFont')){
		body.removeClass('half').removeClass('largeFont');
	}
});



// var aside = document.getElementsByTagName('aside');

// aside = aside[0];

// for(var p in aside){
// 	aside += " " + p;
// }

// alert(aside);

