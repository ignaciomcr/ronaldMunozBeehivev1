"use strict"
window.addEventListener('load', init, false);

function init() {
	var bees = [];

	bees.push(new Bee('Esteban Padilla','epadilla', 'ep@mail.com', '8706-6660','San José'));
	bees.push(new Bee('Juan Perez', 'jperez','jp@mail.com', '8000-0001','Cartago'));
	bees.push(new Bee('Maria Gomez','mgomez' ,'mg@mail.com', '8000-0002','Alajuela'));
	bees.push(new Bee('Pedro Fuentes','pfuentes' ,'pf@mail.com', '8000-0003','Heredia'));
	bees.push(new Bee('Jose Rivera','jrivera' ,'jr@mail.com', '8000-0004','Puntarenas'));
	

	
	/* var url = 'https://theevilmouseblog.firebaseio.com/posts.json';
	var request = new XMLHttpRequest();
	request.open('GET', url);
	request.send();
	request.onreadystatechange = processRequest;

	function processRequest(e) {
		var request = e.target;

		if (request.readyState === 4) {
			switch (request.status) {
				case 200:
					console.log('OK');
					processResponse(request.responseText);
					break;
				case 404:
					console.log('Error');
					break;
			}
		}
	}

	function processResponse(response) {
		
		 var data = JSON.parse(response);

		 for (var clave in data) {
            if (data.hasOwnProperty(clave)) {
				var post = data[clave];
                bees.push(new Bee(post.name,post.email, post.city));
            }
		}  
		
	} */




	var beesComponent = new BeesComponent(bees, showBeeDetails);
	var beeDetailComponent = new BeeDetailComponent(onBack);

	//console.log(beesComponent);

	//UIMANAGER
	function showBeeDetails(bee) {
		////***Esta línea oculta todo el esquema.
		//beesComponent.hide();
		beeDetailComponent.showBeeDetails(bee);
	}

	function onBack() {
		beesComponent.show();
		beeDetailComponent.hide();
	}

	 



}