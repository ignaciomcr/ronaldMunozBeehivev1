class BeeComponent {
    constructor(beeRecibido, beesContainerRecibido, callback) {

        //Aquí se va añadiendo cada bee enviado desde beesComponents. 
        this.bee = beeRecibido;

        this.beeContainer = document.createElement('div');
        this.beeContainer.id=beeRecibido.name;
        this.nameH3 = document.createElement('h3');
        this.usernameP = document.createElement('p');
        this.emailP = document.createElement('p');
        this.phoneP = document.createElement('p');
        this.cityP = document.createElement('p');
                

        this.beeContainer.appendChild(this.nameH3);
        this.beeContainer.appendChild(this.usernameP);
        this.beeContainer.appendChild(this.emailP);
        this.beeContainer.appendChild(this.phoneP);
        this.beeContainer.appendChild(this.cityP);
        

        this.nameH3.innerHTML = beeRecibido.name;
        this.usernameP.innerHTML = beeRecibido.username;
        this.emailP.innerHTML = beeRecibido.email;
        this.phoneP.innerHTML = beeRecibido.phone;
        this.cityP.innerHTML = beeRecibido.city;
        

        this.beeContainer.classList.add('divBeeContainer');
        this.nameH3.classList.add('beeContainerH3');
        this.usernameP.classList.add('beeContainerP');
        this.emailP.classList.add('beeContainerP');
        this.phoneP.classList.add('beeContainerP');
        this.cityP.classList.add('beeContainerP');

        beesContainerRecibido.appendChild(this.beeContainer);

        this.callback = callback;
        
        
        this.beeContainer.onclick = this.showUserDetails.bind(this);//

    }

    showUserDetails(e) {
        this.callback(this.bee);
    }
}