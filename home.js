window.onload = function () {

// IDEA: pelis populares
  var url = "https://api.themoviedb.org/3/movie/popular?api_key=5d02a3447f4e9a0a8eaf7b743846e766&language=en-US&page=1"
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then (function(data){
       //console.log(data);
       //console.log(data.results);

       var ul = document.querySelector("ul.peliculaspopu");
       var li = "";
       var p =  "";
       var a = "";
       var arrayDePelis = data.results;
       var peli = "";
       var title = "";
       var poster = "";
       var id = 0
       var urlImagen = "https://image.tmdb.org/t/p/original";

       for (var i = 0; i < arrayDePelis.length; i++) {
         peli = arrayDePelis[i]
         title = peli.title
         poster = peli.poster_path
         id = peli.id

         a = "<a href='detallePelis.html?id="+ id + "'>"
           a += "<img src='" + urlImagen + poster + "'>"
           a += "<p>" + title + "</p>"
         a += "</a>"

         ul.innerHTML += "<li>" + a + "</li>"

         //console.log(peli.title);
         //console.log(peli.poster_path);
       }

    })
    .catch(function(error){
      console.log("Error"+ error);
    })


// IDEA: pelis mas puntuadas

    var url = "https://api.themoviedb.org/3/movie/upcoming?api_key=5d02a3447f4e9a0a8eaf7b743846e766&language=en-US&page=1"
    fetch(url)
      .then(function(response){
        return response.json();
      })
      .then (function(data){
         //console.log(data);
         //console.log(data.results);

         var ul = document.querySelector("ul.proxpeliculas");
         var li = "";
         var p =  "";
         var a = "";
         var arrayDePelis = data.results;
         var peli = "";
         var title = "";
         var poster = "";
         var id = 0
         var urlImagen = "https://image.tmdb.org/t/p/original";

         for (var i = 0; i < arrayDePelis.length; i++) {
           peli = arrayDePelis[i]
           title = peli.title
           poster = peli.poster_path
           id = peli.id

           a = "<a href='detallePelis.html?id="+ id + "'>"
             a += "<img src='" + urlImagen + poster + "'>"
             a += "<p>" + title + "</p>"
           a += "</a>"

           ul.innerHTML += "<li>" + a + "</li>"

           //console.log(peli.title);
           //console.log(peli.poster_path);
         }

      })
      .catch(function(error){
        console.log("Error"+ error);
      })


  // IDEA: proximos Estrenos


  var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=5d02a3447f4e9a0a8eaf7b743846e766&language=en-US&page=1"
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then (function(data){
       //console.log(data);
       //console.log(data.results);

       var ul = document.querySelector("ul.peliculasmaspun");
       var li = "";
       var p =  "";
       var a = "";
       var arrayDePelis = data.results;
       var peli = "";
       var title = "";
       var poster = "";
       var id = 0
       var urlImagen = "https://image.tmdb.org/t/p/original";

       for (var i = 0; i < arrayDePelis.length; i++) {
         peli = arrayDePelis[i]
         title = peli.title
         poster = peli.poster_path
         id = peli.id

         a = "<a href='detallePelis.html?id="+ id + "'>"
           a += "<img src='" + urlImagen + poster + "'>"
           a += "<p>" + title + "</p>"
         a += "</a>"

         ul.innerHTML += "<li>" + a + "</li>"

         //console.log(peli.title);
         //console.log(peli.poster_path);
       }

    })
    .catch(function(error){
      console.log("Error"+ error);
    })





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
