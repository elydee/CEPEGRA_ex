$(document).ready(function(){

	// $('#load').on('click', function(){
	// 	$('#listTable tbody').load('../../data/texte/tab_people.html', function(){

	// 	// 	event dans la fonction callback appliquée au chargement
	// 	// 	$('#listTable tbody').on('click', 'tr', function(){
	// 	// 		var text = '';
	// 	// 		$(this).children().each(function(){
	// 	// 			text += $(this).text() + ' ';
	// 	// 		});

	// 	// 		alert(text);
	// 	// 	});

	// 		var cible = document.querySelector('#listTable tbody');

	// 		cible.addEventListener('click', function(e){
	// 			var target = e.target;
	// 			if(target.nodeName == 'TD'){
	// 				var result = '';
	// 				var children = target.parentNode.childNodes;

	// 				for(var i = 0; i < children.length; i++){
	// 					result += children[i].textContent + ' ';
	// 				}

	// 				alert(result);
	// 			};
	// 		});
	// 	});
	// });

	// $.get('../../data/texte/address.xml', function(response){
	// 	//alert(response); // affiche object xml document
	// 	// var birthdates = response.getElementsByTagName('birthday');
	// 	// alert(birthdates[1].textContent);

	// 	$(response).find('member').each(function(index){
	// 		var childs = $(this).children();
	// 		var sex = $(this).attr('sex');
	// 		var row = '<tr><td class="checkbox"><input name="members" value="A' + index + '" type="checkbox"/></td><td>' + childs.eq(0).text() + '</td><td>' + childs.eq(1).text() + '</td><td>' + childs.eq(2).text() + '</td><td>' + sex + '</td></tr>';
	// 		$('#listTable tbody').append(row);
	// 	});
	// });

	// // $ correspond à l'objet global jquery et on lui applique la méthode get pour aller chercher en ajax le fichier concerné, le paramètre response de la fonction va contenir la réponse envoyée par le serveur
	
	// var data = "name=Mulkay&firstname=Alain&dateOfBirth=24%2F02%2F1959&address=Rebecq&zip=0000";

	// var objData={"name":"Mulkay","firstname":"Alain"};

	// $.getJSON("../../data/texte/address.json", data, function(table){
	// 	$.each(table, function(index,member){
	// 		var row = '<tr><td class="checkbox"><input name="members" value="A' + index + '" type="checkbox"/></td><td>' + member.name + '</td><td>' + member.firstname + '</td><td>' + member.dateOfBirth + '</td><td>' +  + '</td></tr>';
	// 		$('#listTable tbody').append(row);
	// 	});
	// });

	var myDatas = {
		name: 'Mulkay',
		firstname: 'Alain'
	};

	$.ajax({
		url: '../../data/texte/address.xml',
		type: 'post', // méthode post ou get
		data: myDatas,
		contentType: 'text/xml', //type du format (application si compilé pour ordinateur, text pour fichier lisible par humain ou php) et sous quelle forme il est traité, il est par défaut en url encoded (x-www-form-urlencoded et pour éviter qu'il ne change l'entête http: in utilise la propriété processData qui reprend un bouléen), mais on peut également le traiter selon le format demandé, soit xml, json, etc.
		processData: false, // false correspond à n'envoit pas les données instantannément, on ne lui attribue false que si le format n'est pas en url encoded
		dataType: 'xml', //format de fichier que le serveur répond, les différents formats sont xml, text, json, html, js
		async: true,
		username: '',
		password: '',
		timeout: 10000,//défini une limite de chargement en dehors duquel on abandonne la requête et s'exprime en milliseconde, ici 10000 correspond à 10s
		global: true, //bouléen qui permet de réaliser des évènements liés à la fonction ajax, par exemple une animation de chargement
		ifModified: false,// si la réponse est équivalente ou non à l'envoit
		beforeSend: function(xhr){
			alert("C'est parti !" + ' ' + typeof xhr + ' ' + xhr);
		}, //permet d'executer une fonction avant l'envoit des données, si l'on met un paramètre à la fonction ce paramètre devient l'objet http request
		success: function(response, xhr, textStatus){
			alert(response + ' ' + xhr + ' ' + textStatus);
		}, //permet également d'executer une fonction après avoir obtenu la réponse, le paramètre response contient la réponse, le deuxième l'objet xhr, le troisième l'objet textStatus qui contient le statut des données 
		error: function(xhr, textStatus){
			alert('error' + textStatus);
		}, //idem, en cas d'erreur la fonction s'exécutera
		complete: function(){
			alert('Ajax a fini sa mission');
		} // dans le cas où l'ajax a fait son rôle et a fini sa mission, réussie ou non, il executera la fonction
	})
	
}); //fin .ready