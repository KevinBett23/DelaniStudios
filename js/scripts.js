$(document).ready(function() {
  $("#contacts form").submit(function(event) {
    var fullname = $("input#name").val();
    var email = $("input#mail").val();
    var text = $("textarea#textarea").val();

    $(".name").text(fullname);
    $(".mail").text(email);
    $(".text").text(text);
