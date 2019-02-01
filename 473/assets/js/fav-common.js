

$(document).ready(function() {

var n = localStorage.getItem("data1");

n = n ? n.split(',') : [];
const Url = 'https://api.punkapi.com/v2/beers/';
$.ajax({
    url: Url,
    type: "GET",
    success: function(result) {


        for (i=0; i< result.length;i++){

              for(j=0;j<n.length;j++){
                if(result[i].name==n[j]){
            data = '<div class="col-sm-4"><div class="pp-beer-block" id="pp-modal"><div class="pp-img-section"><a href="#"><div class="pp-img"><img src= "' + result[i].image_url + '" class= "pp-item-img img-responsive"></div></a></div><div class="pp-description" onclick="init(event);"><h2>' + result[i].name + '</h2><h5>' + result[i].tagline + '</h5></div></div></div>';
            $('#box').append(data);
          }
          }
        }

    },
    error: function(error) {
        console.log('Error ${error}')
    }
})
});
function search() {
    window.open("../473/search.html");
}
