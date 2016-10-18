$(document).ready(function(){
  $("#clickButton").click(function(event){
     $("#steps").slideToggle("fast","swing");
     
      if($(this).attr("class") == "active")
        $(this).removeClass("active");
      else
        $(this).addClass("active");
  });
});
