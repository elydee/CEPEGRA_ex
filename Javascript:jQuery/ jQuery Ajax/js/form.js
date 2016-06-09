// fonction globale


// variables globales
	


// click sur button action
	
		
// click bouton(s) radio => attraper fieldset pour ajouter/retirer la classe hidden
		
 //$('[type=submit').serialize();

 $.getJSON('../../data/texte/cities.json', function(response){
 	//alert(response);
 	$.each(response, function(index, city){
 		//console.log(city.zip);
 		$('#zip').append('<option value="' + city.zip + '" >' + city.zip + ' ' + city.name + '</option>')
 	});
 });