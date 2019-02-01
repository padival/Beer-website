function find(event)
{
event.preventDefault();
var textbox = document.getElementById('search-input');

textbox.value = textbox.value.charAt(0).toUpperCase() + textbox.value.slice(1);
  var name = document.getElementById("search-input").value;
  document.getElementById("search-input").value = "";
  const Url='https://api.punkapi.com/v2/beers/';
  $.ajax({
    url: Url,
    type:"GET",
    success:function(result){

      $.each(result,function(i,j){
if (result[i].name === name) {
    search='<h3>Name: '+result[i].name+'</h3><h4>Description: '+result[i].description+'<br/><br/>Alcohol Content: '+result[i].abv+'<br/><br/>First Brewed: '+result[i].first_brewed+'<br/><br/>Tastes Good With: '+result[i].food_pairing+'<br/><br/>Contributor: '+result[i].contributed_by+'</h4>';
    $('#results').append(search);
  }


});
},
error:function(error){
console.log('Error ${error}')
}
})
}
