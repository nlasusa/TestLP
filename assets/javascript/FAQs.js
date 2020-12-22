$(".FAQ-Non-US").click(function(){
  $(".Non-US-FAQ-section").show();
  $(".US-FAQ-section").hide();
});

$(".FAQ-US").click(function(){
  $(".US-FAQ-section").show();
  $(".Non-US-FAQ-section").hide();
});
