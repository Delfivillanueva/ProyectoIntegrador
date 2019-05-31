window.onload = function () {
  //var usuarioLogueado = localStorage.getItem("usuario")

  //if (usuarioLogueado != null) {
    //location.href = "home.html"
  //}


  //console.log(localStorage);
  var iniciarSesion = document.querySelector("a.iniciarSesion")
  iniciarSesion.onclick = function (a) {
    a.preventDefault();
    var valor = document.querySelector("input.usuario").value
    var usuario = document.querySelector("input.usuario")
    var mail = document.querySelector("input.mail")
    var genero = document.querySelector("input.genero")


    if (usuario!= null, mail!= null, genero!= null) {
      localStorage.setItem("usuario" , valor)

    }

  }
}
