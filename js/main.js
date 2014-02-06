$("#hintbutton").click(function() {
  $( ".hint" ).slideToggle( "slow" );
});

$("#settings").click(function() {
  $( ".sliders" ).slideToggle( "slow" );
});

$(function(){
    $('#slider').slider();
});