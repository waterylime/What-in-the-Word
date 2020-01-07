$(document).ready(function() {
  $(".mainB").on("click", function(event) {
    event.preventDefault();
    var selectedLang = $("#myList :selected").text();
    console.log(selectedLang);
    if (selectedLang === "Japanese") {
      return japanese();
    } else if (selectedLang === "French") {
      return french();
    } else {
      return spanish();
    }
  });
  function japanese(query) {
    var query = $("#input_text").val();
    var queryURL =
      "https://cors-anywhere.herokuapp.com/http://beta.jisho.org/api/v1/search/words?keyword=" +
      query;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
  }
  function french(query) {
    var query = $("#input_text").val();
    var queryURL =
      "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" +
      query +
      "?key=3634fd55-b777-4316-b6a6-070f3b29b843";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
  }
  function spanish(query) {
    var query = $("#input_text").val();
    var queryURL =
      "https://www.dictionaryapi.com/api/v3/references/spanish/json/" +
      query +
      "?key=3ff709b9-b76f-4829-8ce8-857a0204cb70";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
  }
});

let artyom = new Artyom();
function startArtyom(){
    artyom.initialize({
        language: "en-GB", 
        continuous: false, 
        debug: true, 
        listen: true
    })

};

function say(){
    artyom.say();
};

$(".speaker").click(function(){
  let word = $(this).text().stringify()
  console.log(word);
  console.log("clicked");
  startArtyom();
  say();
});




$(".mainB").click(function(){
var query = $("#input_text").val();
console.log(query)
var queryUrl = "https://www.googleapis.com/customsearch/v1?q=" + query + "&cx=008178743786087981107:hpgckvpylnl&searchType=image&key=AIzaSyDXVQjXJ6f75Uw8GzUsbFCMh2oqzge56TQ"
$.ajax({
    url:queryUrl,
    method: "GET",
}).then(function(response) {
    console.log(response.items[0].link)
   

});
});
