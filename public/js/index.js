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
let word = $(this).attr(".card-title").text()
console.log (word)
function startArtyom(){
    artyom.initialize({
        language: "en-GB", 
        continuous: false, 
        debug: true, 
        listen: true
    })

};

function say(){
    artyom.say($(this).attr(".card-title").text());
};

$(".speaker").click(function(){
  console.log(word);
  console.log("clicked");
  startArtyom();
  say();
})
