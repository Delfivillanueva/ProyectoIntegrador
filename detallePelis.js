window.onload = function () {

// IDEA: DETALLE PELICULA

  var urlParams = new URLSearchParams(window.location.search);
  var query = urlParams.get('id');

var url = "https://api.themoviedb.org/3/movie/"+ query +"?api_key=5d02a3447f4e9a0a8eaf7b743846e766&language=en-US"

fetch(url)
    .then(function(response){
      return response.json();
    })
    .then (function(peli){
       console.log(peli);
       //console.log(data.results);

        var ul = document.querySelector("ul");
        var li = "";
        var p =  "";
        var a = "";

        var title = "";
        var generos = "";
        var idioma = "";
        var sinapsis = "";
        var estreno = "";
        var poster = "";
        var trailer = "";
        var id = 0
        var urlImagen = "https://image.tmdb.org/t/p/original";
        var arrayDeGeneros = peli.genres
        console.log(arrayDeGeneros);

        for (var i = 0; i < arrayDeGeneros.length; i++) {
          var gen = arrayDeGeneros[i]
          nombreGeneros = gen.genres
          idGeneros = gen.genres
        }

          title = peli.title
          nombreGeneros = gen.name
          idGeneros = gen.id
          idioma = peli.original_language
          sinapsis = peli.overview
          estreno = peli.release_date
          poster = peli.poster_path
          trailer = peli.video
          id = peli.id

         li = "<li>"
         li += "<p class='movieTitle'>" + title + "</p>"
         li += "<img src='" + urlImagen + poster + "'>"
         li += "<p>" + "Generos: " + nombreGeneros + "</p>"
         // IDEA: me aparece un solo genero
         li += "<p>" + "Idioma original: " + idioma + "</p>"
         li += "<p>" + "Sinapsis: " + sinapsis + "</p>"
         li += "<p>" + "Fecha de estreno: " + estreno + "</p>"
         // IDEA: falta el trailer
         li += "</li>"
         ul.innerHTML += li

         // IDEA: si es undefined deberia desaparecer "undefined"



    })
    .catch(function(error){
      console.log("Error"+ error);
    })


  // IDEA: RECOMENDACIONES

  var QueryString = new URLSearchParams(location.search)
  var id= QueryString.get("id")

  var url = "https://api.themoviedb.org/3/movie/" + id + "/recommendations?api_key=5d02a3447f4e9a0a8eaf7b743846e766&language=en-US&page=1"
    fetch (url)
    .then(function(response){
      return response.json();
    })
    .then (function(data){
       // console.log(data);
       console.log(data.results);

       var ul = document.querySelector("ul");
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

         // console.log(peli.title);
         // console.log(peli.poster_path);
       }

    })
    .catch(function(error){
      console.log("Error"+ error);
    })










}
