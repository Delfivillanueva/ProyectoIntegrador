window.addEventListener("load",function(){
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
      if (poster="") {
        peli = arrayDePelis[i]
        title = peli.title
        console.log(peli);
        id = peli.id
         ul.innerHTML += "<li class='mySlides1'><p class='movieTitle'>"+ title + "</p></li>";
      }
    else {
      peli = arrayDePelis[i]
      title = peli.title
      console.log(peli);
      poster = peli.poster_path
      id = peli.id

      a = "<a href='detallePelis.html?id="+ id + "'>"
        a += "<img src='" + urlImagen + poster + "'>"
        a += "<p class='movieTitle'>" + title + "</p>"
      a += "</a>"
       ul.innerHTML += "<li class='mySlides1'>"+a+"</li>";
    }
    }
      showSlides(1, 0);
})
.catch(function(error) {
console.log("Error: " + error);
})





})
