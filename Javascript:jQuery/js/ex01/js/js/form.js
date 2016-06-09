window.addEventListener('load', function(){

	//fonctions globales
	var valueSelect = function(select){
		return select.options[select.selectedIndex].value;
	}

	// boutons radios
	var fieldsets = document.querySelectorAll('.radio input[name=sex]'), fieldsetsLength = fieldsets.length, inputsRadioValid = null, table = [];

	// blocks 
	var blockMen = document.querySelector('fieldset:nth-of-type(2)'), blockWomen = document.querySelector('fieldset:nth-of-type(3)'), monTableau = document.getElementById('personTable'), ajoutTableau = document.querySelector('#personTable tbody');

	// events radio
	for(var i=0; i<fieldsetsLength; i++){
		fieldsets[i].addEventListener('click', function(){
			if(this.value == 'M'){
				blockWomen.classList.add('hidden');
				blockMen.classList.remove('hidden');
				inputsRadioValid = 'Homme';
			} else if(this.value == 'F'){
				blockMen.classList.add('hidden');
				blockWomen.classList.remove('hidden');
				inputsRadioValid = 'Femme';
			} else if(this.value == 'U'){
				blockWomen.classList.add('hidden');
				blockMen.classList.add('hidden');
				inputsRadioValid = 'Non défini';
			}
		});
	};

	//elements formulaire
	

	//constructeur formulaire
	function Form(name, firstname, birthdate, address, zip, sex, bonus){
		this.name = name;
		this.firstname = firstname;
		this.birthdate = birthdate;
		this.address = address;
		this.zip = zip;
		this.sex = sex;
		this.bonus = bonus;
	};

	myForm = document.querySelector('#frm1');

	myForm.addEventListener('submit', function(e){
		e.preventDefault();

		var inputsText = document.querySelectorAll('#frm1 input[type=text]'), selectOptions = document.querySelectorAll('#zip option'), inputsRadio = document.querySelector('#frm1 input[checked=checked]'), checkBox = document.querySelectorAll('.checkbox input[type=checkbox]'), selection = document.getElementById('zip'); 

		var form01 = new Form(
			inputsText[0].value, 
			inputsText[1].value, 
			inputsText[2].value, 
			inputsText[3].value, 
			valueSelect(selection), 
			inputsRadioValid, 
			1
			);

		table.push(form01);

		monTableau.classList.remove('hidden');

		var tr = document.createElement('tr');
		var td = document.createElement('td');

		var tdName = td.cloneNode(false);
		var tdFirstname = td.cloneNode(false);
		var tdBirthday = td.cloneNode(false);
		var tdSex = td.cloneNode(false);
@	
		tdName.appendChild(table[0].name);

		alert(tdName.innerHTML);

		ajoutTableau.appendChild(tr);
		});
});