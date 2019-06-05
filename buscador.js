window.onload=function(){
  var urlParams = new URLSearchParams(window.location.search);
  var texto = urlParams.get('buscar');
console.log(texto);
fetch("https://api.themoviedb.org/3/search/movie?api_key=5d02a3447f4e9a0a8eaf7b743846e766&query="+texto+"&page=1&include_adult=true")
.then(function(response) {
return response.json()
})
.then(function(data){

    console.log(data)
    var ul= document.querySelector("ul")
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
       ul.innerHTML += "<li><p>"+ title + "</p><img scr='"+ urlImagen + poster + "'></li>";
    }
})
.catch(function(error) {
console.log("Error: " + error);
})

































}
