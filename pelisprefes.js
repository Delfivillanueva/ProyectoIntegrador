window.addEventListener("load",function(){
  console.log(localStorage);
  console.log(localStorage.pelisPrefes);

  var arrayDePelisPrefes= JSON.parse(localStorage.pelisPrefes).carac;
console.log(arrayDePelisPrefes);
for (var i = 0; i < arrayDePelisPrefes.length; i++) {
  var idPelisPrefes= arrayDePelisPrefes[i]
  console.log(idPelisPrefes);
  var url= "https://api.themoviedb.org/3/movie/"+ idPelisPrefes+ "?api_key=5d02a3447f4e9a0a8eaf7b743846e766&language=en-US"
  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
   console.log(data);
   

  })
  .catch(function(error){
    console.log("Error"+ error);
  })


}

































})
