function AppComponent() {

    //Aquí se crea toda la estructura de la aplicación.

    this.contenedorPrincipal = document.createElement('div');
    this.contenedorPrincipal.id="divPrincipal";
    this.contenedorPrincipal.classList.add('divPrincipal');

    var divTitulo = document.createElement('div');
    divTitulo.id = 'divTitulo';
    divTitulo.innerHTML="The Beehive";
    divTitulo.classList.add('divTitulo');
    
    var divBees = document.createElement('div');
    divBees.id = 'divBees';
    
    var h1Bees = document.createElement('h1');
    h1Bees.innerHTML = "Bees";
   
    divBees.appendChild(h1Bees);

    h1Bees.classList.add('h1Bees');
    divBees.classList.add('divBees');
    

    var divPosts = document.createElement('div');
    divPosts.id = 'divPosts';
  
    var h1Posts = document.createElement('h1');
    h1Posts.innerHTML = "Bee´s Posts";
   
    divPosts.appendChild(h1Posts);


    h1Posts.classList.add('h1Posts');
    divPosts.classList.add('divPosts');
    

    var divAlbum = document.createElement('div');
    divAlbum.id = 'divAlbum';   
    
    var h1Album = document.createElement('h1');
    h1Album.innerHTML = "Bee´s Album";
   
    divAlbum.appendChild(h1Album);

    h1Album.classList.add('h1Album');
    divAlbum.classList.add('divAlbum');

    var divToDos = document.createElement('div');
    divToDos.id = 'divTodos';

    var h1ToDos = document.createElement('h1');
    h1ToDos.innerHTML = "Bee´s ToDos";
   
    divToDos.appendChild(h1ToDos);

    h1ToDos.classList.add('h1ToDos');
    divToDos.classList.add('divToDos');
    
           
    
    this.contenedorPrincipal.appendChild(divTitulo);
    this.contenedorPrincipal.appendChild(divBees);
    this.contenedorPrincipal.appendChild(divPosts);
    this.contenedorPrincipal.appendChild(divAlbum);
    this.contenedorPrincipal.appendChild(divToDos); 
  

}

AppComponent.prototype.hide = function () {
    this.contenedorPrincipal.hidden = true;
}

AppComponent.prototype.show = function () {
    this.contenedorPrincipal.hidden = false;
}