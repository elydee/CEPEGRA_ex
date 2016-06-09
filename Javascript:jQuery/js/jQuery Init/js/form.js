// fonction globale
var optValue = function (select) {
	select.options[select.selectedIndex].value;
}

// variables globales
	var gender= null; //=> sexe de l'utilisateur
	var member= []; // array contenant les membres


// click sur button action
	document.querySelector("#frm1 button:last-child").addEventListener("click",function(){
		//création objet et récupération contenu des champs
		
		var person={
			name: document.getElementById("name").value,
			firstname: document.getElementById("firstname").value,
			birthday: document.getElementById("dateOfBirth").value,
			sex: gender,
			address: {
					street: null, 
					zip: optValue(document.getElementById("zip")), 
					city: null
			},
			push: function(x){
				x.push(person);
			}
		};
		//member.push(person);
		person.push(member);

		var row = document.createElement("tr");
		var table = document.getElementById('personTable');
		var tBody = table.querySelector('tbody');
		row.innerHTML ="<td>" + person.name + "</td><td>" + person.firstname  + "</td><td>" + person.birthday+ "</td><td>" + person.sex + "</td> ";
		tBody.appendChild(row);
		table.classList.remove('hidden');
	});
		
		var reset = document.querySelector('button[type=reset]');
		reset.addEventListener('click', function(){
			var table = document.getElementById('personTable');
			table.classList.add('hidden');
		});



// click bouton(s) radio => attraper fieldset pour ajouter/retirer la classe hidden
		var radio = document.querySelectorAll('input[name="sex"]');
		for(var i= 0, longueur =radio.length ; i < longueur  ; i++){
			radio[i].addEventListener("click",function(){
				document.querySelector("fieldset:nth-of-type(2)").classList.add("hidden");
				document.querySelector("fieldset:nth-of-type(3)").classList.add("hidden");
				gender="Inconnu";
				switch(this.value){
					case "M" : 
						document.querySelector("fieldset:nth-of-type(2)").classList.remove("hidden");
						gender="Homme";
					break;	
					case "F" : 
						document.querySelector("fieldset:nth-of-type(3)").classList.remove("hidden");	
						gender="Femme";
					break;
				}
			});
		};	
 