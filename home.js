window.onload = function () {
  console.log(localStorage);
    var usuario = localStorage.getItem("usuario")
    if (usuario.length>0) {
      console.log("entramos al if");
      var ingresar = document.querySelector("a.login")
      var usuarioHeader = document.querySelector("p.nameUsuario")
      var pelisFavs = document.querySelector ("a.pelisPrefes")

      ingresar.style.display = "none";
      usuarioHeader.style.display = "block";
      pelisFavs.style.display = "block";

      usuarioHeader.innerHTML += "<p>" + usuario + "</p>"
    }



}
