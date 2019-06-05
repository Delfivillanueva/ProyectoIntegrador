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
         li += "<p>" + title + "</p>"
         li += "<img src='" + urlImagen + poster + "'>"
         li += "<p>" + "Generos: " + nombreGeneros + "</p>"
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










}
