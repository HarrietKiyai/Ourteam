$(document).ready(function() {
  $("#mannen").click(function() {
    $(".man").css({ "background-color": "green" });
    $("#mannen").toggle();
  });
  $("#vrouwen").click(function() {
    $(".vrouw").css({ "background-color": "blue" });
    if (display === true) {
      $("#vrouwen").show();
    } else if (display === false) {
      $("#vrouwen").hide();
    }
  });
});
