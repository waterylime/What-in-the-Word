$(document).ready(function() {
<<<<<<< Updated upstream
  $.get("/api/dashboard").then(function(data) {
    $(".member-name").text(data.email);
    $("#search-btn").on("click", function(event) {
=======
  $.get("/api/dashboard").then(function() {
    // $("#user-name").text(data.email);
    $("#search1").on("click", function(event) {
      console.log("submit");
>>>>>>> Stashed changes
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
      console.log(query);
      var queryURL =
        "https://cors-anywhere.herokuapp.com/http://beta.jisho.org/api/v1/search/words?keyword=" +
        encodeURI(query);
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        // var wordDiv = $("<div>");
        // var pOne = $("<p>").text(response[0].meta.id);
        // var pTwo = $("<p>").text(response[0].shortdef[0]);
        // wordDiv.append(pOne, pTwo);
        // $(".card").prepend(wordDiv);
      });
    }
    function french(query) {
      var query = $("#input_text").val();
      var queryURL =
        "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" +
        encodeURI(query) +
        "?key=3634fd55-b777-4316-b6a6-070f3b29b843";
      console.log(queryURL);
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        var wordDiv = $("<div>").addClass("container");
        var saveButton = $("<button>").addClass("button save");
        var pOne = $("<p>").text(response[0].meta.id);
        var pTwo = $("<p>").text(response[0].shortdef[0]);
        wordDiv.append(saveButton, pOne, pTwo);
        $(".card").prepend(wordDiv);
      });
    }
    function spanish(query) {
      var query = $("#input_text").val();
      var queryURL =
        "https://www.dictionaryapi.com/api/v3/references/spanish/json/" +
        encodeURI(query) +
        +"?key=3ff709b9-b76f-4829-8ce8-857a0204cb70";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
      });
    }
  });
});
