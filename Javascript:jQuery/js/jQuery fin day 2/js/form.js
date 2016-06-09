// click bouton(s) radio => attraper fieldset pour ajouter/retirer la classe hidden		
$("fieldset:first :radio").on("click",function(){
	$("fieldset:gt(0)").addClass("hidden");
	switch(this.id){
		case "male" :
			$("fieldset:eq(1)").removeClass("hidden");	
		break;
		case "female" :
			$("fieldset:eq(2)").removeClass("hidden");
	}
});