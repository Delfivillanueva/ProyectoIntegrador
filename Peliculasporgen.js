window.onload=function(){

var QueryString = new URLSearchParams(location.search)
var nombre= QueryString.get("nombre")
var id= QueryString.get("id")
console.log(id,nombre);

var genreURL = "https://api.themoviedb.org/3/discover/movie?api_key=5d02a3447f4e9a0a8eaf7b743846e766&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&with_genres=" + id
  fetch(genreURL)
  .then(function(response){
    return response.json();
  })

  .then (function (data) {
    console.log(data);
    var h1= document.querySelector("body h1");
    h1.innerHTML+=nombre;
    var ul = document.querySelector("body ul");
    var li = "";
    var arrayDePeliculas= data.results
    var array=0;
    for (var i = 0; i < arrayDePeliculas.length; i++) {
      title = arrayDePeliculas[i].title;
      id= arrayDePeliculas[i].id;
      poster= arrayDePeliculas[i].poster_path
      li = "<li>"
      li += "<p><a href='detallePeliculas.html?id="+ id + "'>" + title + "</a></p>" + "img src='https://image.tmdb.org/t/p/w500" + poster +"'>"
      li += "</li>"
      ul.innerHTML+=li
    }
  })



  .catch(function(error){
    console.log("Error"+ error);
  })




























}
