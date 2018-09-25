// $('.map-container')
// 	.click(function(){
// 			$(this).find('iframe').addClass('clicked')})
// 	.mouseleave(function(){
// 			$(this).find('iframe').removeClass('clicked')});

function blinker() {
    $('.blink_me').fadeIn(500);
}

setInterval(blinker, 2000); //Runs every second

// Timetables departure to different destinations

var timetableHTML = ["ΤΕΡΨΙΘΕΑ-ΕΓΛΥΚΑΔΑ timetable", "ΤΕΡΨΙΘΕΑ-ΔΙΑΚΟΥ"];


function displayVals() {
  var eglykada = "hi";
    
  var diakou = `
                <div>
                  <span>Some HTML here</span>
                </div>
      `;
      
  var singleValues = $( "#single" ).val();
  
if(singleValues == 0){
  $( "#timetable" ).html( "" );
  $("#timetable-title").html("");
  $( '#iframe' ).attr( 'src', function ( i, val ) { return ''; });
  $(".map-background").css("opacity", 0.1);
  $('.map-background').css("background-image", "url(\"/svgs/solid/map-marked-alt.svg\")");
  $(".calendar-alt-background").css("opacity", 0.1);
  $('.calendar-alt-background').css("background-image", "url(\"/svgs/solid/calendar-alt.svg\")");
}
  else if(singleValues === 'eglykada') {
    
    $( "#timetable" ).html(eglykada);
    $("#timetable-title").html("<h5>Ώρες Αναχώρησης</h5>");
    $( '#iframe' ).attr( 'src', function ( i, val ) { return 'https://www.google.com/maps/d/embed?mid=1LP-JieqtwB0htg5y8lecc580J0SqwzkO&z=12'; });
    $(".map-background").css("background-image", "none");
    $(".map-background").css("opacity", 1);
    $(".calendar-alt-background").css("background-image", "none");
    $(".calendar-alt-background").css("opacity", 1);
  }
  else if (singleValues === 'diakou') {
    $("#timetable-title").html("<h5>Ώρες Αναχώρησης</h5>");
    $( "#timetable" ).html(diakou);    
    $( '#iframe' ).attr( 'src', function ( i, val ) { return 'https://www.google.com/maps/d/embed?mid=1Z1rcynjOSOcXCTgqGiuVv-Tj8ADX8RlY&z=13'; });
    $(".map-background").css("background-image", "none");
    $(".map-background").css("opacity", 1);
    $(".calendar-alt-background").css("background-image", "none");
    $(".calendar-alt-background").css("opacity", 1);
  }
  
  
}
$( "select" ).change( displayVals );
displayVals();