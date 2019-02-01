var resArray = [];
var allEntries=[];
var itemCount = 0;
$(document).ready(function() {

    const Url = 'https://api.punkapi.com/v2/beers/';
    $.ajax({
        url: Url,
        type: "GET",
        success: function(result) {

            $.each(result, function(i, j) {
                resArray = result;

                data = '<div class="col-sm-4"><div class="pp-beer-block" id="pp-modal"><div class="pp-img-section"><a href="#"><div class="pp-img"><img src= "' + result[i].image_url + '" class= "pp-item-img img-responsive"></div></a></div><div class="pp-description" onclick="init(event);"><h2>' + result[i].name + '</h2><h5>' + result[i].tagline + '</h5></div></div></div>';
                $('#box').append(data);
            });
        },
        error: function(error) {
            console.log('Error ${error}')
        }
    })
    var test = $('.pp-img-section').width();
    $('.pp-img-section').css({
        height: test
    });
})


window.onscroll = function() { myFunction() };


var header = document.getElementById("pp_navbar");


var sticky = header.offsetTop;


function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


function search() {
    window.open("../473/search.html");
}


function init(event){
  event.preventDefault();
  itemCount ++;
    $('#itemCount').html(itemCount).css('display', 'block');




  var name = $(event.target).text();
   allEntries.push(name);
localStorage.setItem("data1", allEntries);

}
