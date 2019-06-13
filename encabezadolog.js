window.addEventListener("load",function(){
  console.log(localStorage);
    var usuario = localStorage.getItem("usuario")
    if (usuario.length>0) {
      var ingresar = document.querySelector("a.login")
      var usuarioHeader = document.querySelector("p.nameUsuario")
      var pelisFavs = document.querySelector ("a.pelisPrefes")

      ingresar.style.display = "none";
      usuarioHeader.style.display = "block";
      pelisFavs.style.display = "block";

      usuarioHeader.innerHTML += "<p>" + usuario + "</p>"
    }
    function menuFunction() {
      var b = document.querySelector("form.buscador");
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
        b.style.display = "block";
      } else {
        x.style.display = "block";
         b.style.display = "none";
      }
    }
})
