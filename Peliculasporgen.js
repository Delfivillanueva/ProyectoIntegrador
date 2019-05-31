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
  .then (function(data){
     console.log(data);


  })
  .catch(function(error){
    console.log("Error"+ error);
  })




























}
