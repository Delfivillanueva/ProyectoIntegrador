window.onload = function () {
  console.log(localStorage);
    var usuario = localStorage.getItem("usuario")
    if (usuario.length>0) {
      console.log("entramos al if");
      var ingresar = document.querySelector("a.login")
      var usuario = document.querySelector("p.nameUsuario")
      var pelisFavs = document.querySelector ("a.pelisPrefes")
      //console.log(ingresar);
      //console.log(usuario);
      //console.log(pelisFavs);

    //  ingresar.style.display = block;
    //  usuario.style.display = block;
    //  pelisFavs.style.display = block;
    }



}
