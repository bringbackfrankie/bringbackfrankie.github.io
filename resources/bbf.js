$(document).ready(function(){
  $("button").click(function(event){
    $(this).blur();
    $(this).toggleClass("active");
    $("#steps").slideToggle("fast","swing");
  });
});
