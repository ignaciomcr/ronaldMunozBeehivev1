function BeesComponent(bees, callback) {
    //Se llama a toda la estructura.
    AppComponent.call(this);
     
    //Se añade el contenedorPricipal al documento actual.
    document.body.appendChild(this.contenedorPrincipal);

    var divBees = document.getElementById('divBees');
    

    for (let i = 0; i < bees.length; i++) {
        const bee = bees[i];
        var beeComponent = new BeeComponent(bee, divBees, callback);
    }

}


BeesComponent.prototype = Object.create(AppComponent.prototype);
BeesComponent.prototype.constructor = BeesComponent;


