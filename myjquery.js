/*$(document).ready(function() {
  $("#mannen").click(function() {
    $(".man").css({ "background-color": "green" });
  });
  /*$("#vrouwen").click(function() {
    $(".vrouw").css({ "background-color": "blue" });
  });
});*/

// Loop update
$(document).ready(function() {
  $("#mannen").click(function() {
    if ($(".man").hasClass("green")) {
      $(".man").removeClass("green");
    } else {
      $(".man").addClass("green");
    }
  });
  $("#vrouwen").click(function() {
    if ($(".vrouw").hasClass("blue")) {
      $(".vrouw").removeClass("blue");
    } else {
      $(".vrouw").addClass("blue");
    }
  });
});
