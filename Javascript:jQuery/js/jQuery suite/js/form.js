//boutons radio
$('.radio :radio').on('click', function(){
	var firstFieldset = $('fieldset:gt(0)');
	var secondFieldset = $('fieldset:gt(1)');
	firstFieldset.addClass('hidden');
	secondFieldset.addClass('hidden');
	switch(this.id){
		case 'male':
			firstFieldset.removeClass('hidden');
			break;
		case 'female':
				secondFieldset.removeClass('hidden');	
			break;
		default:
		break;

	}
})

//soumission du formulaire
$('.btnZone').on('click', '[type=submit]', function(e){
	e.preventDefault();
	e.stopPropagation();

	//récupération des données
	var inputs = $('#frm1 input'), select = $('#zip:selected'), radios = $(':checked'), datas = inputs.filter('#name');

	// var person = {
	// 	name: ,
	// 	firstname: ,
	// 	birthdate: ,
	// 	address: ,
	// 	zip: ,
	// 	sex: 
	// }
})