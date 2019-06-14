window.addEventListener("load",function(){

// IDEA: DETALLE PELICULA

var urlParams = new URLSearchParams(window.location.search);
var query = urlParams.get('id');

var url = "https://api.themoviedb.org/3/movie/" + query + "/videos?api_key=5d02a3447f4e9a0a8eaf7b743846e766&language=en-US"
var urlTrailer = ""

fetch(url)
  .then(function(response) {
    return response.json()
  })
  .then(function(peli) {
    var trailer = peli.results[0].key

    urlTrailer = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + trailer + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  })


var url = "https://api.themoviedb.org/3/movie/"+ query +"?api_key=5d02a3447f4e9a0a8eaf7b743846e766&language=en-US"

fetch(url)
    .then(function(response){
      return response.json();
    })
    .then (function(peli){
       console.log(peli);
       //console.log(data.results);

        var ul = document.querySelector("div.detallemovies ul");
        var li = "";
        var p =  "";
        var a = "";

        var title = "";
        var generos = "";
        var idioma = "";
        var sinopsis = "";
        var estreno = "";
        var poster = "";
        var trailer = "";
        var id = 0
        var urlImagen = "https://image.tmdb.org/t/p/original";
        var arrayDeGeneros = peli.genres
        console.log(arrayDeGeneros);



          title = peli.title
          idioma = peli.original_language
          sinopsis = peli.overview
          estreno = peli.release_date
          poster = peli.poster_path
          id = peli.id

         li = "<li>"
         li += "<p class='movieTitle'>" + title + "</p>"
         li += "<img src='" + urlImagen + poster + "'>"
         li += "<p class='movieData'>" + "<b>Generos:</b> "
         for (var i = 0; i < arrayDeGeneros.length; i++) {
           var gen = arrayDeGeneros[i]
           var nombreGeneros = gen.name
           var idGeneros = gen.id
           li += nombreGeneros
         }

         li += "</p>"
         li += "<p class='movieData'>" + "<b>Idioma original:</b> " + idioma + "</p>"
         li += "<p class='movieData'>" + "<b>Sinapsis:</b> " + sinopsis + "</p>"
         li += "<p class='movieData'>" + "<b>Fecha de estreno:</b> " + estreno + "</p>"
         li += urlTrailer
         li += "</li>"
         ul.innerHTML += li





    })
    .catch(function(error){
      console.log("Error"+ error);
    })


  // IDEA: RECOMENDACIONES


  var boton = document.querySelector("button.recomendaciones")
  boton.addEventListener("click",function(){
    document.querySelector("ul.recomendaciones").style.display = "block";

  })


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

       var ul = document.querySelector("ul.recomendaciones");
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
           a += "<p class='movieTitle'>" + title + "</p>"
         a += "</a>"

         ul.innerHTML += "<li class='mySlides1'>" + a + "</li>"

         // console.log(peli.title);
         // console.log(peli.poster_path);
       }
        showSlides(1, 0);
    })
    .catch(function(error){
      console.log("Error"+ error);
    })

// IDEA: JS DE LOS CORAZONES Y DETALLES PELIS
var botoncorazon = document.querySelector("img.corazonVacio")
console.log(botoncorazon);
botoncorazon.addEventListener("click",function(){
  document.querySelector("img.corazonVacio").style.display = "none";
  document.querySelector("img.corazonLleno").style.display="block";
})

var botoncorazonlleno = document.querySelector("img.corazonLleno")
console.log(botoncorazonlleno);
botoncorazonlleno.addEventListener("click",function(){
  document.querySelector("img.corazonLleno").style.display = "none";
  document.querySelector("img.corazonVacio").style.display="block";
})


// cuando apreta el a de corazon vacio, si ya hizo log in, lo tiene que
// mandar a la pagina de pelisprefes, y sino a la pagina de log in o home (?).
//
// ademas, si ya esta loggueado, debe almacenar esa pelicula en la pagina de
// pelisfavs y deberia llenarse el corazonLleno
//
// si no tiene peliculas favoritas y entra a pelis favs deberia aparecer
// un cartel










})
